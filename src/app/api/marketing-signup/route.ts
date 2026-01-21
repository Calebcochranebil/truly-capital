import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, clientType } = await request.json();

    if (!firstName || !lastName || !email || !clientType) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const clientTypeLabel = clientType === "direct" ? "Direct Client" : "Broker Client";

    // Send welcome email to the user
    await resend.emails.send({
      from: "Truly Investor Capital <onboarding@resend.dev>",
      to: email,
      subject: "Your Free Marketing Materials from Truly Investor Capital",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f0e8;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header -->
            <div style="background-color: #1a3a2f; padding: 30px; text-align: center;">
              <h1 style="color: #c9a962; margin: 0; font-size: 24px;">Truly Investor Capital</h1>
            </div>

            <!-- Gold accent line -->
            <div style="height: 4px; background: linear-gradient(to right, #c9a962, #d4b978, #c9a962);"></div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #1a3a2f; margin: 0 0 20px 0; font-size: 22px;">Hi ${firstName},</h2>

              <p style="color: #5a6a72; line-height: 1.6; margin: 0 0 20px 0;">
                Thank you for signing up! We're excited to have you join our community of successful real estate investors and brokers.
              </p>

              <p style="color: #5a6a72; line-height: 1.6; margin: 0 0 20px 0;">
                Your free marketing materials are being prepared and will be sent to you shortly. In the meantime, feel free to explore our loan products:
              </p>

              <!-- Products List -->
              <div style="background-color: #f5f0e8; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <ul style="color: #1a3a2f; margin: 0; padding-left: 20px; line-height: 1.8;">
                  <li><strong>DSCR Loans</strong> - For rental property investors</li>
                  <li><strong>Fix & Flip Loans</strong> - Short-term rehab financing</li>
                  <li><strong>Bridge Loans</strong> - Quick capital for transitions</li>
                  <li><strong>Construction Loans</strong> - Ground-up development</li>
                </ul>
              </div>

              <p style="color: #5a6a72; line-height: 1.6; margin: 0 0 25px 0;">
                Have questions? Our team is here to help. Give us a call at <strong style="color: #1a3a2f;">866-219-2294</strong> or reply to this email.
              </p>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://trulyinvestorcap.com" style="display: inline-block; background-color: #c9a962; color: #1a3a2f; padding: 14px 32px; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 1px; text-transform: uppercase;">
                  Visit Our Website
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #1a3a2f; padding: 25px 30px; text-align: center;">
              <p style="color: #ffffff; margin: 0 0 10px 0; font-size: 14px;">
                Truly Investor Capital
              </p>
              <p style="color: #ffffff80; margin: 0; font-size: 12px;">
                3133 W Frye Road, Suite 205, Chandler, AZ 85226
              </p>
              <p style="color: #ffffff80; margin: 10px 0 0 0; font-size: 12px;">
                866-219-2294 | info@trulyinvestorcap.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      // TODO: Add PDF attachments here later
      // attachments: [
      //   { filename: "DSCR-Flyer.pdf", path: "https://yourdomain.com/pdfs/dscr-flyer.pdf" },
      // ],
    });

    // Send notification email to marketing team
    await resend.emails.send({
      from: "Truly Website <onboarding@resend.dev>",
      to: "marketing@trulyinvestorcap.com",
      subject: `New Marketing Signup: ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="margin: 0; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f0e8;">
          <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background-color: #1a3a2f; padding: 20px; text-align: center;">
              <h2 style="color: #c9a962; margin: 0;">New Marketing Signup</h2>
            </div>

            <!-- Content -->
            <div style="padding: 25px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d0; color: #5a6a72; width: 120px;">Name:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d0; color: #1a3a2f; font-weight: 600;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d0; color: #5a6a72;">Email:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d0; color: #1a3a2f; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #1a3a2f;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d0; color: #5a6a72;">Client Type:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d0; color: #1a3a2f; font-weight: 600;">${clientTypeLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #5a6a72;">Submitted:</td>
                  <td style="padding: 12px 0; color: #1a3a2f; font-weight: 600;">${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })}</td>
                </tr>
              </table>

              <div style="margin-top: 25px; padding: 15px; background-color: #f5f0e8; border-radius: 6px; text-align: center;">
                <p style="margin: 0; color: #5a6a72; font-size: 14px;">
                  Add this contact to your marketing list
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Marketing signup error:", error);
    return NextResponse.json(
      { error: "Failed to process signup" },
      { status: 500 }
    );
  }
}
