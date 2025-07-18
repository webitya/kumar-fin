import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { fullName, email, phone, service, message } = await request.json()

    // Basic server-side validation
    if (!fullName || !email || !message) {
      console.error("Validation Error: Missing required fields.", { fullName, email, message })
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields (Full Name, Email, Message)." },
        { status: 400 },
      )
    }

    // Validate environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Environment Variable Error: EMAIL_USER or EMAIL_PASS is not set.")
      return NextResponse.json(
        { success: false, message: "Server email configuration is missing. Please contact support." },
        { status: 500 },
      )
    }

    // Determine recipients for the lead email
    const leadRecipients = [process.env.EMAIL_USER]
    if (process.env.LEAD_MANAGER_EMAIL) {
      leadRecipients.push(process.env.LEAD_MANAGER_EMAIL)
    } else {
      console.warn("LEAD_MANAGER_EMAIL environment variable is not set. Lead email will only be sent to EMAIL_USER.")
    }
    const toRecipients = leadRecipients.join(", ") // Join multiple recipients with a comma

    // Create a Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // IMPORTANT: Verify this for your email provider
      port: 465, // IMPORTANT: Verify this for your email provider (often 587 for TLS/STARTTLS)
      secure: true, // Use SSL/TLS. Set to false if using port 587 with STARTTLS.
      auth: {
        user: process.env.EMAIL_USER, // Your sending email address
        pass: process.env.EMAIL_PASS, // Your email password or App Password (REQUIRED for Gmail)
      },
    })

    try {
      // Verify transporter connection (optional, but good for debugging)
      await transporter.verify()
      console.log("Nodemailer transporter is ready to send messages.")

      // Admin Lead Email Template
      const adminEmailHtml = `
        <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
          <div style="background-color: #27545b; color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 5px solid #1e3f44;">
            <h1 style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 1px;">New Contact Inquiry</h1>
            <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">From your KUMAR Fin. Consultant website</p>
          </div>
          <div style="padding: 30px 25px; background-color: #ffffff;">
            <p style="font-size: 17px; margin-bottom: 25px; color: #444;">You have received a new message from a potential client:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 15px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 120px; color: #555;">Full Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #df865b; text-decoration: none; font-weight: bold;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${phone || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Service:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${service || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; vertical-align: top; color: #555;">Message:</td>
                <td style="padding: 12px 0; color: #333;">${message}</td>
              </tr>
            </table>
            <p style="margin-top: 35px; font-size: 17px; font-weight: bold; color: #27545b;">Please respond to this inquiry promptly to assist the client.</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0;">
            <p style="margin: 0 0 8px;">&copy; ${new Date().getFullYear()} KUMAR Fin. Consultant. All rights reserved.</p>
            <p style="margin: 0; font-size: 11px; color: #888;">
              Powered by <a href="https://webitya.com" style="color: #df865b; text-decoration: none; font-weight: bold;">WEBITYA</a>,.
              All communications are secured with end-to-end encryption provided by WEBITYA.
            </p>
          </div>
        </div>
      `

      // User Confirmation Email Template
      const userEmailHtml = `
        <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
          <div style="background-color: #df865b; color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 5px solid #c67549;">
            <h1 style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 1px;">Thank You for Contacting Us!</h1>
            <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">KUMAR Fin. Consultant</p>
          </div>
          <div style="padding: 30px 25px; background-color: #ffffff;">
            <p style="font-size: 17px; margin-bottom: 20px;">Dear ${fullName},</p>
            <p style="font-size: 17px;">We appreciate you reaching out to KUMAR Fin. Consultant. Your message has been successfully received, and our team will get back to you very soon.</p>
            <div style="background-color: #f9f9f9; border-left: 5px solid #27545b; padding: 20px; margin: 30px 0; border-radius: 5px;">
              <p style="font-size: 16px; margin: 0 0 12px; font-weight: bold; color: #27545b;">Summary of Your Inquiry:</p>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
                  <span style="position: absolute; left: 0; color: #df865b; font-size: 20px; line-height: 1;">&#10003;</span> <strong style="color: #555;">Service Requested:</strong> ${service || "N/A"}
                </li>
                <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
                  <span style="position: absolute; left: 0; color: #df865b; font-size: 20px; line-height: 1;">&#10003;</span> <strong style="color: #555;">Your Message:</strong> ${message}
                </li>
              </ul>
            </div>
            <p style="font-size: 17px;">We value your patience and look forward to providing you with expert assistance.</p>
            <p style="font-size: 17px; margin-top: 35px;">Sincerely,</p>
            <p style="font-size: 17px; font-weight: bold; color: #27545b;">The KUMAR Fin. Consultant Team</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0;">
            <p style="margin: 0 0 8px;">&copy; ${new Date().getFullYear()} KUMAR Fin. Consultant. All rights reserved.</p>
            <p style="margin: 0; font-size: 11px; color: #888;">
              Powered by <a href="https://webitya.com" style="color: #df865b; text-decoration: none; font-weight: bold;">WEBITYA</a>,.
              All communications are secured with end-to-end encryption provided by WEBITYA.
            </p>
          </div>
        </div>
      `

      // 1. Send email to the EMAIL_USER (admin/lead email) and LEAD_MANAGER_EMAIL
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: toRecipients, // Now includes both EMAIL_USER and LEAD_MANAGER_EMAIL
        subject: `New Contact Form Submission from ${fullName}`,
        html: adminEmailHtml,
      })
      console.log("Lead email sent successfully to:", toRecipients)

      // 2. Send confirmation email to the user who filled the form
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank you for contacting us!",
        html: userEmailHtml,
      })
      console.log("Confirmation email sent successfully to user:", email)

      return NextResponse.json({ success: true, message: "Your message has been sent successfully!" }, { status: 200 })
    } catch (emailError) {
      console.error("Nodemailer Email Sending Error:", emailError.message, emailError.stack)
      return NextResponse.json(
        { success: false, message: `Failed to send emails: ${emailError.message}. Please check server logs.` },
        { status: 500 },
      )
    }
  } catch (generalError) {
    console.error("General API Route Error:", generalError.message, generalError.stack)
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred. Please try again later." },
      { status: 500 },
    )
  }
}
