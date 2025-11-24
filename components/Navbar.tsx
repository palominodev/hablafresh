import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-light-gray h-[80px] flex items-center">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-[1280px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
             <img
              src="/habla-fresh-1.png"
              alt="Habla Fresh Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-xl font-bold text-neutral-dark font-display">
            Habla Fresh
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-neutral-dark hover:text-primary-green font-medium transition-colors"
          >
            Características
          </Link>
          <Link
            href="#how-it-works"
            className="text-neutral-dark hover:text-primary-green font-medium transition-colors"
          >
            Cómo funciona
          </Link>
          <Link
            href="#testimonials"
            className="text-neutral-dark hover:text-primary-green font-medium transition-colors"
          >
            Testimonios
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-primary-green hover:bg-primary-dark-green text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm">
            Descargar App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-neutral-dark hover:text-primary-green transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
