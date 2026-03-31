import axios from 'axios'
import type { Post, GalleryImage } from '../types'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000',
})

export const api = {
  posts: {
    list:   ()           => client.get<Post[]>('/api/posts/').then(r => r.data),
    detail: (id: number) => client.get<Post>(`/api/posts/${id}/`).then(r => r.data),
  },
  gallery: {
    list: () => client.get<GalleryImage[]>('/api/gallery/').then(r => r.data),
  },
}