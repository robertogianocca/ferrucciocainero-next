/**
 * Rich text written with the mini editor in the backend (Tiptap JSON).
 * Only the formatting the editor offers is kept: paragraphs, line breaks,
 * bold, italic, links and numbered/bulleted lists.
 */

export type RichMark = { type: "bold" } | { type: "italic" } | { type: "link"; attrs: { href: string } };

export type RichNode =
  | { type: "text"; text: string; marks?: RichMark[] }
  | { type: "hardBreak" }
  | { type: "paragraph"; content?: RichNode[] }
  | { type: "orderedList"; attrs?: { start?: number }; content?: RichNode[] }
  | { type: "bulletList"; content?: RichNode[] }
  | { type: "listItem"; content?: RichNode[] };

export type RichDoc = { type: "doc"; content: RichNode[] };

export type Attualita = {
  /** ISO date (YYYY-MM-DD) shown above the text */
  date: string;
  doc: RichDoc;
};

/** Links may point to web pages, e-mail addresses, phone numbers or pages of this site. */
export function isSafeHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/i.test(href) || /^\/(?!\/)/.test(href) || href.startsWith("#");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function sanitizeMarks(value: unknown): RichMark[] {
  if (!Array.isArray(value)) return [];
  const marks: RichMark[] = [];
  for (const mark of value) {
    if (!isRecord(mark)) continue;
    if (mark.type === "bold" || mark.type === "italic") marks.push({ type: mark.type });
    if (mark.type === "link" && isRecord(mark.attrs)) {
      const href = typeof mark.attrs.href === "string" ? mark.attrs.href.trim() : "";
      if (href && isSafeHref(href)) marks.push({ type: "link", attrs: { href } });
    }
  }
  return marks;
}

const allowedChildren: Record<string, string[]> = {
  doc: ["paragraph", "orderedList", "bulletList"],
  listItem: ["paragraph", "orderedList", "bulletList"],
  orderedList: ["listItem"],
  bulletList: ["listItem"],
  paragraph: ["text", "hardBreak"],
};

function sanitizeChildren(parent: string, value: unknown): RichNode[] {
  if (!Array.isArray(value)) return [];
  const allowed = allowedChildren[parent] ?? [];
  const nodes: RichNode[] = [];
  for (const node of value) {
    if (!isRecord(node) || typeof node.type !== "string" || !allowed.includes(node.type)) continue;
    switch (node.type) {
      case "text": {
        if (typeof node.text !== "string" || node.text === "") break;
        const marks = sanitizeMarks(node.marks);
        nodes.push(marks.length ? { type: "text", text: node.text, marks } : { type: "text", text: node.text });
        break;
      }
      case "hardBreak":
        nodes.push({ type: "hardBreak" });
        break;
      case "orderedList": {
        const start = isRecord(node.attrs) && Number.isInteger(node.attrs.start) ? Number(node.attrs.start) : 1;
        nodes.push({ type: "orderedList", attrs: { start }, content: sanitizeChildren(node.type, node.content) });
        break;
      }
      case "paragraph": {
        const content = sanitizeChildren(node.type, node.content);
        // Empty lines between paragraphs (and the one the editor keeps at the end) would only add gaps
        if (parent === "doc" && content.length === 0) break;
        nodes.push({ type: "paragraph", content });
        break;
      }
      case "bulletList":
      case "listItem":
        nodes.push({ type: node.type, content: sanitizeChildren(node.type, node.content) });
        break;
    }
  }
  return nodes;
}

/** Returns a clean copy of an editor document, or null if it isn't one. */
export function sanitizeDoc(value: unknown): RichDoc | null {
  if (!isRecord(value) || value.type !== "doc") return null;
  return { type: "doc", content: sanitizeChildren("doc", value.content) };
}
