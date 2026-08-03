
"use client";
const watches = [
  {
    name: "Rolex Submariner",
    price: "18 500 лв",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
  },
  {
    name: "Omega Speedmaster",
    price: "12 000 лв",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
  },
  {
    name: "TAG Heuer Carrera",
    price: "8 900 лв",
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800",
  },
];

export default function FeaturedWatches() {
  return (
    <section className="max-w-7xl mx-auto py-20">

      <h2 className="text-4xl font-bold mb-10">
        Популярни модели
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {watches.map((watch) => (
          <div
            key={watch.name}
            className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={watch.image}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl">{watch.name}</h3>

              <p className="text-yellow-500 mt-3">
                {watch.price}
              </p>

              <button className="mt-5 w-full bg-yellow-500 text-black py-2 rounded">
                Купи
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}