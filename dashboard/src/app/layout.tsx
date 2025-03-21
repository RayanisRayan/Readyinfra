import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const Courier= Courier_Prime({
  variable: "--font-courier-mono",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Courier.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
