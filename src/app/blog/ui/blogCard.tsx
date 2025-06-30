// components/BlogCardList.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { mockBlogPosts } from '@/mock/blog';

export default function BlogCardList() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockBlogPosts.map((post) => {
        const date = new Date(post.timestamp).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });

        // Ganti URL ini dengan post.image kalau nantinya ada
        const placeholderImg = `/${encodeURIComponent(
          post.title,
        )}`;

        return (
          <article
            key={post.title}
            className="group overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-transform hover:-translate-y-1"
          >
            {/* --- Thumbnail --- */}
            <Link href={`/blog/${encodeURIComponent(post.title)}`}>
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>

            {/* --- Card body --- */}
            <div className="p-5 flex flex-col gap-3">
              {/* Tanggal */}
              <time className="text-sm text-gray-500">{date}</time>

              {/* Judul */}
              <Link href={`/blog/${encodeURIComponent(post.title)}`}>
                <h2 className="text-lg font-semibold line-clamp-2 hover:text-accent">
                  {post.title}
                </h2>
              </Link>

              {/* Kategori badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {post.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs font-medium px-2 py-0.5 rounded-sm glassmorphin text-accent dark:text-accent"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
