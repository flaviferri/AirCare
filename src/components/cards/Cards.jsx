const Cards = () => {
  const cardData = [
    {
      title: "Problemas Respiratorios",
      content:
        "La polución del aire puede causar asma, bronquitis y otras enfermedades respiratorias graves.",
    },
    {
      title: "Contaminación del Agua",
      content:
        "Los desechos industriales y químicos contaminan ríos y lagos, afectando la calidad del agua que bebemos.",
    },
    {
      title: "Efectos en la Salud Cardiovascular",
      content:
        "La exposición prolongada a la polución del aire aumenta el riesgo de enfermedades del corazón y accidentes cerebrovasculares.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center p-4 bg-stone-400">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 m-4"
        >
          <h2 className="text-l font-bold mb-2">{card.title}</h2>
          <p className="text-gray-700">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
