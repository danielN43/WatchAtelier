import Image from "next/image";

export default function WatchShop() {
  return (
    <main className="min-h-screen bg-black text-white" pt-24   = "true">

      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">

                
        <div className="absolute inset-0">
          <Image
            src="/atelier7.png"
            alt="Часовникарско ателие Нерсесян"
            fill
            priority
            sizes="100vw"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
          />
        </div>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

          <p className="text-sm md:text-base uppercase tracking-[0.35em] text-zinc-300 mb-6">
            Часовникарско ателие Нерсесян
          </p>

          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6">
            Нашият магазин
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Мястото, където традиционното часовникарство среща
            вниманието към детайла и качествените часовници.
          </p>

        </div>
      </section>


      {/* ABOUT THE SHOP */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
              За магазина
            </p>

            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Заповядайте при нас
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Можете да разгледате часовниците на място, да получите
              професионален съвет и да се доверите на нашия опит при
              избора или поддръжката на вашия часовник.
            </p>
          </div>


          <div className="relative h-[450px] rounded-2xl overflow-hidden border border-zinc-800">
            <Image
              src="/atelier1.png"
              alt="Интериор на часовникарското ателие"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </section>


      {/* WATCHES */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center mb-14">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Нашата селекция
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-5">
            Часовници в магазина
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Част от часовниците, които можете да разгледате при нас.
          </p>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-2  gap-8">


          {/* WATCH 1 */}
          <div className="group">

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 mb-5">

              <Image
                src="/atelier5.png"
                alt="Часовник"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

          </div>


          {/* WATCH 2 */}
          <div className="group">

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 mb-5">

              <Image
                src="/atelier3.png"
                alt="Луксозен часовник"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

          </div>


          {/* WATCH 3 */}
          <div className="group">

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 mb-5">

              <Image
                src="/atelier2.png"
                alt="Механичен часовник"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

          </div>


          {/* WATCH 4 */}
          <div className="group">

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 mb-5">

              <Image
                src="/atelier4.png"
                alt="Часовник"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

          </div>

          <div className="group">

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 mb-5">

              <Image
                src="/atelier8.png"
                alt="Часовник"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

          </div>

          <div className="group">

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 mb-5">

              <Image
                src="/atelier6.png"
                alt="Часовник"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}