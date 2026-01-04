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
  // 1. IMPORTANTE: Define la URL base para que las rutas relativas de las imágenes funcionen
  metadataBase: new URL("https://mocaico.dev"), 

  title: {
      default: "Jhan Mocaico | Ingeniero Informático",
      template: "%s | Jhan Mocaico"
    },
  description: "Portafolio de Jhan Mocaico. Ingeniero Informático especializado en desarrollo web con Next.js, Python, IoT y Sistemas Embebidos.",
  
  keywords: ["Jhan Mocaico", "Mocaico", "Ingeniero Informático", "IoT", "Desarrollo Web", "Next.js", "Portafolio", "Perú", "Sistemas Embebidos"],
  authors: [{ name: "Jhan Mocaico" }],
  creator: "Jhan Mocaico",

  // 2. Configuración extendida para redes sociales (Open Graph)
  openGraph: {
    title: "Jhan Mocaico | Ingeniero Informático",
    description: "Transformando ideas en soluciones reales con Software y Hardware. Mira mis proyectos en IoT y Web.",
    url: "https://mocaico.dev",
    siteName: "Jhan Mocaico Portfolio",
    locale: "es_PE", // Configurado para Perú
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", // Asegúrate de que esta imagen esté en tu carpeta /public
        width: 1200,
        height: 630,
        alt: "Jhan Mocaico Portfolio - Web & IoT",
      },
    ],
  },
  
  // 3. Configuración para tarjetas de Twitter
  twitter: {
    card: "summary_large_image",
    title: "Jhan Mocaico | Ingeniero Informático",
    description: "Portafolio profesional. Proyectos en IoT, Next.js y Embebidos.",
    // creator: "@TuUsuarioDeTwitter", // Descomenta y pon tu usuario si tienes Twitter
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Cambié 'en' a 'es' para mejor SEO local
    <html lang="es"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}