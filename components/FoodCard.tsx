import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

type FoodSectionsProps = {
  title: string;
  description: string;
  image: string;
  specs: string[];
};
export default function FoodCard(props: FoodSectionsProps) {
  return (
    <Card className="w-[300px] overflow-hidden bg-gradient-to-b from-zinc-800 to-yenu-brown/90 text-white border-none mx-auto md:mx-0">
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">{props.title}</CardTitle>
          <Badge variant="secondary" className="bg-amber-600/20 text-amber-300 hover:bg-amber-600/20">
            Premium
          </Badge>
        </div>
        <p className="text-zinc-400 text-sm">{props.description}</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent z-10" />
          <img
            src={props.image}
            alt="Yenu Perro dog food package"
            className="object-scale-down w-full h-full transform transition-transform hover:scale-105 duration-300"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 pt-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-zinc-300">Presentaciones</span>
          </div>
        </div>
        <div className="flex gap-2 w-full">
          {props.specs.map((spec) => (
            <Badge key={spec} variant="secondary" className="bg-zinc-700 hover:bg-zinc-600 text-white text-md hover:cursor-default">
              {spec}
            </Badge>
          ))}
        </div>
        <Button className="w-full bg-zinc-800 hover:bg-yenu-brown/50 text-white">
          Más Información
        </Button>
      </CardFooter>
    </Card>
  );
}
