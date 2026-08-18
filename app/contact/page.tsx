import Link from "next/link";
export default function contact() {
  return (
    <div className="min-h-screen bg-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold text-center mb-4">
          Свържи се с нас
        </h1>

        <p className="text-center text-gray-400 mb-16">
          Ако имате въпроси относно нашите продукти, свържете се с нас.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
    
          <div className="bg-zinc-900 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Информация
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="text-yellow-500 font-semibold">
                  🗺️ Адрес
                </h3>
                <Link href="https://maps.app.goo.gl/SgRyhTKnjBgL3HL99" className="text-gray-300">
                  Стария град, Район Централен, ул. „Отец Паисий“ 7, 4000 Пловдив
                </Link>
              </div>

              <div>
                <h3 className="text-yellow-500 font-semibold">
                  📞 Телефон
                </h3>
                <p className="text-gray-300">
                  +359 88 754 2257
                </p>
              </div>

              <div>
                <h3 className="text-yellow-500 font-semibold">
                  📧 Имейл
                </h3>
                <p className="text-gray-300">
                  example@email.com
                </p>
              </div>

              <div>
                <h3 className="text-yellow-500 font-semibold">
                  🕒 Работно време с клиенти:
                </h3>
                <p className="text-gray-300">
                  От понеделник до петък
                </p>
                <p className="text-gray-300">
                  от 10:30 до 13:30
                  от 15:30 до 18:30
                </p>
              </div>

            </div>

          </div>

          {/* Форма */}
          <div className="bg-zinc-900 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Изпрати съобщение
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Вашето име"
                className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                placeholder="Вашият имейл"
                className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-yellow-500"
              />

              <textarea
                rows={6}
                placeholder="Вашето съобщение"
                className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-yellow-500"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-4 rounded-lg font-bold hover:bg-yellow-400 transition"
              >
                Изпрати
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}