'use client';

import { useState } from 'react';
import BlogCardList from './ui/blogCard';

const allCategories = ['Frontend', 'Backend', 'Security', 'Automation Test'];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (cat: string | null) => {
    setSelectedCategory(cat);
  };

  return (
    <div className='min-h-screen'>
      {/* Header fixed */}
      <div className='sticky top-0 z-20 bg-background border-b border-accent/10'>
        <div className='max-w-6xl mx-auto px-5 lg:px-10 py-3 lg:py-4'>
          <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-3'>
            <h1 className='text-lg font-bold text-gray-900 dark:text-white'>
              Blog
            </h1>

            <div className='flex flex-wrap items-center gap-2'>
              {/* Kategori */}
              <div className='flex flex-wrap gap-1'>
                <button
                  type='button'
                  onClick={() => setSelectedCategory(null)}
                  className={`text-[11px] tracking-wide px-2 py-0.5 rounded-sm border transition-all duration-200 ${
                    !selectedCategory
                      ? 'border-accent text-accent bg-accent/5'
                      : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-accent/50'
                  }`}
                >
                  All
                </button>
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    type='button'
                    onClick={() =>
                      setSelectedCategory(cat === selectedCategory ? null : cat)
                    }
                    className={`text-[11px] tracking-wide px-2 py-0.5 rounded-sm border transition-all duration-200 ${
                      selectedCategory === cat
                        ? 'border-accent text-accent bg-accent/5'
                        : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-accent/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className='relative w-44 lg:w-52'>
                <svg
                  className='absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
                <input
                  type='search'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Cari artikel...'
                  className='w-full pl-8 pr-2.5 py-1.5 text-xs bg-transparent border border-gray-200 dark:border-gray-700 rounded-sm focus:outline-none focus:border-accent transition-colors text-gray-900 dark:text-white placeholder-gray-400'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daftar Artikel */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 py-8 pb-16'>
        <BlogCardList
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
      </div>
    </div>
  );
}
