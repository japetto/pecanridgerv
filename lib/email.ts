"use server";

interface EmailData {
  to: string;
  name: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, name, subject, html }: EmailData) {
  // For now, we'll just log the email data
  // In production, you would integrate with an email service like:
  // - SendGrid
  // - Resend
  // - AWS SES
  // - Nodemailer with SMTP

  console.log("Email would be sent:", {
    to,
    name,
    subject,
    html: html.substring(0, 100) + "...", // Truncate for logging
  });

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // For development, we'll always return success
  // In production, handle actual email sending and errors
  return { success: true };
}
