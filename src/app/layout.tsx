import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dekamond Auth App",
  description: "Dekamond front-end developer test assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
