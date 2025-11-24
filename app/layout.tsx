import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import ComingSoonModal from "@/components/ComingSoonModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habla Fresh | Domina tus habilidades sociales con IA",
  description: "Practica conversaciones reales, recibe feedback instantáneo y gana confianza sin miedo al rechazo. Tu entrenador de habilidades sociales con Inteligencia Artificial.",
  keywords: ["habilidades sociales", "IA", "entrenamiento", "conversación", "confianza", "ansiedad social", "feedback", "práctica"],
  openGraph: {
    title: "Habla Fresh | Domina tus habilidades sociales con IA",
    description: "Practica conversaciones reales, recibe feedback instantáneo y gana confianza sin miedo al rechazo.",
    url: "https://hablafresh.vercel.app/",
    siteName: "Habla Fresh",
    images: [
      {
        url: "/mascota-habla-fresh.png",
        width: 800,
        height: 600,
        alt: "Mascota Habla Fresh",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habla Fresh | Domina tus habilidades sociales con IA",
    description: "Practica conversaciones reales, recibe feedback instantáneo y gana confianza sin miedo al rechazo.",
    images: ["/mascota-habla-fresh.png"],
  },
  metadataBase: new URL("https://hablafresh.vercel.app/"),
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
        <ModalProvider>
          {children}
          <ComingSoonModal />
        </ModalProvider>
      </body>
    </html>
  );
}
