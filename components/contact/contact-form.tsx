"use client";

import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";

import { sendContactMessage } from "@/app/actions/contact";
import type { ContactState } from "@/types/contact";

const initialState: ContactState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const submittedAtRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
    if (submittedAtRef.current) submittedAtRef.current.value = String(Date.now());
  }, [state.status]);
  const errorFor = (field: keyof NonNullable<ContactState["errors"]>) => state.errors?.[field]?.[0];

  return (
    <form ref={formRef} action={formAction} className="contact-form" noValidate>
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <Field label="Nom" name="name" required error={errorFor("name")} autoComplete="name" />
        <Field label="Email" name="email" type="email" required error={errorFor("email")} autoComplete="email" />
        <Field label="Entreprise" name="company" autoComplete="organization" hint="Optionnel" />
        <Field label="Sujet" name="subject" required error={errorFor("subject")} />
      </div>
      <label className="mt-8 block" htmlFor="message"><span className="field-label">Message <b>*</b></span><textarea className="field-control min-h-32 resize-y" id="message" name="message" required aria-invalid={Boolean(errorFor("message"))} aria-describedby={errorFor("message") ? "message-error" : undefined} placeholder="Parlez-moi du besoin, du contexte et du calendrier…" />{errorFor("message") ? <span className="field-error" id="message-error">{errorFor("message")}</span> : null}</label>
      <div className="absolute -left-[10000px]" aria-hidden="true"><label htmlFor="website">Ne pas remplir ce champ</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <input ref={submittedAtRef} type="hidden" name="submittedAt" defaultValue="" />
      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-[var(--text-muted)]">Vos informations servent uniquement à répondre à votre message.</p>
        <button className="button button-primary" type="submit" disabled={pending}>{pending ? <LoaderCircle className="size-4 animate-spin" /> : <ArrowUpRight className="size-4" />}{pending ? "Envoi…" : "Envoyer le message"}</button>
      </div>
      {state.message ? <p className={state.status === "success" ? "form-success" : "form-error"} role={state.status === "success" ? "status" : "alert"}>{state.message}</p> : null}
    </form>
  );
}

type FieldProps = { label: string; name: string; type?: string; required?: boolean; error?: string; hint?: string; autoComplete?: string };

function Field({ label, name, type = "text", required = false, error, hint, autoComplete }: FieldProps) {
  return <label className="block" htmlFor={name}><span className="field-label">{label}{required ? <b> *</b> : null}{hint ? <small>{hint}</small> : null}</span><input className="field-control" id={name} name={name} type={type} required={required} autoComplete={autoComplete} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />{error ? <span className="field-error" id={`${name}-error`}>{error}</span> : null}</label>;
}
