import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'kooraiptv.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER || 'contact@kooraiptv.com';
const SMTP_PASS = process.env.SMTP_PASS;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Méthode non autorisée.' });
  }

  if (!SMTP_PASS) {
    return res.status(500).json({
      message: "La configuration e-mail est incomplète sur le serveur.",
    });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: 'Merci de remplir tous les champs du formulaire.',
    });
  }

  const normalizedEmail = String(email).trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(normalizedEmail)) {
    return res.status(400).json({
      message: 'Merci de saisir une adresse e-mail valide.',
    });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Koora IPTV Website" <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: normalizedEmail,
      subject: `[Contact Site] ${String(subject).trim()}`,
      text: [
        `Nom: ${String(name).trim()}`,
        `Email: ${normalizedEmail}`,
        `Sujet: ${String(subject).trim()}`,
        '',
        'Message:',
        String(message).trim(),
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>Nouveau message depuis la page Contact</h2>
          <p><strong>Nom :</strong> ${escapeHtml(String(name).trim())}</p>
          <p><strong>Email :</strong> ${escapeHtml(normalizedEmail)}</p>
          <p><strong>Sujet :</strong> ${escapeHtml(String(subject).trim())}</p>
          <p><strong>Message :</strong></p>
          <p>${escapeHtml(String(message).trim()).replace(/\n/g, '<br />')}</p>
        </div>
      `,
    });

    return res.status(200).json({
      message: 'Message envoyé avec succès.',
    });
  } catch (error) {
    console.error('Contact form email error:', error);
    return res.status(500).json({
      message: "Impossible d'envoyer le message pour le moment.",
    });
  }
}
