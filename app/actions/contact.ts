"use server";

import { headers } from "next/headers";
import { z } from "zod";

import { siteConfig } from "@/config/site";
import type { ContactState } from "@/types/contact";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Indiquez au moins 2 caractères.").max(80, "Le nom est trop long."),
  email: z.email("Saisissez une adresse email valide."),
  company: z.string().trim().max(100, "Le nom de l’entreprise est trop long.").optional(),
  subject: z.string().trim().min(3, "Précisez le sujet de votre message.").max(120, "Le sujet est trop long."),
  message: z.string().trim().min(20, "Votre message doit contenir au moins 20 caractères.").max(3000, "Votre message est trop long."),
  website: z.string().max(0),
  submittedAt: z.coerce.number(),
});

const attempts = new Map<string, number[]>();

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

export async function sendContactMessage(_previousState: ContactState, formData: FormData): Promise<ContactState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    const fields = parsed.error.flatten().fieldErrors;
    return { status: "error", message: "Vérifiez les champs signalés.", errors: { name: fields.name, email: fields.email, subject: fields.subject, message: fields.message } };
  }

  if (Date.now() - parsed.data.submittedAt < 1800) return { status: "error", message: "Veuillez patienter quelques secondes avant l’envoi." };

  const requestHeaders = await headers();
  const clientIp = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recentAttempts = (attempts.get(clientIp) ?? []).filter((timestamp) => now - timestamp < 10 * 60 * 1000);
  if (recentAttempts.length >= 3) return { status: "error", message: "Trop de tentatives. Réessayez dans quelques minutes." };
  attempts.set(clientIp, [...recentAttempts, now]);

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  if (!apiKey || !fromEmail) return { status: "error", message: "Le formulaire sera disponible prochainement. Vous pouvez déjà me contacter directement par email ou WhatsApp." };

  const { name, email, company, subject, message } = parsed.data;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html: `<h2>Nouveau message du portfolio</h2><p><strong>Nom :</strong> ${escapeHtml(name)}</p><p><strong>Email :</strong> ${escapeHtml(email)}</p><p><strong>Entreprise :</strong> ${escapeHtml(company || "Non renseignée")}</p><p><strong>Sujet :</strong> ${escapeHtml(subject)}</p><p><strong>Message :</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!response.ok) return { status: "error", message: "Le message n’a pas pu être envoyé. Utilisez l’email ou WhatsApp pour me joindre immédiatement." };
  return { status: "success", message: "Merci ! Votre message a bien été envoyé. Je vous répondrai dès que possible." };
}
