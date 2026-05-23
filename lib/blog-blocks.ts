export type BlogBlockHeadingLevel = 1 | 2

export type BlogBlock =
    | {
          id: string
          type: "heading"
          level: BlogBlockHeadingLevel
          text: string
      }
    | {
          id: string
          type: "paragraph"
          text: string
      }
    | {
          id: string
          type: "image"
          url: string
          alt?: string
          caption?: string
      }
    | {
          id: string
          type: "list"
          ordered: boolean
          items: string[]
      }
    | {
          id: string
          type: "callout"
          title?: string
          text: string
      }
    | {
          id: string
          type: "table"
          headers: string[]
          rows: string[][]
      }

export function isBlogBlocks(value: unknown): value is BlogBlock[] {
    if (!Array.isArray(value)) return false
    return value.every((b) => b && typeof b === "object" && "type" in b && "id" in b)
}

