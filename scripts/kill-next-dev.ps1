# Stops orphaned Next.js dev processes for THIS repo only (won't touch other Node projects).
$ErrorActionPreference = 'SilentlyContinue'

$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path

$lockPath = Join-Path $ProjectRoot '.next\dev\lock'
Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue

$pms = Get-CimInstance Win32_Process -Filter "name = 'node.exe'"
$projPattern = [regex]::Escape($ProjectRoot)

foreach ($p in $pms) {
    $cmd = $p.CommandLine
    if (-not $cmd -or ($cmd -notmatch $projPattern)) { continue }
    $kill = $cmd -match 'next[\\/]dist[\\/]' -or $cmd -match '\\.next[\\/]dev[\\/]'
    if ($kill) {
        Stop-Process -Id $p.ProcessId -Force -ErrorAction SilentlyContinue
    }
}
