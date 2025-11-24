"use client";

import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-800">
          <Link href="#hero">Alex Ruddell</Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <Link 
            href="#about-section" 
            className="text-gray-700"
          >
            About
          </Link>
          <Link 
            href="#contact-section" 
            className="text-gray-700"
          >
            Contact
          </Link>
          <Link 
            href="./alexruddell.pdf" 
            download="alexruddell.pdf" 
            className="text-gray-700"
          >
            Résumé
          </Link>

          <a
            href="https://github.com/alex-ruddell"
            target="_blank"
            className="text-gray-700 transition"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/alexrsruddell/"
            target="_blank"
            className="text-gray-700 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <button
          className="lg:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-inner">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href="#about-section"
              className="text-gray-700"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact-section"
              className="text-gray-700"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="./alexruddell.pdf" 
              download="alexruddell.pdf"
              className="text-gray-700"
              onClick={() => setOpen(false)}
            >
              Résumé
            </Link>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/alex-ruddell"
                target="_blank"
                className="text-gray-700 hover:text-blue-600"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alexrsruddell/"
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
