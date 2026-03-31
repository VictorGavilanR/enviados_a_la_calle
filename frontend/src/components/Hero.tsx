import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image/hero-bg.jpg"
          alt="Ministerio en acción"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Destellos decorativos */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-28 pb-20">
        {/* Logo grande reemplazando el título */}
        <div className="mt-8 flex justify-center animate-fade-up opacity-0-init delay-200">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
            {/* Halo/glow animado detrás del logo */}
            <div className="absolute inset-0 rounded-full bg-brand-gold/20 blur-2xl animate-pulse-slow scale-110" />
            <div className="absolute inset-0 rounded-full bg-white/5 blur-xl scale-105" />
            <img
              src="/image/logo.png"
              alt="Ministerio Enviados a la Calle"
              className="relative w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Línea separadora dorada */}
        <div className="mx-auto mt-7 mb-6 w-20 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent animate-fade-in opacity-0-init delay-300" />

        {/* Subtítulo */}
        <p className="mx-auto max-w-xl font-body text-base sm:text-lg text-white/85 leading-relaxed font-light animate-fade-up opacity-0-init delay-400">
          Somos un grupo de hermanos unidos por la fe, llevando{" "}
          <span className="text-brand-gold font-semibold">
            amor, alimento y esperanza
          </span>{" "}
          a quienes más lo necesitan en las calles.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-up opacity-0-init delay-600">
          <a href="#mision" className="btn-primary">
            Conoce nuestra misión <ChevronRight size={16} />
          </a>
          <a href="#unete" className="btn-outline">
            Únete a nosotros
          </a>
        </div>
      </div>

      {/* Ola decorativa */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z"
            fill="#F8F4EE"
          />
        </svg>
      </div>
    </section>
  );
}
