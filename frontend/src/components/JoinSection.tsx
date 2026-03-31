import { Send, ExternalLink } from "lucide-react";

const WSP_NUMBER = "56979865432";
const WSP_MESSAGE = encodeURIComponent(
  "Hola, quiero unirme al ministerio Enviados a la Calle 🙏",
);
const FB_PAGE_URL =
  "https://www.facebook.com/share/179UMdhbvd/?mibextid=wwXIfr";

export default function JoinSection() {
  return (
    <section id="unete" className="relative overflow-hidden py-28">
      {/* Fondo con gradiente dramático — ya no es flat navy */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-brand-navy to-[#1a2f55]" />

      {/* Textura de puntos suave */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E8A020 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Arco dorado decorativo superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-b-full bg-brand-gold/5 blur-3xl pointer-events-none" />

      {/* Brillo lateral izquierdo */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-gold/8 blur-[80px] pointer-events-none" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/8 blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Logo con halo */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-brand-gold/20 blur-2xl scale-110 animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-2 ring-brand-gold/30">
            <img
              src="/image/logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <span className="section-badge">
          <Send size={12} /> Únete
        </span>

        <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
          ¿Sientes el llamado
          <br />
          <span className="text-brand-gold drop-shadow-[0_0_20px_rgba(232,160,32,0.4)]">
            a servir?
          </span>
        </h2>

        <p className="mt-5 font-body text-white/60 text-lg leading-relaxed">
          No se necesita experiencia, solo un corazón dispuesto.
          <br />
          Salimos cada semana y siempre hay lugar para ti.
        </p>

        {/* Divisor ornamental */}
        <div className="flex items-center justify-center gap-3 mt-10 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/50" />
          <span className="text-brand-gold/60 text-sm">✦</span>
          <span className="font-body text-white/30 text-xs tracking-[0.25em] uppercase">
            Contáctanos
          </span>
          <span className="text-brand-gold/60 text-sm">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/50" />
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`https://wa.me/${WSP_NUMBER}?text=${WSP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full
                       px-8 py-4 bg-brand-gold hover:bg-amber-500 active:scale-95
                       font-body text-sm font-semibold tracking-widest uppercase text-white
                       shadow-lg shadow-brand-gold/30 transition-all duration-300 hover:scale-105
                       hover:shadow-brand-gold/50"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-white shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>

          <a
            href={FB_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full
                       px-8 py-4 border-2 border-white/20 hover:border-brand-gold/60
                       bg-white/5 hover:bg-brand-gold/10 active:scale-95
                       font-body text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-white
                       transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-white/80 group-hover:fill-white shrink-0 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Visitar en Facebook
            <ExternalLink
              size={13}
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        <p className="mt-7 font-body text-white/25 text-xs tracking-wide">
          También puedes escribirnos directamente por mensaje en Facebook
        </p>
      </div>

      {/* Ola que separa del footer */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30 C480 60 960 0 1440 30 L1440 60 L0 60 Z"
            fill="#050d1a"
          />
        </svg>
      </div>
    </section>
  );
}
