'use client';

import { profile, about } from '@/mock/personalData';
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import React, { useCallback, useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'portfolio', 'experience', 'blog'] as const;
type SectionId = (typeof SECTION_IDS)[number];

const navIcons: Record<SectionId, React.ReactNode> = {
  about: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4'>
      <path d='M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z' />
    </svg>
  ),
  portfolio: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4'>
      <path d='M3 4.25A2.25 2.25 0 0 1 5.25 2h9.5A2.25 2.25 0 0 1 17 4.25v.19l-6.58 2.575a2.25 2.25 0 0 1-1.84 0L3 4.44v-.19Z' />
      <path d='M3 7.045v7.705c0 .621.504 1.125 1.125 1.125h11.75c.621 0 1.125-.504 1.125-1.125V7.045l-5.823 2.278a3.75 3.75 0 0 1-3.154 0L3 7.045Z' />
    </svg>
  ),
  experience: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4'>
      <path fillRule='evenodd' d='M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z' clipRule='evenodd' />
    </svg>
  ),
  blog: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4'>
      <path d='M3.196 12.87l-.825.483a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .758 0l7.25-4.25a.75.75 0 0 0 0-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 0 1-2.276 0L3.196 12.87Z' />
      <path d='M3.196 8.87l-.825.483a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .758 0l7.25-4.25a.75.75 0 0 0 0-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 0 1-2.276 0L3.196 8.87Z' />
      <path d='M10.38 1.103a.75.75 0 0 0-.76 0l-7.25 4.25a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .76 0l7.25-4.25a.75.75 0 0 0 0-1.294l-7.25-4.25Z' />
    </svg>
  ),
};

export default function Hero() {
  const [activeId, setActiveId] = useState<SectionId>('about');
  const [scrolled, setScrolled] = useState(false);

  const iconClass =
    'transition-all duration-300 hover:-translate-y-0.5 text-gray-400 hover:text-accent';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible && SECTION_IDS.includes(visible.target.id as SectionId)) {
          setActiveId(visible.target.id as SectionId);
        }
      },
      {
        root: null,
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  const SidebarLink = React.memo(({ id }: { id: SectionId }) => {
    const isActive = activeId === id;

    return (
      <li>
        <button
          type='button'
          onClick={() => handleClick(id)}
          tabIndex={0}
          aria-current={isActive ? 'page' : undefined}
          className={`
            group w-full text-left text-xs tracking-[0.2em]
            transition-all duration-700 ease-[cubic-bezier(.33,1,.68,1)]
            ${isActive ? 'text-accent' : 'text-gray-500 hover:text-gray-300'}
          `}
        >
          <span className='flex flex-col lg:flex-row items-center gap-1 lg:gap-3 py-1'>
            {/* Ikon — hanya mobile */}
            <span className='lg:hidden'>
              {navIcons[id]}
            </span>
            {/* Garis — hanya desktop */}
            <span className='relative hidden lg:inline-flex items-center'>
              <span
                className={`inline-block h-px transition-all duration-700 ease-[cubic-bezier(.33,1,.68,1)] ${
                  isActive ? 'w-8 bg-accent' : 'w-4 bg-gray-600 group-hover:w-6'
                }`}
              />
              <span
                className={`absolute right-0 h-px bg-accent transition-all duration-700 ease-[cubic-bezier(.33,1,.68,1)] ${
                  isActive
                    ? 'w-0 opacity-0'
                    : 'w-0 opacity-0 group-hover:w-2 group-hover:opacity-100'
                }`}
              />
            </span>
            <span className='text-[9px] lg:text-xs'>{id.toUpperCase()}</span>
          </span>
        </button>
      </li>
    );
  });
  SidebarLink.displayName = 'SidebarLink';

  return (
    <section className='relative flex flex-col lg:justify-between lg:h-screen lg:py-12 gap-5 lg:gap-8 pt-5 lg:pt-0 px-5 lg:px-12'>
      {/* Nav mobile — selalu terlihat setelah scroll dikit */}
      <nav
        className={`
          fixed inset-x-0 bottom-0 z-30 tracking-widest order-1 lg:order-2 lg:static
          transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
          flex items-center justify-center
          ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
          lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto
          lg:bg-transparent lg:pb-48
        `}
      >
        <ul className='flex lg:flex-col lg:gap-2 justify-between px-4 py-2.5 w-full max-w-md mx-auto bg-background/90 backdrop-blur-xl border-t border-accent/10 shadow-[0_-4px_30px_rgba(0,0,0,0.2)] lg:bg-transparent lg:border-none lg:shadow-none lg:max-w-none'>
          {SECTION_IDS.map((id) => (
            <SidebarLink key={id} id={id} />
          ))}
        </ul>
      </nav>

      {/* Profile */}
      <div className='order-2 lg:order-1 space-y-3 lg:space-y-6 lg:pt-16'>
        <div className='space-y-0.5'>
          <h1 className='text-xl lg:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-500'>
            {profile.name}
          </h1>
          <p className='text-xs lg:text-sm text-gray-400 transition-colors duration-500'>
            {profile.role}
          </p>
        </div>

        <p className='text-xs lg:text-sm leading-relaxed text-gray-500 dark:text-gray-400 transition-colors duration-500'>
          {about.headline}
        </p>
      </div>

      {/* Social */}
      <div className='order-3 pb-4 lg:pb-0'>
        <div className='flex gap-3 lg:gap-4'>
          <a href={profile.socials.twitter} target='_blank' rel='noopener noreferrer' className='transition-transform duration-300 hover:scale-110'>
            <FaTwitter size={16} className={iconClass} />
          </a>
          <a href={profile.socials.github} target='_blank' rel='noopener noreferrer' className='transition-transform duration-300 hover:scale-110'>
            <FaGithub size={16} className={iconClass} />
          </a>
          <a href={profile.socials.linkedin} target='_blank' rel='noopener noreferrer' className='transition-transform duration-300 hover:scale-110'>
            <FaLinkedin size={16} className={iconClass} />
          </a>
          <a href={`mailto:${profile.socials.email}`} className='transition-transform duration-300 hover:scale-110'>
            <FaEnvelope size={16} className={iconClass} />
          </a>
          <a
            href={`https://wa.me/${profile.socials.wa.replace(/[^0-9]/g, '')}`}
            target='_blank'
            rel='noopener noreferrer'
            className='transition-transform duration-300 hover:scale-110'
          >
            <FaWhatsapp size={16} className={iconClass} />
          </a>
        </div>
      </div>
    </section>
  );
}
