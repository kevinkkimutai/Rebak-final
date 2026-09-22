import { NextResponse } from "next/server";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  const { service, details, name, phone } = await req.json();
  if (!service || !name || !phone) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.QUOTE_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Missing Resend email configuration");
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const safeName = escapeHtml(name);
  const safeService = escapeHtml(service);
  const safeDetails = escapeHtml(details || "Not provided");
  const safePhone = escapeHtml(phone);

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New quote request from ${name}`,
      text: [
        "New quote request from the Rebak Solutions website",
        "",
        `Service needed: ${service}`,
        `Project details: ${details || "Not provided"}`,
        `Name: ${name}`,
        `Phone / WhatsApp: ${phone}`,
      ].join("\n"),
      html: `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New quote request</title>
          </head>
          <body style="margin:0;background:#eef5f2;color:#0f1f1a;font-family:Arial,Helvetica,sans-serif;">
            <div style="width:100%;padding:32px 16px;box-sizing:border-box;">
              <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #dce9e3;border-radius:16px;overflow:hidden;">
                <div style="padding:28px 32px;background:#0b4a34;color:#ffffff;">
                  <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#9de0bd;font-weight:bold;">Rebak Fencing Solutions</div>
                  <h1 style="margin:12px 0 0;font-size:26px;line-height:1.2;font-weight:700;">New quote request</h1>
                  <p style="margin:8px 0 0;color:#d8efe3;font-size:14px;line-height:1.5;">A new enquiry has been submitted from your website.</p>
                </div>

                <div style="padding:32px;">
                  <div style="margin:0 0 24px;padding:16px 18px;background:#f0faf4;border-left:4px solid #0f9d58;border-radius:8px;">
                    <div style="font-size:12px;color:#527066;text-transform:uppercase;letter-spacing:1px;font-weight:bold;">Action requested</div>
                    <div style="margin-top:6px;font-size:16px;line-height:1.45;font-weight:bold;color:#0b4a34;">Please follow up with ${safeName} within 24 hours.</div>
                  </div>

                  <h2 style="margin:0 0 14px;font-size:16px;color:#0b4a34;">Project details</h2>
                  <table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px;">
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #e5eee9;color:#668078;width:38%;vertical-align:top;">Service needed</td>
                      <td style="padding:12px 0;border-bottom:1px solid #e5eee9;font-weight:bold;vertical-align:top;">${safeService}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #e5eee9;color:#668078;vertical-align:top;">Project details</td>
                      <td style="padding:12px 0;border-bottom:1px solid #e5eee9;line-height:1.5;white-space:pre-line;vertical-align:top;">${safeDetails}</td>
                    </tr>
                  </table>

                  <h2 style="margin:28px 0 14px;font-size:16px;color:#0b4a34;">Customer contact</h2>
                  <table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px;">
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #e5eee9;color:#668078;width:38%;">Name</td>
                      <td style="padding:12px 0;border-bottom:1px solid #e5eee9;font-weight:bold;">${safeName}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;color:#668078;">Phone / WhatsApp</td>
                      <td style="padding:12px 0;font-weight:bold;"><a href="tel:${safePhone}" style="color:#0f9d58;text-decoration:none;">${safePhone}</a></td>
                    </tr>
                  </table>
                </div>

                <div style="padding:18px 32px;background:#f7faf8;border-top:1px solid #e5eee9;color:#668078;font-size:12px;line-height:1.5;">
                  This notification was sent from the quote form on the Rebak Fencing Solutions website.
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    }),
  });

  if (!resendResponse.ok) {
    console.error("Resend request failed:", await resendResponse.text());
    return NextResponse.json({ error: "Could not send quote" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
