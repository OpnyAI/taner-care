import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  reason?: string;
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  message?: string;
  preferredContact?: "telefon" | "whatsapp" | "email";
  consentPrivacy?: boolean;
  consentWhatsApp?: boolean;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Missing RESEND_API_KEY" },
      { status: 500 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  const name = getString(payload.name);
  const phone = getString(payload.phone);
  const city = getString(payload.city);
  const email = getString(payload.email);
  const message = getString(payload.message);
  const reason = getString(payload.reason);
  const preferredContact = payload.preferredContact;
  const consentPrivacy = payload.consentPrivacy === true;
  const consentWhatsApp = payload.consentWhatsApp === true;

  if (!name || !phone || !city) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  if (!consentPrivacy) {
    return NextResponse.json(
      { ok: false, error: "Missing privacy consent" },
      { status: 400 },
    );
  }

  if (preferredContact === "whatsapp" && !consentWhatsApp) {
    return NextResponse.json(
      { ok: false, error: "Missing WhatsApp consent" },
      { status: 400 },
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "info@taner-care.de";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev";

  const subject = `Neue Kontaktanfrage – ${name} (${city})`;

  const html = `
    <table cellpadding="6" cellspacing="0" style="font-family: Arial, sans-serif; font-size: 14px;">
      <tr><td><strong>Grund</strong></td><td>${escapeHtml(reason)}</td></tr>
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Telefon</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>E-Mail</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Ort</strong></td><td>${escapeHtml(city)}</td></tr>
      <tr><td><strong>Bevorzugter Kontakt</strong></td><td>${escapeHtml(
        preferredContact || "",
      )}</td></tr>
      <tr><td><strong>Datenschutz</strong></td><td>${
        consentPrivacy ? "Ja" : "Nein"
      }</td></tr>
      <tr><td><strong>WhatsApp</strong></td><td>${
        consentWhatsApp ? "Ja" : "Nein"
      }</td></tr>
    </table>
    <p style="font-family: Arial, sans-serif; font-size: 14px;"><strong>Nachricht</strong></p>
    <p style="font-family: Arial, sans-serif; font-size: 14px; white-space: pre-wrap;">${escapeHtml(
      message,
    )}</p>
  `;

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      // Stabiler: "Name <email@...>" statt nur "email@..."
      from: `TANER CARE <${fromEmail}>`,
      // Stabiler: Array
      to: [toEmail],
      subject,
      html,
      replyTo: email || undefined,
    });

    // Debug (nur lokal sichtbar im Terminal)
    console.log("RESEND_SEND_RESULT:", result);

    // Falls Resend eine ID liefert, geben wir sie zurück (hilft beim Debuggen)
    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
  } catch (error) {
    console.error("RESEND_SEND_ERROR:", error);
    return NextResponse.json(
      { ok: false, error: "Email send failed" },
      { status: 500 },
    );
  }
}
