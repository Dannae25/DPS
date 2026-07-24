import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";
import { ProveedorCarrito } from "@/context/cartContex";
import { ProveedorAuth } from "@/context/usuarioContex";
import Navbar from "@/componentes/navbar";
import Footer from "@/componentes/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LaptopFriend",
  description: "E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col" >
        <ProveedorAuth>
        <ProveedorCarrito>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Toaster position="top-center" richColors />
        </ProveedorCarrito>
        </ProveedorAuth>
        <Footer />

      </body>
    </html>
  );
}
