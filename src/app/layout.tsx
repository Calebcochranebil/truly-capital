import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truly Investor Capital | Real Estate Investor Lending",
  description: "A fast & simple process with products made specifically for Real Estate Investors. DSCR Loans, Bridge Loans, Rehab & Construction Loans.",
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
      </body>
    </html>
  );
}
