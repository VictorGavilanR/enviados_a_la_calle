import { useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { api } from "../services/api";
import { useApi } from "../hooks/useApi";
import PostCard from "./PostCard";
import PostModal from "./PostModal";
import type { Post } from "../types";

export default function GallerySection() {
  const { data: posts, loading, error } = useApi(api.posts.list);
  const [selected, setSelected] = useState<Post | null>(null);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge">📸 Galería</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
            Momentos en la Calle
          </h2>
          <p className="mt-4 mx-auto max-w-xl font-body text-brand-navy/55 text-lg leading-relaxed">
            Imágenes de nuestras salidas, momentos de servicio y comunidad.
          </p>
        </div>

        {/* Estados */}
        {loading && (
          <div className="flex justify-center items-center py-20 gap-3 text-brand-navy/40">
            <Loader2 size={22} className="animate-spin" />
            <span className="font-body text-sm tracking-wide">
              Cargando galería…
            </span>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center py-16 gap-3 text-red-400">
            <AlertCircle size={20} />
            <span className="font-body text-sm">
              No se pudo cargar la galería.
            </span>
          </div>
        )}

        {/* Grid de posts */}
        {posts && posts.length === 0 && (
          <p className="text-center font-body text-brand-navy/40 py-16">
            Aún no hay imágenes en la galería.
          </p>
        )}

        {posts && posts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onClick={setSelected} />
            ))}
          </div>
        )}
      </div>

      {/* Modal detalle */}
      {selected && (
        <PostModal post={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
