import { Calendar, ArrowRight } from 'lucide-react'
import type { Post } from '../types'

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CL', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

function excerpt(text: string, max = 120) {
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text
}

interface Props {
  post: Post
  onClick: (post: Post) => void
}

export default function PostCard({ post, onClick }: Props) {
  const imgSrc = post.image
    ? post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`
    : null

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
      onClick={() => onClick(post)}
    >
      {/* Imagen de portada */}
      <div className="relative h-48 overflow-hidden bg-brand-light">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-navy/20">
            <span className="text-4xl opacity-30">✝</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
        {/* Línea dorada hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 text-brand-navy/40 text-xs mb-3">
          <Calendar size={12} />
          <span className="font-body tracking-wide">{formatDate(post.created_at)}</span>
        </div>

        <h3 className="font-display text-lg font-bold text-brand-navy leading-snug mb-2 group-hover:text-brand-blue transition-colors">
          {post.title}
        </h3>
        <p className="font-body text-sm text-brand-navy/55 leading-relaxed flex-1">
          {excerpt(post.content)}
        </p>

        <div className="flex items-center gap-1 mt-4 text-brand-gold text-xs font-semibold tracking-widest uppercase font-body">
          Leer más <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  )
}