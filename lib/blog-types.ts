export type TocItem = {
    number: string
    label: string
    subItems?: { number: string; label: string }[]
}
