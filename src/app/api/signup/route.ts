import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MARKETING_EMAIL = "marketing@trulyinvestcapital.com";
const FROM_EMAIL = "Truly Investor Capital <noreply@trulyinvestcapital.com>";

export async function POST(request: NextRequest) {
  // Get base URL from request origin for fetching assets
  const origin = request.headers.get("origin") || request.headers.get("host");
  const protocol = origin?.includes("localhost") ? "http" : "https";
  const baseUrl = origin?.includes("://") ? origin : `${protocol}://${origin}`;
  try {
    const { firstName, lastName, email, clientType } = await request.json();

    if (!firstName || !lastName || !email || !clientType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const clientTypeLabel = clientType === "direct" ? "Direct Client" : "Broker Client";

    // Fetch logo for inline embedding
    const logoResponse = await fetch(`${baseUrl}/trulylogo.png`);
    if (!logoResponse.ok) {
      console.error(`Failed to fetch logo: ${logoResponse.status}`);
    }
    const logoBuffer = Buffer.from(await logoResponse.arrayBuffer());

    // PDF files to fetch
    const pdfFiles = [
      { filename: "DSCR Rental Loans.pdf", url: `${baseUrl}/pdfs/DSCR%20Rental%20Loans.pdf` },
      { filename: "Standard Rehab.pdf", url: `${baseUrl}/pdfs/Standard%20Rehab.pdf` },
      { filename: "Bridge Loans.pdf", url: `${baseUrl}/pdfs/Bridge%20Loans.pdf` },
      { filename: "New Construction.pdf", url: `${baseUrl}/pdfs/New%20Construction.pdf` },
    ];

    // Fetch all PDFs
    const pdfAttachments = await Promise.all(
      pdfFiles.map(async (pdf) => {
        const response = await fetch(pdf.url);
        if (!response.ok) {
          console.error(`Failed to fetch ${pdf.filename}: ${response.status} from ${pdf.url}`);
          throw new Error(`Failed to fetch ${pdf.filename}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        return {
          filename: pdf.filename,
          content: Buffer.from(arrayBuffer),
        };
      })
    );

    const attachments = [
      ...pdfAttachments,
      {
        filename: "logo.png",
        content: logoBuffer,
        cid: "trulylogo",
      },
    ];

    // Send email to user with PDFs attached
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Your Free Marketing Materials from Truly Investor Capital",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f7f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <tr>
              <td style="height: 6px; background: linear-gradient(to right, #c9a227, #d4b44a, #c9a227);"></td>
            </tr>
            <tr>
              <td style="padding: 40px 30px; text-align: center;">
                <img src="cid:trulylogo" alt="Truly Investor Capital" style="height: 50px; width: auto; margin-bottom: 30px;">

                <h1 style="color: #1a3a2f; font-size: 24px; margin: 0 0 20px 0;">
                  Hi ${firstName}, here are your marketing materials!
                </h1>

                <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                  Thank you for your interest in Truly Investor Capital. We've attached our white-label marketing materials for all our loan products.
                </p>

                <div style="background-color: #f8f7f4; border-radius: 8px; padding: 20px; margin-bottom: 25px; text-align: left;">
                  <p style="color: #1a3a2f; font-size: 14px; font-weight: bold; margin: 0 0 12px 0;">Attached Materials:</p>
                  <ul style="color: #64748b; font-size: 14px; margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li>DSCR Rental Loans</li>
                    <li>Standard Rehab</li>
                    <li>Bridge Loans</li>
                    <li>New Construction</li>
                  </ul>
                </div>

                <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 0 0 25px 0;">
                  Feel free to use these materials in your marketing. If you have any questions or need assistance, our team is here to help.
                </p>

                <a href="https://trulyinvestcapital.com" style="display: inline-block; background-color: #1a3a2f; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 8px; font-weight: bold; font-size: 14px;">
                  Visit Our Website
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 25px 30px; background-color: #f8f7f4; text-align: center;">
                <p style="color: #64748b; font-size: 12px; margin: 0;">
                  Truly Investor Capital<br>
                  <a href="https://trulyinvestcapital.com" style="color: #c9a227; text-decoration: none;">trulyinvestcapital.com</a>
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      attachments,
    });

    // Send notification email to marketing team
    await resend.emails.send({
      from: FROM_EMAIL,
      to: MARKETING_EMAIL,
      subject: `New Marketing Materials Request: ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f7f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <tr>
              <td style="height: 6px; background: linear-gradient(to right, #c9a227, #d4b44a, #c9a227);"></td>
            </tr>
            <tr>
              <td style="padding: 40px 30px;">
                <h1 style="color: #1a3a2f; font-size: 24px; margin: 0 0 25px 0;">
                  New Marketing Materials Request
                </h1>

                <div style="background-color: #f8f7f4; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                  <table width="100%" style="font-size: 14px;">
                    <tr>
                      <td style="color: #64748b; padding: 8px 0; width: 120px;">Name:</td>
                      <td style="color: #1a3a2f; font-weight: bold; padding: 8px 0;">${firstName} ${lastName}</td>
                    </tr>
                    <tr>
                      <td style="color: #64748b; padding: 8px 0;">Email:</td>
                      <td style="color: #1a3a2f; font-weight: bold; padding: 8px 0;">
                        <a href="mailto:${email}" style="color: #c9a227; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="color: #64748b; padding: 8px 0;">Client Type:</td>
                      <td style="color: #1a3a2f; font-weight: bold; padding: 8px 0;">${clientTypeLabel}</td>
                    </tr>
                    <tr>
                      <td style="color: #64748b; padding: 8px 0;">Submitted:</td>
                      <td style="color: #1a3a2f; padding: 8px 0;">${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET</td>
                    </tr>
                  </table>
                </div>

                <p style="color: #64748b; font-size: 14px; margin: 0;">
                  The user has been sent all marketing materials via email.
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending emails:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send emails";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
