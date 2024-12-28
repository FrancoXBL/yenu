import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Company Info */}
        <div className="space-y-2">
          <p className="font-medium">Fabricado por: GARAY S.R.L.</p>
          <p className="text-zinc-300 text-sm">
            Ruta 11 Km 486 - Recreo - Santa Fe
          </p>
          <div className="flex flex-col gap-1 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <p>Tel - Fax: 0342- 496 0307 / 308 / 022 / 385</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <Link 
                href="mailto:alimentos@alimentosyenu.com.ar"
                className="hover:text-white transition-colors"
              >
                alimentos@alimentosyenu.com.ar
              </Link>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="flex items-center gap-8">
          <Link href="https://garaysrl.com.ar/" target="_blank">
          <Image
            src="/logo-garay.png" 
            alt="Garay Logo"
            width={180}
            height={60}
            className="h-auto w-auto"
          />
          </Link>
          <Image
            src="/cinta-arg.png"
            alt="Producto Argentino Logo"
            width={180}
            height={80}
            className=""
          />
        </div>
      </div>
    </div>
  </footer>
  );
}
