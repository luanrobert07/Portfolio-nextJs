import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // 🛠️ Debug: Verifique se as variáveis de ambiente estão definidas
    console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "OK" : "NOT SET");
    console.log("FROM_EMAIL:", process.env.FROM_EMAIL);

    const { email, subject, message } = await req.json();
    
    console.log("Received request:", { email, subject, message });

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
