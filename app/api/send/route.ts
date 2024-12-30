import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'X-plane <elijah@xplanelabs.nz>',
      to: ['elijah@xplanelabs.nz'],
      subject: 'X-plane Form submission',
      html: `
        Name: ${name} <br>
        Email: ${email} <br>
        Message: ${message} <br>
      `,
    });

    if (error) {
      console.error({ error });
      throw error;
    }
    // const transporter = nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: parseInt(process.env.EMAIL_PORT || "", 10),
    //   secure: false,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // await transporter.sendMail({
    //   from: `"X-Plain" <${process.env.EMAIL_USER}>`,
    //   to: [process.env.EMAIL_USER || ""],
    //   subject: "Form submission",
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Message: ${message}
    //   `,
    // });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}
