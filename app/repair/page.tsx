export default function Repair() {
  const repairs = [
    {
      name: "Ремонт",
      description:
        "Ремонт на ръчни, джобни и стенни часовници и будилници – механични, автоматични и кварцови.",
    },
    {
      name: "Реставрация",
      description:
        "Ремонт и възстановяване на старинни часовници.",
    },
    {
      name: "Профилактика",
      description:
        "Почистване, смазване и настройка на механизма.",
    },
    {
      name: "Преглед и диагностика",
      description:
        "Оценка на техническото състояние и необходимия ремонт.",
    },
    {
      name: "Полиране на часовника",
      description:
        "Шлайфане и премахване на фини драскотини от корпуса и металните части.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold text-center mb-4">
          Ремонт и поддръжка
        </h1>

        <p className="text-center text-gray-400 mb-14">
          Професионален ремонт, реставрация и поддръжка на часовници.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repairs.map((repair, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-500 transition"
            >
              <h2 className="text-2xl font-bold mb-4">
                {repair.name}
              </h2>

              <p className="text-gray-400">
                {repair.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-6">
            Конкретната приложимост и ценообразуване на извършената услуга
            зависи от марката и модела на часовника, вида механизъм, степента
            на повреда и сложността на извършването на услугата.
          </p>

          <p className="text-gray-400">
            Срокът на ремонта зависи от наличността на части, сложността на
            механизма и общото техническо състояние на часовника.
          </p>
        </div>

      </div>
    </div>
  );
}