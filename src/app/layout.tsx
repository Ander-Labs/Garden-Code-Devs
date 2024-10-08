import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/global/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import QueryProviders from "./query-provider";

import dynamic from "next/dynamic";
import GoogleAdsense from "@/scripts/GoogleAdsense";


const Navbar = dynamic(() => import("@/components/global/Navbar"));
const Footer = dynamic(() => import("@/components/global/footer"));
const NavMobile = dynamic(() => import("@/components/global/NavMobile"));

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Garden Code",
    default: "Garden Code",
  },
  description:
    "plataforma de código abierto dedicada a proporcionar recursos valiosos para desarrolladores de todos los niveles. Nuestro objetivo es construir una comunidad donde los desarrolladores puedan acceder fácilmente a contenido educativo, herramientas útiles, y conectarse con influenciadores destacados en el mundo de la programación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <QueryProviders>{children}</QueryProviders>
          <Toaster />
          <Footer />
          <NavMobile />
        </ThemeProvider>
        <GoogleAdsense pId="2964007773702778" />
      </body>
    </html>
  );
}
