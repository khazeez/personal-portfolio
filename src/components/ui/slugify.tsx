// lib/slugify.ts
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Hapus karakter spesial
    .replace(/\s+/g, '-') // Ganti spasi dengan dash
    .replace(/--+/g, '-'); // Hindari duplikasi dash
}
