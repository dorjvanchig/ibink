import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Талбарууд дутуу байна" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"IBI Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `[Холбоо барих] ${subject || "Шинэ хүсэлт"} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0d2657; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Шинэ холбоо барих хүсэлт</h2>
          </div>
          <div style="background: #f4f8ff; padding: 32px; border: 1px solid #dde8f8; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; width: 120px; font-size: 14px;">Нэр:</td>
                <td style="padding: 10px 0; color: #0d2657; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px;">И-мэйл:</td>
                <td style="padding: 10px 0; color: #0d2657; font-size: 14px;"><a href="mailto:${email}" style="color: #2d7dd2;">${email}</a></td>
              </tr>
              ${
                phone
                  ? `<tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px;">Утас:</td>
                <td style="padding: 10px 0; color: #0d2657; font-size: 14px;">${phone}</td>
              </tr>`
                  : ""
              }
              ${
                subject
                  ? `<tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px;">Сэдэв:</td>
                <td style="padding: 10px 0; color: #0d2657; font-size: 14px;">${subject}</td>
              </tr>`
                  : ""
              }
            </table>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dde8f8;">
              <p style="color: #666; font-size: 14px; margin: 0 0 8px;">Мессеж:</p>
              <div style="background: white; border: 1px solid #dde8f8; border-radius: 8px; padding: 16px; color: #0d2657; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Илгээхэд алдаа гарлаа" },
      { status: 500 },
    );
  }
}
