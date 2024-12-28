
import FoodCard from "../../../components/FoodCard";

const itemsPerros = [
  {
    title: "Yenu Perro",
    description: "Adulto Razas Medianas",
    image: "/adultos.png",
    specs: ["15kg", "3kg"],
  },
  {
    title: "Yenu Perro",
    description: "Adulto Razas Pequeñas",
    image: "/adultos.png",
    specs: ["10kg", "3kg"],
  },
  {
    title: "Yenu Perro",
    description: "Cachorro Razas Medianas",
    image: "/cachorros.png",
    specs: ["10kg", "3kg"],
  },
  {
    title: "Yenu Perro",
    description: "Adulto Bajo en Calorias",
    image: "/yenu-control-peso-10kg.png",
    specs: ["15kg", "3kg"],
  },
  {
    title: "Yenu Perro",
    description: "Gerontes Razas Medianas",
    image: "/senior.png",
    specs: ["15kg", "3kg"],
  },
];

export default function Perros() {
  return (
    <div className="flex justify-between gap-4 mt-8 container flex-wrap">
      {itemsPerros.map((item) => (
        <FoodCard
          key={item.description}
          title={item.title}
          description={item.description}
          image={item.image}
          specs={item.specs}
        />
      ))}
    </div>
  );
}
