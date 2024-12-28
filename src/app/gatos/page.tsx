
import FoodCard from "../../../components/FoodCard";

const itemsPerros = [
  {
    title: "Yenu Gato",
    description: "Adulto",
    image: "/gatos.png",
    specs: ["7.5kg", "2kg", "1kg"],
  },
  {
    title: "Yenu Gato",
    description: "Cachorro",
    image: "/gatitos.png",
    specs: ["7.5kg", "1kg"],
  },
];

export default function Perros() {
  return (
    <div className="flex justify-center gap-4 mt-8 container flex-wrap">
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
