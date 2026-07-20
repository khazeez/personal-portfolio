'use client';

import Link from 'next/link';
import { mockBlogPosts } from '@/mock/blog';
import { slugify } from '@/components/ui/slugify';

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
        Tidak ada artikel yang ditemukan.
      </p>
    );
  }

  return (
    <div className='divide-y divide-gray-100 dark:divide-gray-800'>
      {filtered.map((post) => {
        const slug = slugify(post.title);
        const date = new Date(post.timestamp).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
        const snippet =
          post.content.length > 200
            ? post.content.slice(0, 200).trim() + '…'
            : post.content.trim();

        return (
          <div key={slug} className='py-6 first:pt-0 last:pb-0'>
            <div className='space-y-2.5'>
              {/* Meta */}
              <div className='flex flex-wrap items-center gap-2 text-xs text-gray-400 dark:text-gray-500'>
                <time>{date}</time>
                <span className='text-gray-300 dark:text-gray-600'>/</span>
                <span>{Math.ceil(post.content.split(/\s+/).length / 200)} min</span>
              </div>

              {/* Title */}
              <Link href={`/blog/${slug}`} className='group block'>
                <h2 className='text-lg font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors'>
                  {post.title}
                </h2>
              </Link>

              {/* Snippet */}
              <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2'>
                {snippet}
              </p>

              {/* Categories */}
              <div className='flex flex-wrap gap-1.5 pt-1'>
                {post.category.map((cat) => (
                  <button
                    key={cat}
                    type='button'
                    onClick={() =>
                      onCategoryClick(cat === selectedCategory ? null : cat)
                    }
                    className={`text-[11px] px-2 py-0.5 rounded-sm border transition-all duration-200 ${
                      selectedCategory === cat
                        ? 'border-accent text-accent bg-accent/5'
                        : 'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:border-accent/50'
                    } ${
                      selectedCategory && selectedCategory !== cat
                        ? 'opacity-30'
                        : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
