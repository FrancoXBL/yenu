import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yenu",
  description: "Alimento balanceado completo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black`} >
        <div className="flex flex-col justify-between min-h-screen">
        {/* Header */}
        <Header />
        {/* Content */}
        <div className="my-2">
        {children}
        </div>
        {/* Footer */}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
