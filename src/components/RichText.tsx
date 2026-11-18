import Link from "next/link";
import type { RichDoc, RichMark, RichNode } from "@/lib/rich-text";

function withMarks(text: React.ReactNode, marks: RichMark[] = []) {
  return marks.reduce<React.ReactNode>((node, mark) => {
    if (mark.type === "bold") return <strong>{node}</strong>;
    if (mark.type === "italic") return <em>{node}</em>;
    const { href } = mark.attrs;
    if (href.startsWith("/")) return <Link href={href}>{node}</Link>;
    if (href.startsWith("#") || /^(mailto|tel):/i.test(href)) return <a href={href}>{node}</a>;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {node}
      </a>
    );
  }, text);
}

function renderNodes(nodes: RichNode[] = []): React.ReactNode[] {
  return nodes.map((node, index) => {
    switch (node.type) {
      case "text":
        return <span key={index}>{withMarks(node.text, node.marks)}</span>;
      case "hardBreak":
        return <br key={index} />;
      case "paragraph":
        return <p key={index}>{renderNodes(node.content)}</p>;
      case "orderedList":
        return (
          <ol key={index} start={node.attrs?.start}>
            {renderNodes(node.content)}
          </ol>
        );
      case "bulletList":
        return <ul key={index}>{renderNodes(node.content)}</ul>;
      case "listItem":
        return <li key={index}>{renderNodes(node.content)}</li>;
    }
  });
}

/** Renders text written with the backend's mini editor (see src/lib/rich-text.ts). */
export default function RichText({ doc, className = "" }: { doc: RichDoc; className?: string }) {
  return <div className={`prose-fc ${className}`}>{renderNodes(doc.content)}</div>;
}
