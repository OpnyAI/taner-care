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

function renderInternalHtml(p: {
  reason: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
  preferredContact: string;
  consentPrivacy: boolean;
  consentWhatsApp: boolean;
}) {
  return `
    <table cellpadding="6" cellspacing="0" style="font-family: Arial, sans-serif; font-size: 14px;">
      <tr><td><strong>Grund</strong></td><td>${escapeHtml(p.reason)}</td></tr>
      <tr><td><strong>Name</strong></td><td>${escapeHtml(p.name)}</td></tr>
      <tr><td><strong>Telefon</strong></td><td>${escapeHtml(p.phone)}</td></tr>
      <tr><td><strong>E-Mail</strong></td><td>${escapeHtml(p.email)}</td></tr>
      <tr><td><strong>Ort</strong></td><td>${escapeHtml(p.city)}</td></tr>
      <tr><td><strong>Bevorzugter Kontakt</strong></td><td>${escapeHtml(p.preferredContact)}</td></tr>
      <tr><td><strong>Datenschutz</strong></td><td>${p.consentPrivacy ? "Ja" : "Nein"}</td></tr>
      <tr><td><strong>WhatsApp</strong></td><td>${p.consentWhatsApp ? "Ja" : "Nein"}</td></tr>
    </table>
    <p style="font-family: Arial, sans-serif; font-size: 14px;"><strong>Nachricht</strong></p>
    <p style="font-family: Arial, sans-serif; font-size: 14px; white-space: pre-wrap;">${escapeHtml(
      p.message,
    )}</p>
  `;
}

function renderCustomerHtml(p: { name: string }) {
  // Kurz, seriös, Pflege-Kontext. Kannst du später textlich anpassen.
  return `
    <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6;">
      <p>Hallo ${escapeHtml(p.name)},</p>

      <p>vielen Dank für Ihre Anfrage bei <strong>TANER CARE</strong>.</p>

      <p>
        Wir haben Ihre Nachricht erhalten und melden uns zeitnah persönlich bei Ihnen,
        um die nächsten Schritte in Ruhe zu besprechen.
      </p>

      <p style="margin-top: 18px;">
        Freundliche Grüße<br/>
        <strong>TANER CARE</strong><br/>
        <span style="color:#666;">Alltags- & Pflegeunterstützung</span>
      </p>

      <hr style="margin: 18px 0; border:0; border-top:1px solid #eee;" />

      <p style="color:#666; font-size: 12px;">
        Hinweis: Dies ist eine automatische Eingangsbestätigung.
        Bitte antworten Sie nicht auf diese E-Mail.
      </p>
    </div>
  `;
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
  const preferredContact = payload.preferredContact || "";
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
    process.env.CONTACT_FROM_EMAIL?.trim() || "info@taner-care.de";

  const resend = new Resend(apiKey);

  const internalSubject = `Neue Kontaktanfrage – ${name} (${city})`;
  const internalHtml = renderInternalHtml({
    reason,
    name,
    phone,
    email,
    city,
    message,
    preferredContact,
    consentPrivacy,
    consentWhatsApp,
  });

  // 1) Interne Mail (die ist entscheidend)
  const internalResult = await resend.emails.send({
    from: `TANER CARE <${fromEmail}>`,
    to: [toEmail],
    subject: internalSubject,
    html: internalHtml,
    replyTo: email || undefined,
  });

  console.log("RESEND_INTERNAL_RESULT:", internalResult);

  // WICHTIG: result.error prüfen (nicht nur try/catch)
  if (internalResult.error) {
    console.error("RESEND_INTERNAL_ERROR:", internalResult.error);
    return NextResponse.json(
      { ok: false, error: internalResult.error.message || "Email send failed" },
      { status: 500 },
    );
  }

  // 2) Auto-Bestätigung an Kunden (nur wenn Email angegeben)
  let customerId: string | null = null;
  if (email) {
    const customerSubject = "Wir haben Ihre Anfrage erhalten – TANER CARE";
    const customerHtml = renderCustomerHtml({ name });

    const customerResult = await resend.emails.send({
      from: `TANER CARE <${fromEmail}>`,
      to: [email],
      subject: customerSubject,
      html: customerHtml,
      // KEIN replyTo hier, da automatisch
    });

    console.log("RESEND_CUSTOMER_RESULT:", customerResult);

    // Auto-Reply darf interne Mail nicht kaputt machen
    if (!customerResult.error) {
      customerId = customerResult.data?.id ?? null;
    }
  }

  return NextResponse.json({
    ok: true,
    internalId: internalResult.data?.id ?? null,
    customerId,
  });
}
