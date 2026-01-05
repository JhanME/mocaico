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
  authors: [{ name: "Jhan Mocaico", url: "https://mocaico.dev" }],
  creator: "Jhan Mocaico",
  publisher: "Jhan Mocaico",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // 2. Configuración extendida para redes sociales (Open Graph)
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://mocaico.dev",
    siteName: "Jhan Mocaico Portfolio",
    title: "Jhan Mocaico | Ingeniero Informático",
    description: "Transformando ideas en soluciones reales con Software y Hardware. Especializado en IoT, Sistemas Embebidos y Desarrollo Web moderno.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jhan Mocaico - Ingeniero Informático especializado en IoT y Desarrollo Web",
        type: "image/png",
      },
    ],
  },
  
  // 3. Configuración para tarjetas de Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Jhan Mocaico | Ingeniero Informático",
    description: "Transformando ideas en soluciones reales con Software y Hardware. Proyectos en IoT, Next.js y Sistemas Embebidos.",
    // creator: "@tuUsuarioDeTwitter", // Descomenta y agrega tu usuario de Twitter/X
    // site: "@tuUsuarioDeTwitter", // Descomenta si tienes un sitio de Twitter/X
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jhan Mocaico - Ingeniero Informático",
      },
    ],
  },
  
  // 4. Metadata adicional para mejor SEO
  alternates: {
    canonical: "https://mocaico.dev",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Cambié 'en' a 'es' para mejor SEO local
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('darkMode');
                  if (stored === null) {
                    localStorage.setItem('darkMode', 'true');
                    document.documentElement.classList.add('dark');
                  } else {
                    const isDark = stored === 'true';
                    if (isDark) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}