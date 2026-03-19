import { NextResponse } from "next/server";
import { Resend } from "resend";
import dns from "dns/promises";

async function isEmailDomainValid(email) {
  try {
    const domain = email.split("@")[1];
    if (!domain) return false;
    const records = await dns.resolveMx(domain);
    return records && records.length > 0;
  } catch {
    return false;
  }
}

function isEmailFormatValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Нэр, и-мэйл, мессеж талбарыг бөглөнө үү" },
        { status: 400 },
      );
    }

    if (!isEmailFormatValid(email)) {
      return NextResponse.json(
        { error: "И-мэйл хаяг буруу форматтай байна" },
        { status: 400 },
      );
    }

    const domainValid = await isEmailDomainValid(email);
    if (!domainValid) {
      return NextResponse.json(
        {
          error: "И-мэйл хаягийн домэйн байхгүй байна. Зөв и-мэйл оруулна уу.",
        },
        { status: 400 },
      );
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: "Нэрээ бүтнээр оруулна уу" },
        { status: 400 },
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Мессеж хэт богино байна. Дэлгэрэнгүй бичнэ үү." },
        { status: 400 },
      );
    }

    if (phone && !/^[\d\s\-\+\(\)]{6,15}$/.test(phone)) {
      return NextResponse.json(
        { error: "Утасны дугаар буруу байна" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "IBI Website <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO],
      replyTo: email,
      subject: `[Холбоо барих] ${subject || "Шинэ хүсэлт"} — ${name}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f8ff; padding: 20px; border-radius: 16px;">
          <div style="background: linear-gradient(135deg, #0d2657, #2d7dd2); padding: 28px 32px; border-radius: 12px; margin-bottom: 20px;">
            <h2 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">Шинэ холбоо барих хүсэлт</h2>
            <p style="color: rgba(255,255,255,0.6); margin: 6px 0 0; font-size: 13px;">IBI вэбсайтаас ирсэн</p>
          </div>
          <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #dde8f8; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f0f5ff;">
                <td style="padding: 10px 0; color: #888; width: 110px;">Нэр</td>
                <td style="padding: 10px 0; color: #0d2657; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f5ff;">
                <td style="padding: 10px 0; color: #888;">И-мэйл</td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${email}" style="color: #2d7dd2; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${
                phone
                  ? `
              <tr style="border-bottom: 1px solid #f0f5ff;">
                <td style="padding: 10px 0; color: #888;">Утас</td>
                <td style="padding: 10px 0; color: #0d2657;">${phone}</td>
              </tr>`
                  : ""
              }
              ${
                subject
                  ? `
              <tr style="border-bottom: 1px solid #f0f5ff;">
                <td style="padding: 10px 0; color: #888;">Сэдэв</td>
                <td style="padding: 10px 0; color: #0d2657;">${subject}</td>
              </tr>`
                  : ""
              }
            </table>
          </div>
          <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #dde8f8;">
            <p style="color: #888; font-size: 12px; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 1px;">Мессеж</p>
            <p style="color: #0d2657; font-size: 14px; line-height: 1.75; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #aaa; font-size: 11px; text-align: center; margin-top: 20px;">
            Энэ и-мэйл нь ibi.mn вэбсайтын холбоо барих хэсгээс автоматаар илгээгдсэн.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Илгээхэд алдаа гарлаа" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Серверийн алдаа" }, { status: 500 });
  }
}
