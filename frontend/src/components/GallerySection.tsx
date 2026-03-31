import { useState } from "react";
import { Loader2, AlertCircle, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { useApi } from "../hooks/useApi";
import { api } from "../services/api";
import PostModal from "./PostModal";
import type { Post } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

function imgSrc(post: Post) {
  if (!post.image) return null;
  return post.image.startsWith("http") ? post.image : `${BASE_URL}${post.image}`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-CL", {
    day: "2-digit", month: "2-digit", year: "numeric",
  });
}

// ─── Carrusel de salidas anteriores ───────────────────────────────────────────
function PreviousCarousel({ posts, onSelect }: { posts: Post[]; onSelect: (p: Post) => void }) {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const canPrev = index > 0;
  const canNext = index + visible < posts.length;

  return (
    <div className="mt-10">
      <h3 className="font-display text-lg font-semibold text-brand-navy/60 mb-5 tracking-wide">
        Salidas anteriores
      </h3>

      <div className="relative flex items-center gap-3">
        {/* Flecha izquierda */}
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={!canPrev}
          className="shrink-0 w-9 h-9 rounded-full border-2 border-brand-navy/15 flex items-center justify-center
                     text-brand-navy/40 hover:border-brand-gold hover:text-brand-gold
                     disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Cards visibles */}
        <div className="flex-1 grid grid-cols-3 gap-4 overflow-hidden">
          {posts.slice(index, index + visible).map((post) => {
            const src = imgSrc(post);
            return (
              <article
                key={post.id}
                onClick={() => onSelect(post)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer
                           border-2 border-brand-navy/8 hover:border-brand-gold/40
                           shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-brand-light"
              >
                <div className="aspect-video overflow-hidden">
                  {src ? (
                    <img
                      src={src}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-navy/20">
                      <span className="text-3xl opacity-20">✝</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Título al hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-body font-semibold truncate">{post.title}</p>
                </div>
              </article>
            );
          })}

          {/* Placeholders si hay menos de 3 */}
          {posts.slice(index, index + visible).length < visible &&
            Array.from({ length: visible - posts.slice(index, index + visible).length }).map((_, i) => (
              <div key={`ph-${i}`} className="aspect-video rounded-2xl border-2 border-dashed border-brand-navy/10 bg-brand-navy/3" />
            ))}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={() => setIndex((i) => Math.min(posts.length - visible, i + 1))}
          disabled={!canNext}
          className="shrink-0 w-9 h-9 rounded-full border-2 border-brand-navy/15 flex items-center justify-center
                     text-brand-navy/40 hover:border-brand-gold hover:text-brand-gold
                     disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

// ─── Sección principal ─────────────────────────────────────────────────────────
export default function GallerySection() {
  const { data: posts, loading, error } = useApi(api.posts.list);
  const [selected, setSelected] = useState<Post | null>(null);

  const latest   = posts?.[0] ?? null;
  const previous = posts?.slice(1) ?? [];
  const latestSrc = latest ? imgSrc(latest) : null;

  return (
    <section id="galeria" className="py-24 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge">Galería</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
            Momentos en la Calle
          </h2>
          <p className="mt-4 mx-auto max-w-xl font-body text-brand-navy/55 text-lg leading-relaxed">
            Imágenes de nuestras salidas, momentos de servicio y comunidad.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20 gap-3 text-brand-navy/40">
            <Loader2 size={22} className="animate-spin" />
            <span className="font-body text-sm">Cargando galería…</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex justify-center items-center py-16 gap-3 text-red-400">
            <AlertCircle size={20} />
            <span className="font-body text-sm">No se pudo cargar la galería.</span>
          </div>
        )}

        {/* Vacío */}
        {posts && posts.length === 0 && (
          <p className="text-center font-body text-brand-navy/40 py-16">
            Aún no hay imágenes en la galería.
          </p>
        )}

        {/* Contenido */}
        {latest && (
          <>
            {/* ── Última salida destacada ── */}
            <div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-5 flex items-center gap-3">
                <span className="w-1 h-6 rounded-full bg-brand-gold inline-block" />
                Última Salida
              </h3>

              <div
                onClick={() => setSelected(latest)}
                className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden
                           border-2 border-brand-navy/8 hover:border-brand-gold/30
                           shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
              >
                {/* Imagen */}
                <div className="relative h-64 md:h-auto overflow-hidden bg-brand-light">
                  {latestSrc ? (
                    <img
                      src={latestSrc}
                      alt={latest.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-navy/20">
                      <span className="text-5xl opacity-20">✝</span>
                    </div>
                  )}
                  {/* Badge encima */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold text-white text-[10px] font-body font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                      Más reciente
                    </span>
                  </div>
                </div>

                {/* Descripción */}
                <div className="bg-white p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-brand-navy leading-snug mb-4 group-hover:text-brand-blue transition-colors">
                      {latest.title}
                    </h4>
                    <div className="w-10 h-[2px] bg-brand-gold mb-5" />
                    <p className="font-body text-brand-navy/60 text-sm leading-relaxed line-clamp-5">
                      {latest.content}
                    </p>
                  </div>

                  {/* Fecha */}
                  <div className="flex items-center justify-end gap-2 mt-6 text-brand-navy/35 text-xs font-body">
                    <Calendar size={12} />
                    <span>{formatDate(latest.created_at)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Salidas anteriores ── */}
            {previous.length > 0 && (
              <PreviousCarousel posts={previous} onSelect={setSelected} />
            )}
          </>
        )}
      </div>

      {/* Modal */}
      {selected && <PostModal post={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}