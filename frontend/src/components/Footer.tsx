import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-navy border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden ">
              <img src="/image/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="block font-accent text-white text-[10px] tracking-widest uppercase opacity-60">Ministerio</span>
              <span className="block font-display text-white font-bold text-sm">Enviados a la Calle</span>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {['Inicio','Misión','Blog','Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="font-body text-xs tracking-widest uppercase text-white/40 hover:text-brand-gold transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30">
            © {new Date().getFullYear()} Ministerio Enviados a la Calle.
          </p>
          <p className="font-body text-xs text-white/30 flex items-center gap-1">
            Hecho con <Heart size={11} className="text-brand-gold fill-brand-gold" /> para los olvidados
          </p>
        </div>
      </div>
    </footer>
  )
}