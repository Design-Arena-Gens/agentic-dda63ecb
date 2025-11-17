import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AeroFlight Industries - Premier Aircraft Manufacturing",
  description: "Leading the future of aviation with innovative aircraft design and manufacturing solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
