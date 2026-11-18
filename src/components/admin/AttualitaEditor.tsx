"use client";

import { type Editor, EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useActionState, useState } from "react";
import { saveAttualita } from "@/app/admin/actions";
import { type Attualita, isSafeHref } from "@/lib/rich-text";
import { buttonClass, errorClass, inputClass, labelClass } from "./ui";

function editLink(editor: Editor) {
  const current = editor.getAttributes("link").href ?? "";
  const input = window.prompt(
    "Indirizzo del link, per esempio https://www.esempio.ch oppure /calendario/\nLascia vuoto per togliere il link.",
    current,
  );
  if (input === null) return;
  let href = input.trim();
  if (!href) {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    return;
  }
  if (/^www\./i.test(href)) href = `https://${href}`;
  if (!isSafeHref(href)) {
    window.alert("Indirizzo non valido. Deve iniziare con https://, www., / oppure mailto:");
    return;
  }
  if (editor.state.selection.empty && !editor.isActive("link")) {
    // Nothing selected: insert the address itself as a link
    editor
      .chain()
      .focus()
      .insertContent({ type: "text", text: href, marks: [{ type: "link", attrs: { href } }] })
      .run();
    return;
  }
  editor.chain().focus().extendMarkRange("link").setLink({ href }).run();
}

function Toolbar({ editor }: { editor: Editor }) {
  const active = useEditorState({
    editor,
    selector: ({ editor }) => ({
      bold: editor.isActive("bold"),
      italic: editor.isActive("italic"),
      link: editor.isActive("link"),
      orderedList: editor.isActive("orderedList"),
      bulletList: editor.isActive("bulletList"),
    }),
  });

  const buttons = [
    { key: "bold", label: <strong>G</strong>, title: "Grassetto", run: () => editor.chain().focus().toggleBold().run() },
    { key: "italic", label: <em>C</em>, title: "Corsivo", run: () => editor.chain().focus().toggleItalic().run() },
    { key: "link", label: "Link", title: "Link", run: () => editLink(editor) },
    {
      key: "orderedList",
      label: "1. Elenco",
      title: "Elenco numerato",
      run: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      key: "bulletList",
      label: "• Elenco",
      title: "Elenco puntato",
      run: () => editor.chain().focus().toggleBulletList().run(),
    },
  ] as const;

  return (
    <div role="toolbar" aria-label="Formattazione" className="flex flex-wrap gap-1 border-b border-black/25 bg-paper p-1">
      {buttons.map((button) => (
        <button
          key={button.key}
          type="button"
          title={button.title}
          aria-label={button.title}
          aria-pressed={active[button.key]}
          // Keep the focus (and the cursor position) in the text while clicking
          onMouseDown={(e) => e.preventDefault()}
          onClick={button.run}
          className={`min-w-10 rounded px-3 py-1.5 text-base ${
            active[button.key] ? "bg-brand text-white" : "text-cocoa hover:bg-black/10"
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default function AttualitaEditor({ attualita, sha }: { attualita: Attualita; sha: string }) {
  const [state, action, pending] = useActionState(saveAttualita, {});
  const [doc, setDoc] = useState(() => JSON.stringify(attualita.doc));

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: false,
        blockquote: false,
        code: false,
        codeBlock: false,
        horizontalRule: false,
        strike: false,
        underline: false,
        link: {
          openOnClick: false,
          autolink: true,
          defaultProtocol: "https",
          HTMLAttributes: { target: null, rel: null },
        },
      }),
    ],
    content: attualita.doc,
    editorProps: {
      attributes: {
        "aria-label": "Testo di Attualità",
        class: "prose-fc min-h-72 px-4 py-3 text-[17px] focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => setDoc(JSON.stringify(editor.getJSON())),
  });

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="sha" value={sha} />
      <input type="hidden" name="doc" value={doc} />

      <label className={`${labelClass} max-w-56`}>
        Data
        <input name="date" type="date" required defaultValue={attualita.date} className={inputClass} />
      </label>

      <div>
        <p className={labelClass}>Testo</p>
        <div className="mt-1.5 overflow-hidden rounded border border-black/25 focus-within:border-brand focus-within:ring-1 focus-within:ring-brand">
          {editor && <Toolbar editor={editor} />}
          <EditorContent editor={editor} />
        </div>
        <p className="mt-2 text-base text-menu">
          Per un link: seleziona le parole e premi «Link». Invio = nuovo paragrafo, Maiusc+Invio = a capo.
        </p>
      </div>

      {state.error && (
        <p role="alert" className={errorClass}>
          {state.error}
        </p>
      )}

      <button disabled={pending || !editor} className={buttonClass}>
        {pending ? "Salvataggio…" : "Salva"}
      </button>
    </form>
  );
}
