import { Heart } from "lucide-react";

const NAV_ITEMS = [
  { label: "Inicio",   href: "#inicio" },
  { label: "Misión",   href: "#mision" },
  { label: "Galería",  href: "#galeria" },
  { label: "Blog",     href: "#blog" },
  { label: "Únete",    href: "#unete" },
];

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative"
      style={{ background: "#050d1a" }}   // más oscuro que brand-navy para diferenciarse
    >
      {/* Línea dorada superior */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Marca */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-brand-gold/25 shadow-lg shadow-brand-gold/10">
              <img src="/image/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="block font-accent text-brand-gold/60 text-[10px] tracking-[0.3em] uppercase leading-tight">
                Ministerio
              </span>
              <span className="block font-display text-white font-bold text-sm leading-tight">
                Enviados a la Calle
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-[11px] tracking-widest uppercase text-white/30
                           hover:text-brand-gold transition-colors duration-200 relative
                           after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px
                           after:bg-brand-gold/60 after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divisor */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/20">
            © {new Date().getFullYear()} Ministerio Enviados a la Calle. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-white/20 flex items-center gap-1.5">
            Hecho con{" "}
            <Heart size={11} className="text-brand-gold fill-brand-gold drop-shadow-[0_0_4px_rgba(232,160,32,0.6)]" />
            {" "}para los olvidados
          </p>
        </div>
      </div>
    </footer>
  );
}