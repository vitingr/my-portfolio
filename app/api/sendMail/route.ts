import { transporter, mailOptions } from "@/utils/nodemailer";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { data } = await request.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: `${data.email} | ${data.name} | ${data.message}`,
      html: `<h1>TESTANDO ENVIO DE EMAILS</h1> <br/> <p>${data.message}</p>`,
    });

    return new Response("Email enviado com sucesso", { status: 200 });
  } catch (error) {
    return new Response(`Falha ao enviar o email: ${error}`, { status: 500 });
  }
};
