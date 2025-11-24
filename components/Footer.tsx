import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-background border-t border-neutral-light-gray pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-green text-white p-2 rounded-lg font-bold text-lg">
                HF
              </div>
              <span className="text-xl font-bold text-neutral-dark font-display">
                Habla Fresh
              </span>
            </div>
            <p className="text-neutral-gray text-sm leading-relaxed mb-6">
              Tu compañero de entrenamiento social. Mejora tus habilidades de comunicación con IA en un entorno seguro y divertido.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-neutral-gray hover:text-primary-green transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-neutral-gray hover:text-primary-green transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-neutral-gray hover:text-primary-green transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-neutral-gray hover:text-primary-green transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-neutral-dark mb-4">Producto</h4>
            <ul className="space-y-3 text-sm text-neutral-gray">
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Características</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Cómo funciona</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Precios</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Testimonios</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-neutral-dark mb-4">Compañía</h4>
            <ul className="space-y-3 text-sm text-neutral-gray">
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Sobre nosotros</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Carreras</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-neutral-dark mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-neutral-gray">
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Privacidad</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Términos</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-green transition-colors">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-light-gray pt-8 text-center text-sm text-neutral-gray">
          <p>&copy; {new Date().getFullYear()} Habla Fresh. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
