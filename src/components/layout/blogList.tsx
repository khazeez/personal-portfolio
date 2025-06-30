// components/layout/BlogList.tsx
'use client';

import Glassmorphin from '../ui/glassmorphin';
import { mockBlogPosts } from '@/mock/blog';
import Link from 'next/link';
import { slugify } from '@/components/ui/slugify'; // pastikan path util benar

export default function BlogList() {
  const posts = mockBlogPosts.slice(0, 5); // 5 post teratas

  return (
    <div className='tracking-widest py-10 space-y-10'>
      <h1
        id='blog'
        className='scroll-mt-24 text-3xl lg:text-5xl font-bold border-b-4 border-b-accent w-fit'
      >
        Writing
      </h1>

      {/* Timeline */}
      <ol className='relative ml-4 border-s border-gray-200 dark:border-gray-700'>
        {posts.map((post, idx) => {
          const slug = slugify(post.title);
          const snippet =
            post.content.length > 180
              ? `${post.content.slice(0, 180)}…`
              : post.content;

          return (
            <li key={slug} className='mb-10 ms-6'>
              {/* Titik timeline */}
              <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent ring-4 ring-blue-400/40'>
                <svg
                  className='h-2.5 w-2.5 text-background dark:text-background'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                </svg>
              </span>

              {/* Judul (menjadi link) */}
              <h3 className='mb-1 flex flex-wrap items-center text-lg font-semibold text-gray-900 dark:text-white'>
                <Link
                  href={`/blog/${slug}`}
                  className='
      transition-colors
      hover:text-accent
      hover:underline hover:decoration-accent hover:underline-offset-2
    '
                >
                  {post.title}
                </Link>

                {idx === 0 && (
                  <span className='ms-3 rounded-sm bg-accent px-2.5 py-0.5 text-sm font-medium text-background dark:text-background'>
                    Latest
                  </span>
                )}
              </h3>

              <time className='block mb-2 text-sm leading-none text-gray-400 dark:text-gray-500'>
                {new Date(post.timestamp).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>

              <p className='mb-4 text-base text-gray-500 dark:text-gray-400'>
                {snippet}
              </p>

              {/* Badge kategori */}
              <div className='flex flex-wrap gap-2'>
                {post.category.map((cat) => (
                  <span
                    key={cat}
                    className='glassmorphin rounded-sm px-2 py-0.5 text-xs font-medium text-accent dark:text-accent'
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </li>
          );
        })}
      </ol>
      

      {/* Tombol See more (ke halaman daftar blog) */}
      <div className='flex pt-6'>
        <Link
          href='/blog'
          className='inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-accent hover:text-background focus:outline-none focus:ring-2 focus:ring-accent dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-accent dark:hover:text-background'
        >
          See more
        </Link>
      </div>
    </div>
  );
}
