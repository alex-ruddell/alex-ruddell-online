import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Alex Ruddell",
  description: "Alex Ruddell - Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <footer className="border-t border-gray-200 py-6 bg-white mt-10">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
            © {new Date().getFullYear()} Alex Ruddell — All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
