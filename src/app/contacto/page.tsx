"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  phone: z.string().min(8, {
    message: "Ingrese un número de teléfono válido.",
  }),
  email: z.string().email({
    message: "Ingrese un email válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen relative bg-[url('/test.avif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
        <div className="relative z-10 container mx-auto px-4 py-12">
      <Card className="w-full max-w-2xl mx-auto  bg-white/30 backdrop-blur-sm rounded-lg p-8 shadow-xl text-bold text-black">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-black ">
            Contacto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-black ">
                      Nombre y Apellido (*)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nombre y Apellido"
                        className="bg-[#dcd6d3] border-none text-black "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-black ">Teléfono</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: 0342 - 0000000"
                        className="bg-[#dcd6d3] border-none text-black  "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-black ">Email (*)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tudireccion@ejemplo.com"
                        type="email"
                        className="bg-[#dcd6d3] border-none text-black "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-black ">Consulta</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escriba su mensaje aquí"
                        className="bg-[#dcd6d3] border-none  min-h-[120px] text-black "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col space-y-2">
                <Button
                  type="submit"
                  className="self-end bg-black hover:bg-black/70"
                >
                  ENVIAR
                </Button>
                <p className="text-sm text-black font-bold">
                  (*) Campos de llenado obligatorio
                </p>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
