import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
      default: "Jhan Mocaico ",
      template: "%s | Jhan Mocaico"
    },
  description: "Portafolio de Jhan Mocaico. Ingenierio Informatico en desarrollo web con Next.js, Python y IoT",
  keywords: ["Jhan Mocaico", "Mocaico", "Ingeniero Informático", "IoT", "Desarrollo Web", "Next.js", "Portafolio", "Perú", "Sistemas Embebidos"],
  authors: [{ name: "Jhan Mocaico" }],
  creator: "Jhan Mocaico",

  openGraph: {
    images : ["/opengraph-image.png"],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
