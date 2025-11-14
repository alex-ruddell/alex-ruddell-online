"use client";

import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-800">
          <Link href="/">MySite</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-gray-700 hover:text-blue-600 transition">Link 1</Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600 transition">Link 2</Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600 transition">Link 3</Link>

          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Link 1
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Link 2
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Link 3
            </Link>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                className="text-gray-700 hover:text-blue-600"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-700 hover:text-blue-600"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
