import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-center pt-20">
            Свържете се с нас
          </h1>
           <p className="text-center text-gray-400 mb-16">
          Ако имате въпроси относно нашите продукти, свържете се с нас.
        </p>

      </div>
          


      {/* CONTACT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-8">


          {/* INFORMATION */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-10">

            <div className="mb-10">

              <h2 className="text-3xl font-serif font-bold">
                Очакваме Ви на
              </h2>
            </div>


            <div className="space-y-8">


              {/* ADDRESS */}
              <div className="flex gap-5">

                <div className="w-12 h-12 shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xl">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Адрес
                  </h3>

                  <Link
                    href="https://maps.app.goo.gl/SgRyhTKnjBgL3HL99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-amber-400 transition leading-relaxed"
                  >
                    Стария град, Район Централен
                    <br />
                    ул. „Отец Паисий“ 7
                    <br />
                    4000 Пловдив
                  </Link>
                </div>

              </div>


              {/* PHONE */}
              <div className="flex gap-5">

                <div className="w-12 h-12 shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xl">
                  📞
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Телефон
                  </h3>

                  <p
                    className="text-zinc-400  transition"
                  >
                    +359 88 754 2257
                  </p>
                </div>

              </div>


              {/* EMAIL */}
              <div className="flex gap-5">

                <div className="w-12 h-12 shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Имейл
                  </h3>

                  <p className="text-zinc-400">
                    hachwach@abv.bg
                  </p>
                </div>

              </div>


              {/* WORKING HOURS */}
              <div className="flex gap-5">

                <div className="w-12 h-12 shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xl">
                  🕒
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">
                    Работно време
                  </h3>

                  <div className="text-zinc-400 space-y-1">
                    <p>Понеделник – Петък</p>
                    <p>10:30 – 13:30</p>
                    <p>15:30 – 18:30</p>
                  </div>
                </div>

              </div>

            </div>


            {/* MAP BUTTON */}
            <div className="mt-10 pt-8 border-t border-zinc-800">

              <Link
                href="https://maps.app.goo.gl/SgRyhTKnjBgL3HL99"
                className="btn"
              >
                Отвори в Google Maps →
              </Link>

            </div>

          </div>


          {/* CONTACT FORM */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-10">

            <div className="mb-10"> 

              <h2 className="text-3xl font-serif font-bold">
                Изпратете съобщение
              </h2>

            </div>


            <form className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Вашето име:
                </label>

                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                />
              </div>


              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Вашият имейл:
                </label>

                <input
                  type="email"
                  placeholder="ivan@example.com"
                  className="w-full px-4 py-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                />
              </div>


              {/* PHONE */}
              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Телефон:
                </label>

                <input
                  type="tel"
                  placeholder="Телефон:"
                  className="w-full px-4 py-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                />
              </div>


              
              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Съобщение:
                </label>

                <textarea
                  rows={5}
                  placeholder="Напишете Вашето съобщение..."
                  className="w-full px-4 py-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition resize-none"
                />
              </div>


              {/* BUTTON */}
              <button
                type="submit"
                className="btn"
              >
                Изпрати съобщение
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}