import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">

        <Link href="/" className="text-2xl font-bold">
          Часовникарско<span className="text-yellow-500">Ателие</span>
        </Link>

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