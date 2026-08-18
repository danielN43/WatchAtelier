import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">

        {/* LOGO + NAME */}
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold"
        >
          <Image
            src="/logo.png"
            alt="Часовникарско ателие"
            width={45}
            height={45}
          />

          <span>
            Часовникарско
            <span className="text-yellow-500"> aтелие</span>
          </span>
        </Link>

        {/* NAVIGATION */}
        <div className="flex gap-8">
          <Link href="/">Начало</Link>
          <Link href="/about">За нас</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/repair">Ремонт и подръжка</Link>
          <Link href="/contact">Контакти</Link>
          <Link href="/watchshop">Магазин</Link>
        </div>

      </div>
    </nav>
  );
}