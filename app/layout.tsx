// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alessandra Vecchi — Impacto, Inovação & Cultura",
  description:
    "Currículo, portfólio e soluções co-criadas com a Cuidatoria para acelerar captação, transparência e execução no 3º setor e cultura.",
  metadataBase: new URL("https://seu-dominio.com"), // troque quando publicar
  openGraph: {
    title: "Alessandra Vecchi — Impacto, Inovação & Cultura",
    description:
      "Currículo, portfólio e soluções co-criadas com a Cuidatoria para acelerar captação, transparência e execução no 3º setor e cultura.",
    url: "https://seu-dominio.com",
    siteName: "Alessandra Vecchi",
    images: [{ url: "/og/og-image.jpg", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessandra Vecchi — Impacto, Inovação & Cultura",
    description:
      "Currículo, portfólio e soluções co-criadas com a Cuidatoria para acelerar captação, transparência e execução no 3º setor e cultura.",
    images: ["/og/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
