import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();

    // Honeypot: bots fill this, humans don't
    const honeypot = data.get('website')?.toString() ?? '';
    if (honeypot) {
      return json({ success: true });
    }

    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const services = data.getAll('service').map(s => s.toString());
    const message = data.get('message')?.toString().trim();

    if (!name || !email || !message) {
      return json({ error: 'Please fill in all required fields.' }, 400);
    }

    if (!EMAIL_RE.test(email)) {
      return json({ error: 'Please enter a valid email address.' }, 400);
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Contact form: RESEND_API_KEY is not set');
      return json({ error: 'Server configuration error. Please email directly.' }, 500);
    }

    const resend = new Resend(apiKey);
    const serviceList = services.length > 0 ? services.join(', ') : 'None selected';

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeServices = escapeHtml(serviceList);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const { data: sent, error } = await resend.emails.send({
      from: 'Dan Tremblay Music <noreply@dantremblaymusic.com>',
      to: 'dantremblaymusic@gmail.com',
      replyTo: `${safeName} <${safeEmail}>`,
      subject: `New contact form submission from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Services:</strong> ${safeServices}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
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
