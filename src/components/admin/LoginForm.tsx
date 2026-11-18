"use client";

import { useActionState } from "react";
import { login } from "@/app/admin/actions";
import { buttonClass, errorClass, inputClass, labelClass } from "./ui";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, {});

  return (
    <form action={action} className="space-y-4">
      <label className={labelClass}>
        Nome
        <input
          name="name"
          required
          autoComplete="username"
          autoCapitalize="none"
          defaultValue={state.values?.name}
          className={inputClass}
        />
      </label>
      <label className={labelClass}>
        Password
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className={inputClass}
        />
      </label>
      {state.error && (
        <p role="alert" className={errorClass}>
          {state.error}
        </p>
      )}
      <button disabled={pending} className={`${buttonClass} w-full`}>
        {pending ? "Accesso…" : "Entra"}
      </button>
    </form>
  );
}
