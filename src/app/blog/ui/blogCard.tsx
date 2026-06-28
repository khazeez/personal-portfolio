'use client';

import Image from 'next/image';
import Link from 'next/link';
import { mockBlogPosts } from '@/mock/blog';
import { slugify } from '@/components/ui/slugify';
import type { BlogPost } from '@/mock/blog';

type Props = {
  searchQuery: string;
  selectedCategory: string | null;
  onCategoryClick: (category: string | null) => void;
};

export default function BlogCardList({
  searchQuery,
  selectedCategory,
  onCategoryClick,
}: Props) {
  const filtered = mockBlogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory || post.category.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    return (
      <p className='text-center text-gray-500 py-20'>
        No posts found matching your search or filter.
      </p>
    );
  }

  return (
    <section className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {filtered.map((post) => {
        const slug = slugify(post.title);

        const date = new Date(post.timestamp).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });

        const imgSrc =
          (post as any).image ??
          `/blog/${slug}.jpg` ??
          `https://images.unsplash.com/random/600x400?sig=${encodeURIComponent(
            slug
          )}`;

        return (
          <article
            key={slug}
            className='group overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-transform hover:-translate-y-1'
          >
            <Link href={`/blog/${slug}`}>
              <Image
                src={imgSrc}
                alt={post.title}
                width={600}
                height={400}
                className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                priority
              />
            </Link>

            <div className='p-5 flex flex-col gap-3'>
              <time className='text-sm text-gray-500'>{date}</time>

              <Link href={`/blog/${slug}`}>
                <h2 className='text-lg font-semibold line-clamp-2 hover:text-accent'>
                  {post.title}
                </h2>
              </Link>

              <div className='flex flex-wrap gap-2 mt-auto'>
                {post.category.map((cat) => (
                  <button
                    key={cat}
                    type='button'
                    onClick={() =>
                      onCategoryClick(
                        cat === selectedCategory ? null : cat
                      )
                    }
                    className={`text-xs font-medium px-2 py-0.5 rounded-sm glassmorphin transition-opacity hover:opacity-80 ${
                      selectedCategory && selectedCategory !== cat
                        ? 'opacity-40'
                        : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
