"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PropertyProvider } from "./context/PropertyContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <PropertyProvider>
          <Navbar />
          <main className="min-h-screen p-6">{children}</main>
          <Footer />
        </PropertyProvider>
      </body>
    </html>
  );
}