import Link from "next/link";
export default function Hero() {
  return (
    <section className="h-[90vh] flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-bold">
          Часовникарско ателие
        </h1>

        <p className="text-zinc-400 mt-5 text-xl">
          Ремонти и реставрации
          Наследство ,традиция и опит
          Часовникар Хачо Нерсесян
        </p>

        <Link href="/services"
          className="mt-8 inline-block bg-yellow-500 px-8 py-3 rounded-lg text-black font-bold hover:scale-105 transition"
        > Услуги</Link>

      </div>

    </section>
  );
}