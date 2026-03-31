import { Utensils, Heart, BookOpen, Users } from 'lucide-react'

const PILLARS = [
  {
    icon: Utensils,
    title: 'Alimento',
    description: 'Cada semana llevamos comida caliente a los que duermen en las calles.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    imageAlt: 'Voluntarios repartiendo comida',
  },
  {
    icon: Heart,
    title: 'Amor',
    description: 'Nos sentamos con ellos, los escuchamos y les mostramos que no están solos.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
    imageAlt: 'Persona extendiendo la mano',
  },
  {
    icon: BookOpen,
    title: 'Esperanza',
    description: 'Compartimos el mensaje de Cristo que transforma y restaura vidas.',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80',
    imageAlt: 'Biblia abierta con luz',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Conectamos a personas vulnerables con redes de apoyo y rehabilitación.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80',
    imageAlt: 'Grupo de personas unidas',
  },
]

export default function MissionSection() {
  return (
    <section id="mision" className="py-24 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge"><span>✝</span> Nuestra Misión</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
            Ir donde nadie quiere ir
          </h2>
          <p className="mt-4 mx-auto max-w-2xl font-body text-brand-navy/60 text-lg leading-relaxed">
            Creemos que cada persona en situación de calle tiene un valor infinito ante los ojos de Dios. Por eso salimos a buscarlos.
          </p>
        </div>

        {/* Cards con imagen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-navy/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
              >
                {/* Imagen */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay degradado sobre imagen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/20 to-transparent" />
                  {/* Ícono flotando sobre la imagen */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/30">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>

                {/* Texto */}
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-brand-navy/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Línea dorada hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        {/* Cita bíblica — estilo manuscrito/pergamino */}
        <div className="mt-20 mx-auto max-w-3xl">
          <div className="relative">
            {/* Fondo tipo pergamino */}
            <div
              className="relative rounded-2xl overflow-hidden px-10 py-12 text-center"
              style={{
                background: 'linear-gradient(135deg, #1a0e00 0%, #2d1a00 40%, #1a0e00 100%)',
                boxShadow: '0 0 0 1px rgba(232,160,32,0.2), 0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(232,160,32,0.15)',
              }}
            >
              {/* Textura de pergamino simulada con bordes */}
              <div className="absolute inset-3 rounded-xl border border-brand-gold/20 pointer-events-none" />
              <div className="absolute inset-5 rounded-lg border border-brand-gold/10 pointer-events-none" />

              {/* Ornamento superior */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-gold/50" />
                <span className="text-brand-gold text-xl">✦</span>
                <span className="text-brand-gold/60 text-sm">✝</span>
                <span className="text-brand-gold text-xl">✦</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-gold/50" />
              </div>

              {/* Comillas decorativas */}
              <div
                className="absolute top-8 left-8 font-display text-8xl leading-none select-none"
                style={{ color: 'rgba(232,160,32,0.12)', fontStyle: 'italic' }}
              >
                "
              </div>
              <div
                className="absolute bottom-16 right-8 font-display text-8xl leading-none select-none rotate-180"
                style={{ color: 'rgba(232,160,32,0.12)', fontStyle: 'italic' }}
              >
                "
              </div>

              {/* Texto de la cita */}
              <p className="relative font-display italic text-amber-100/90 text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-wide">
                Entonces el Rey dirá a los de su derecha:{' '}
                <em className="text-brand-gold not-italic font-bold">venid...</em>{' '}
                porque tuve hambre y me disteis de comer; fui forastero y me recogisteis.
              </p>

              {/* Ornamento inferior */}
              <div className="flex items-center justify-center gap-3 mt-7 mb-1">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-gold/40" />
                <span className="text-brand-gold/80 text-xs tracking-[0.35em] uppercase font-accent">
                  Mateo 25 : 34–35
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-gold/40" />
              </div>
            </div>

            {/* Sombra/brillo exterior */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-gold/5 blur-xl -z-10" />
          </div>
        </div>

      </div>
    </section>
  )
}