import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();

    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const services = data.getAll('service').map(s => s.toString());
    const message = data.get('message')?.toString().trim();

    if (!name || !email || !message) {
      return json({ error: 'Please fill in all required fields.' }, 400);
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Contact form: RESEND_API_KEY is not set');
      return json({ error: 'Server configuration error. Please email directly.' }, 500);
    }

    const resend = new Resend(apiKey);
    const serviceList = services.length > 0 ? services.join(', ') : 'None selected';

    const { data: sent, error } = await resend.emails.send({
      from: 'Dan Tremblay Music <noreply@dantremblaymusic.com>',
      to: 'dantremblaymusic@gmail.com',
      replyTo: `${name} <${email}>`,
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Services:</strong> ${serviceList}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return json({ error: `Failed to send: ${(error as any).message ?? JSON.stringify(error)}` }, 500);
    }

    console.log('Email sent, id:', sent?.id);
    return json({ success: true });
  } catch (err) {
    console.error('Contact form unexpected error:', err);
    return json({ error: 'An unexpected error occurred. Please try again.' }, 500);
  }
};
