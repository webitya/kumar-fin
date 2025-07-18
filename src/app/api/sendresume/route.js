import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const formData = await request.formData()

    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const position = formData.get("position")
    const experience = formData.get("experience")
    const education = formData.get("education")
    const currentSalary = formData.get("currentSalary")
    const expectedSalary = formData.get("expectedSalary")
    const noticePeriod = formData.get("noticePeriod")
    // const coverLetter = formData.get("coverLetter") // Removed coverLetter
    const resumeFile = formData.get("resume") // This will be a File object

    // Basic server-side validation
    if (!name || !email || !phone || !position || !experience || !education || !resumeFile) {
      console.error("Validation Error: Missing required fields for resume submission.")
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields and upload your resume." },
        { status: 400 },
      )
    }

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Environment Variable Error: EMAIL_USER or EMAIL_PASS is not set.")
      return NextResponse.json(
        { success: false, message: "Server email configuration is missing. Please contact support." },
        { status: 500 },
      )
    }

    // Prepare resume attachment
    let attachment = null
    if (resumeFile && resumeFile.size > 0) {
      // Ensure it's a PDF
      if (resumeFile.type !== "application/pdf") {
        console.error("File Type Error: Only PDF files are allowed for resume upload.")
        return NextResponse.json(
          { success: false, message: "Only PDF files are allowed for resume upload." },
          { status: 400 },
        )
      }

      const buffer = Buffer.from(await resumeFile.arrayBuffer())
      attachment = {
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type,
      }
    } else {
      console.error("Resume File Error: No resume file uploaded or file is empty.")
      return NextResponse.json({ success: false, message: "Resume file is required." }, { status: 400 })
    }

    // Determine recipients for the lead email
    const leadRecipients = [process.env.EMAIL_USER]
    if (process.env.LEAD_MANAGER_EMAIL) {
      leadRecipients.push(process.env.LEAD_MANAGER_EMAIL)
    } else {
      console.warn("LEAD_MANAGER_EMAIL environment variable is not set. Lead email will only be sent to EMAIL_USER.")
    }
    const toRecipients = leadRecipients.join(", ") // Join multiple recipients with a comma

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Adjust for your email provider
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    try {
      await transporter.verify()
      console.log("Nodemailer transporter is ready to send messages.")

      // Admin Lead Email Template
      const adminEmailHtml = `
        <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
          <div style="background-color: #27545b; color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 5px solid #1e3f44;">
            <h1 style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 1px;">New Job Application</h1>
            <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">For the position of ${position}</p>
          </div>
          <div style="padding: 30px 25px; background-color: #ffffff;">
            <p style="font-size: 17px; margin-bottom: 25px; color: #444;">A new candidate has applied for a position:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 15px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 150px; color: #555;">Full Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${name}</td>
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
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Position Applied:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${position}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Experience:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${experience}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Education:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${education}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Current Salary:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${currentSalary || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Expected Salary:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${expectedSalary || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; vertical-align: top; color: #555;">Notice Period:</td>
                <td style="padding: 12px 0; color: #333;">${noticePeriod || "N/A"}</td>
              </tr>
            </table>
            <p style="margin-top: 35px; font-size: 17px; font-weight: bold; color: #27545b;">Resume is attached to this email.</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0;">
            <p style="margin: 0 0 8px;">&copy; ${new Date().getFullYear()} KUMAR Fin. Consultant. All rights reserved.</p>
            <p style="margin: 0; font-size: 11px; color: #888;">
              Powered by <a href="https://webitya.com" style="color: #df865b; text-decoration: none; font-weight: bold;">WEBITYA</a>.
              All communications are secured with end-to-end encryption provided by WEBITYA.
            </p>
          </div>
        </div>
      `

      // Applicant Confirmation Email Template
      const applicantEmailHtml = `
        <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
          <div style="background-color: #df865b; color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 5px solid #c67549;">
            <h1 style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 1px;">Application Received!</h1>
            <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">KUMAR Fin. Consultant</p>
          </div>
          <div style="padding: 30px 25px; background-color: #ffffff;">
            <p style="font-size: 17px; margin-bottom: 20px;">Dear ${name},</p>
            <p style="font-size: 17px;">Thank you for your interest in joining the KUMAR Fin. Consultant team. We have successfully received your application for the position of <strong>${position}</strong>.</p>
            <div style="background-color: #f9f9f9; border-left: 5px solid #27545b; padding: 20px; margin: 30px 0; border-radius: 5px;">
              <p style="font-size: 16px; margin: 0 0 12px; font-weight: bold; color: #27545b;">Summary of Your Application:</p>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
                  <span style="position: absolute; left: 0; color: #df865b; font-size: 20px; line-height: 1;">&#10003;</span> <strong style="color: #555;">Position Applied For:</strong> ${position}
                </li>
                <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
                  <span style="position: absolute; left: 0; color: #df865b; font-size: 20px; line-height: 1;">&#10003;</span> <strong style="color: #555;">Years of Experience:</strong> ${experience}
                </li>
                <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
                  <span style="position: absolute; left: 0; color: #df865b; font-size: 20px; line-height: 1;">&#10003;</span> <strong style="color: #555;">Education:</strong> ${education}
                </li>
              </ul>
            </div>
            <p style="font-size: 17px;">Our recruitment team will carefully review your qualifications and experience. We will be in touch with you shortly regarding the next steps in our hiring process.</p>
            <p style="font-size: 17px; margin-top: 35px;">Sincerely,</p>
            <p style="font-size: 17px; font-weight: bold; color: #27545b;">The KUMAR Fin. Consultant Recruitment Team</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0;">
            <p style="margin: 0 0 8px;">&copy; ${new Date().getFullYear()} KUMAR Fin. Consultant. All rights reserved.</p>
            <p style="margin: 0; font-size: 11px; color: #888;">
              Powered by <a href="https://webitya.com" style="color: #df865b; text-decoration: none; font-weight: bold;">WEBITYA</a>.
              All communications are secured with end-to-end encryption provided by WEBITYA.
            </p>
          </div>
        </div>
      `

      // 1. Send email to the EMAIL_USER (admin/lead email) and LEAD_MANAGER_EMAIL
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: toRecipients,
        subject: `New Job Application: ${name} - ${position}`,
        html: adminEmailHtml,
        attachments: attachment ? [attachment] : [],
      })
      console.log("Job application email sent successfully to:", toRecipients)

      // 2. Send confirmation email to the applicant
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your Application to KUMAR Fin. Consultant Has Been Received",
        html: applicantEmailHtml,
      })
      console.log("Confirmation email sent successfully to applicant:", email)

      return NextResponse.json(
        { success: true, message: "Your application has been submitted successfully!" },
        { status: 200 },
      )
    } catch (emailError) {
      console.error("Nodemailer Email Sending Error:", emailError.message, emailError.stack)
      return NextResponse.json(
        { success: false, message: `Failed to send application: ${emailError.message}. Please check server logs.` },
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
