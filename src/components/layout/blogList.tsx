'use client';

import { mockBlogPosts } from '@/mock/blog';
import Link from 'next/link';
import { slugify } from '@/components/ui/slugify';

export default function BlogList() {
  const posts = mockBlogPosts.slice(0, 5);

  return (
    <div className='py-6 lg:py-10 space-y-6 lg:space-y-8'>
      <h1
        id='blog'
        className='scroll-mt-24 text-2xl lg:text-5xl font-bold'
      >
        <span className='relative inline-block'>
          Writing
          <svg
            className='absolute -bottom-1.5 left-0 w-full h-3'
            viewBox='0 0 120 12'
            preserveAspectRatio='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0,8 C5,2 10,12 15,8 C20,2 25,12 30,8 C35,2 40,12 45,8 C50,2 55,12 60,8 C65,2 70,12 75,8 C80,2 85,12 90,8 C95,2 100,12 105,8 C110,2 115,12 120,8'
              fill='none'
              stroke='var(--accent)'
              strokeWidth='2.5'
              strokeLinecap='round'
            />
          </svg>
        </span>
      </h1>

      <div className='divide-y divide-gray-200/50 dark:divide-gray-700/50'>
        {posts.map((post, idx) => {
          const slug = slugify(post.title);
          const snippet =
            post.content.length > 180
              ? `${post.content.slice(0, 180).trim()}…`
              : post.content.trim();

          return (
            <div key={slug} className='py-5 first:pt-0 last:pb-0'>
              <div className='space-y-2'>
                <div className='flex flex-wrap items-center gap-2'>
                  <Link
                    href={`/blog/${slug}`}
                    className='text-base font-semibold text-gray-900 dark:text-white hover:text-accent transition-colors'
                  >
                    {post.title}
                  </Link>
                  {idx === 0 && (
                    <span className='text-[10px] uppercase tracking-wider font-semibold text-accent border border-accent/30 px-2 py-0.5 rounded-sm'>
                      Latest
                    </span>
                  )}
                </div>

                <div className='flex items-center gap-3 text-xs text-gray-400'>
                  <time>
                    {new Date(post.timestamp).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <span className='text-gray-600'>/</span>
                  <div className='flex flex-wrap gap-1.5'>
                    {post.category.map((cat) => (
                      <span key={cat} className='text-accent'>
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
                  {snippet}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex pt-2'>
        <Link
          href='/blog'
          className='text-sm font-medium text-accent hover:underline underline-offset-2'
        >
          See all articles &rarr;
        </Link>
      </div>
    </div>
  );
}
