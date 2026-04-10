export type TocItem = {
    number: string
    label: string
    anchorId?: string
    subItems?: { number: string; label: string; anchorId?: string }[]
}
