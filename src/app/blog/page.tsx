'use client';

import { useState } from 'react';
import SearchBar from '@/components/ui/searchBar';
import BlogCardList from './ui/blogCard';

const allCategories = ['Frontend', 'Backend', 'Security', 'Automation Test'];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (cat: string | null) => {
    setSelectedCategory(cat);
  };

  return (
    <div className=''>
      <div className='h-35 lg:py-10 lg:h-80 w-screen bg-accent-animated text-background font-bold text-center text-2xl'>
        <span className='lg:text-[300px] text-8xl'>Let&apos;s</span>
        <p className='lg:inline'>Learn With Me!</p>
      </div>

      <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-4 lg:px-20 px-5 py-10'>
        <div className='flex flex-wrap gap-2 lg:flex-nowrap'>
          <button
            type='button'
            onClick={() => setSelectedCategory(null)}
            className={`glassmorphin p-1 px-2 transition-opacity ${
              !selectedCategory ? 'ring-2 ring-accent' : ''
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
              className={`glassmorphin p-1 px-2 transition-opacity hover:opacity-80 ${
                selectedCategory === cat ? 'ring-2 ring-accent' : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='w-full lg:w-100'>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>

      <div className='lg:px-10 p-5'>
        <BlogCardList
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
      </div>
    </div>
  );
}
