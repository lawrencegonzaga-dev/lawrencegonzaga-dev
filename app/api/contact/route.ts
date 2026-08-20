import {resend} from "@/lib/resend";

export async function POST(request:Request){
  try {
    const body = await request.json();
    const {name, email, message} = body;

    if(!name || !email || !message){
      return Response.json(
        {success: false, message: "Missing required fields"},
        {status: 400}
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "lbgonzaga@addu.edu.ph",
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return Response.json({success: true});
  } catch(error) {
    return Response.json(
      {success: false, message: "Failed to send message"},
      {status: 500}
    );
  }
}