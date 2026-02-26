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
      replyTo: email,
      subject: "Message from Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <br/>
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