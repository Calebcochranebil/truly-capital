import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Submit to Cognito Forms
    const cognitoResponse = await fetch(
      "https://www.cognitoforms.com/f/OFC1/TrulyMarketingForm",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          Email: email,
        }),
      }
    );

    if (!cognitoResponse.ok) {
      console.error("Cognito Forms error:", cognitoResponse.status);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
