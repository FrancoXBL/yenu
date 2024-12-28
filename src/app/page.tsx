import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PetSections from "../../components/PetSections";


const itemsCarousel = [
  { text: "El alimento elegido por los campeones.", src: "/slider-1.jpg" },
  { text: "Porque ellos esperan... Lo mejor de vos...", src: "/slider-2.jpg" },
  {
    text: "Calidad certificada que garantiza. La mejor nutricion para tus mascotas.",
    src: "/slider-3.jpg",
  },
];

export default function Home() {
  return (
    <div className=" bg-black">
      {/* Hero Section */}
      <Carousel>
      <CarouselContent>
        {itemsCarousel.map((_, index) => (
            <CarouselItem key={index}>
                <article className="relative grid min-h-[300px] w-full grid-cols-2 overflow-hidden rounded-sm bg-black/50 ">
                  {/* Content */}
                  <div className="relative z-10 flex flex-col  p-6 text-white">

                    {/* Title */}
                    <h1 className="mb-4 lg:text-6xl text-2xl font-bold leading-tight">
                      {_.text}
                    </h1>
                  </div>

                  {/* Image Section */}
                  <div className="lg:relative">
                    <Image
                      src={_.src}
                      alt="Article background"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-black/80" />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yenu-brown/50 via-black/80 to-transparent z-[1]" />
                </article>
            </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
      <section className="">
        <PetSections />
      </section>

    </div>
  );
}


