import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/atelier9.png"
        alt="Часовникарско ателие"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[calc(100vh-80px)] px-6 md:px-10 flex items-center">

        <div className="max-w-3xl">

          {/* SMALL LABEL */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-yellow-500" />

            <span className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-medium">
              Традиция от трето поколение
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] text-white">
            Часовникарско
            <span className="block text-yellow-500 mt-2">
              ателие
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
            Ремонт, реставрация и поддръжка на часовници
            с внимание към всеки детайл.
          </p>

          {/* OWNER */}
          <p className="mt-4 text-zinc-400 text-base md:text-lg">
            Часовникар Хачо Нерсесян
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-yellow-500 px-8 py-4 rounded-lg text-black font-bold hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
            >
              Разгледай услугите
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-zinc-500 text-white font-semibold hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300"
            >
              Свържете се с нас
            </Link>

          </div>

          {/* BOTTOM INFO */}
          <div className="flex flex-wrap gap-8 mt-14 pt-6 border-t border-zinc-700/70">

            <div>
              <p className="text-2xl font-bold text-white">30+</p>
              <p className="text-sm text-zinc-400">
                години опит
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">3</p>
              <p className="text-sm text-zinc-400">
                поколения
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">
                Пловдив
              </p>
              <p className="text-sm text-zinc-400">
                часовникарско ателие
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-zinc-400">
        <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Scroll
        </span>

        <span className="w-[1px] h-12 bg-yellow-500" />
      </div>

    </section>
  );
}