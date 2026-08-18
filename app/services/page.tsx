export default function ServicesPage() {
  const services = [
    {
      name: "Смяна на батерия",
      description: "Подмяна на батерия от 1,5V, 3V и капацитатор(solar/kenetik/eco-drive).Избор от швейцарски, японски и китайски батерии."
    },
    {
      name: "Смяна на каишка",
      description: "Избор на каишка от естествена и еко кожа, силикон и текстил."
    },
    {
      name: "Смяна или регулиране на верижка",
      description: "Премахване или добавяне на звена"
    },
    {
      name: "Смяна на стъкло",
      description: "Подмяна на стандартно или формено стъкло"
    },
    {
      name: "Смяна други",
      description: "Смяна на патент, коронка, тока, гайка, уплътнение."
    },
    {
      name: "Оценка на часовник",
      description: "Консултация за автентичността на часовника."
    },
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
            </div>
          ))}

        </div>

      </div>
      <p>Ателието не носи отговорност за часовника при смяна на батиерията. Водоустойчивостта се нарушава поради стареена на уплътненията. </p>
    </div>
  );
}