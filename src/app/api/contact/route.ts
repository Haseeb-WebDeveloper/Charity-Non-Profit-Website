import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create transporter with updated settings
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Updated host
  port: 587,
  secure: false, // Changed to false for port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, business, website, message } = data;
    console.log(data);

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_ADMIN,
      to: process.env.SMTP_ADMIN,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
      `,
    });

    console.log("Email sent to admin at ", process.env.SMTP_ADMIN);

    // Send thank you email to client
    await transporter.sendMail({
      from: process.env.SMTP_ADMIN,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>We've received your request and will get back to you shortly.</p>
        <p>Here's what we received:</p>
        <ul>
          <li>Business Name: ${business}</li>
          <li>Phone: ${phone}</li>
          ${website ? `<li>Website: ${website}</li>` : ''}
          ${message ? `<li>Message: ${message}</li>` : ''}
        </ul>
        <p>Best regards,<br>Rate Our Job Team</p>
      `,
    });

    // Return success response without redirect URL
    return NextResponse.json(
      { 
        message: "Emails sent successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
} 