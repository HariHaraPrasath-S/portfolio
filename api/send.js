import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "Portfolio Message <onboarding@resend.dev>",
      to: "hariharaprasath1142@gmail.com",
      reply_to: email,
      subject: "📩 New Portfolio Message",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>📩 New Portfolio Message</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}