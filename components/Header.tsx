import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto py-3">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="flex-1 flex justify-center">
        <Link href="/">
          <Image
            src="/logo-perros.png"
            alt="YENU Logo"
            width={300}
            height={150}
            className="mx-auto"
          />
        </Link>
      </div>
    </div>

    {/* Navigation */}
    <nav className="my-8">
      <ul className="flex justify-center gap-8 text-[#D4C3B5]">
        {[
          "Perros",
          "Gatos",
          "Calidad OVN",
          "Contacto",
        ].map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-bold hover:text-white  underline underline-offset-4  decoration-yenu-brown hover:underline-offset-8 transition-all hover:decoration-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  );
}
