"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Начало" },
    { href: "/about", label: "За нас" },
    { href: "/services", label: "Услуги" },
    { href: "/repair", label: "Ремонт и поддръжка" },
    { href: "/contact", label: "Контакти" },
    { href: "/watchshop", label: "Магазин" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-zinc-800">

      <div className="max-w-7xl mx-auto h-20 px-5 md:px-8 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="relative w-11 h-11 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Часовникарско ателие"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="leading-tight">
            <div className="text-lg md:text-xl font-semibold tracking-wide text-white">
              Часовникарско
            </div>

            <div className="text-lg md:text-xl font-semibold tracking-wide text-yellow-500">
              ателие
            </div>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-3 text-sm font-medium text-zinc-300 hover:text-yellow-500 transition-colors duration-300"
            >
              {link.label}

              <span className="absolute left-1/2 bottom-1 h-[1px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-[60%]" />
            </Link>
          ))}
        </div>

        {/* HAMBURGER */}
        <button
          type="button"
          aria-label="Отвори меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden !mt-0 !w-12 !h-12 !min-w-12 !max-w-12 !p-0 !bg-transparent !rounded-lg !border !border-zinc-700 flex flex-col items-center justify-center gap-1.5 hover:border-yellow-500 transition-all duration-300"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden border-t border-zinc-800 bg-black transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-3">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-4 text-zinc-300 border-b border-zinc-800 hover:text-yellow-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}

        </div>
      </div>

    </nav>
  );
}