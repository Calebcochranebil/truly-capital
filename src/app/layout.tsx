import type { Metadata } from "next";
import "./globals.css";
import { EmailPopup } from "@/components";

export const metadata: Metadata = {
  title: "Truly Investor Capital | Real Estate Investor Lending",
  description: "A fast & simple process with products made specifically for Real Estate Investors. DSCR Loans, Bridge Loans, Rehab & Construction Loans.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <EmailPopup />
      </body>
    </html>
  );
}
