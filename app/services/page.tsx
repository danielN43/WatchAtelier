export default function ServicesPage() {
  const services = [
    {
      name: "Смяна на батерия",
      price: "20 евро.",
      description: "Подмяна на батерия с качествена нова батерия."
    },
    {
      name: "Регулиране на метална каишка",
      price: "15 евро.",
      description: "Премахване или добавяне на звена."
    },
    {
      name: "Полиране на часовник",
      price: "60 евро.",
      description: "Премахване на фини драскотини и възстановяване на блясъка."
    },
    {
      name: "Пълна профилактика",
      price: "60 евро.",
      description: "Почистване, смазване и настройка на механизма."
    },
    {
      name: "Проверка за водоустойчивост",
      price: "30 евро.",
      description: "Тест за херметичност и водоустойчивост."
    },
    {
      name: "Подмяна на стъкло",
      price: "От 80 евро.",
      description: "Подмяна на минерално или сапфирено стъкло."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold text-center mb-4">
          Услуги и цени
        </h1>

        <p className="text-center text-gray-400 mb-14">
          Предлагаме професионален сервиз и поддръжка на всички видове часовници.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-500 transition"
            >
              <h2 className="text-2xl font-bold mb-3">
                {service.name}
              </h2>

              <p className="text-gray-400 mb-6">
                {service.description}
              </p>

              <div className="text-3xl font-bold text-yellow-500">
                {service.price}
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}