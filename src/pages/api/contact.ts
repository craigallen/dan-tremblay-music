import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get('name')?.toString().trim();
  const email = data.get('email')?.toString().trim();
  const services = data.getAll('service').map(s => s.toString());
  const message = data.get('message')?.toString().trim();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Please fill in all required fields.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set');
    return new Response(JSON.stringify({ error: 'Server configuration error: missing API key.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(apiKey);
  const serviceList = services.length > 0 ? services.join(', ') : 'None selected';

  const { data: sent, error } = await resend.emails.send({
    from: import.meta.env.RESEND_FROM_EMAIL ?? 'contact@dantremblaymusic.com',
    to: 'contact@dantremblaymusic.com',
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
    return new Response(JSON.stringify({ error: `Failed to send message: ${error.message}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  console.log('Email sent, id:', sent?.id);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
