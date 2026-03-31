export interface NavLink {
  label: string
  href: string
}

export interface Post {
  id: number
  title: string
  content: string
  image: string | null
  created_at: string
}

export interface GalleryImage {
  id: number
  title: string
  image: string
  created_at: string
}