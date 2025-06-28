'use client'; // jika kamu pakai Next.js App Router

import { useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'portfolio', 'blog'];

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string>('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: '0px 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='order-1 lg:order-2 sticky top-0 z-30 tracking-widest lg:pb-9'>
      <ul className='flex lg:flex-col lg:gap-3 justify-between mb-10 text-sm text-gray-500'>
        {SECTION_IDS.map((id) => (
          <li
            key={id}
            id={id}
            className={`cursor-pointer transition-colors ${
              activeId === id ? 'text-accent font-semibold' : ''
            }`}
          >
            {id.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
