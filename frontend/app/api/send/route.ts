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
      to: ['chirvais1992@gmail.com'],
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

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}
