import { X, Calendar } from 'lucide-react'
import { useEffect } from 'react'
import type { Post } from '../types'

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CL', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

interface Props {
  post: Post
  onClose: () => void
}

export default function PostModal({ post, onClose }: Props) {
  const imgSrc = post.image
    ? post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`
    : null

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen */}
        {imgSrc && (
          <div className="h-64 overflow-hidden">
            <img src={imgSrc} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors text-brand-navy"
        >
          <X size={18} />
        </button>

        {/* Contenido */}
        <div className="p-8">
          <div className="flex items-center gap-2 text-brand-navy/40 text-xs mb-4">
            <Calendar size={12} />
            <span className="font-body">{formatDate(post.created_at)}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-6">
            {post.title}
          </h2>
          <div className="w-12 h-[2px] bg-brand-gold mb-6" />
          <p className="font-body text-brand-navy/70 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  )
}