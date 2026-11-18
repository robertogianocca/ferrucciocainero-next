"use client";

import { useActionState } from "react";
import { deleteEvent } from "@/app/admin/actions";
import { dangerButtonClass, errorClass } from "./ui";

type DeleteEventButtonProps = {
  id: string;
  /** Date and title, repeated in the confirmation question */
  label: string;
  /** Smaller button for the rows of the calendar list */
  compact?: boolean;
};

export default function DeleteEventButton({ id, label, compact = false }: DeleteEventButtonProps) {
  const [state, action, pending] = useActionState(deleteEvent, {});

  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!window.confirm(`Eliminare questa data?\n\n${label}`)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        disabled={pending}
        aria-label={compact ? `Elimina ${label}` : undefined}
        className={
          compact
            ? "rounded bg-red-700 px-4 py-2 text-base font-bold text-white hover:bg-red-800 disabled:opacity-60"
            : dangerButtonClass
        }
      >
        {pending ? "Eliminazione…" : compact ? "Elimina" : "Elimina questa data"}
      </button>
      {state.error && (
        <p role="alert" className={`${errorClass} mt-3`}>
          {state.error}
        </p>
      )}
    </form>
  );
}
