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
import Image from 'next/image';

const SECTION_IDS = ['about', 'portfolio', 'blog'] as const;
type SectionId = (typeof SECTION_IDS)[number];

export default function Hero() {
  const [activeId, setActiveId] = useState<SectionId>('about');
  const [scrolled, setScrolled] = useState(false);

  const iconClass = 'transition-transform hover:-translate-y-1 opacity-60 hover:opacity-100';

  /* ────────── ScrollSpy ────────── */
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

  /* ────────── Scroll detect ────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ────────── Smooth scroll on click ────────── */
  const handleClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  /* ────────── Sidebar link ────────── */
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
            block text-left
            transition-all duration-800
            ease-[cubic-bezier(.33,1,.68,1)]
            ${
              isActive
                ? 'text-accent font-semibold translate-x-2'
                : 'text-gray-500 translate-x-0'
            }
          `}
        >
          {id.toUpperCase()}
        </button>
      </li>
    );
  });
  SidebarLink.displayName = 'SidebarLink';

  /* ────────── UI Layout ────────── */
  return (
    <section className='flex flex-col lg:justify-between lg:h-screen lg:py-10 gap-6 pt-7 lg:pt-0 px-5 lg:px-10'>
      {/* Navbar */}
      <nav
        className={`
              fixed inset-x-0 bottom-0 z-30 tracking-widest order-1 lg:order-2 lg:static
              transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
              ${
                scrolled
                  ? 'opacity-100 translate-y-0 bg-background/80 backdrop-blur items-center justify-center'
                  : 'opacity-0 translate-y-full pointer-events-none'
              }
              lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto
              lg:bg-transparent lg:backdrop-blur-none lg:pb-40
            `}
      >
        <ul className='flex lg:flex-col lg:gap-3 justify-between px-5 py-2 text-sm'>
          {SECTION_IDS.map((id) => (
            <SidebarLink key={id} id={id} />
          ))}
        </ul>
      </nav>

      {/* Profil */}
      <div className='order-2 lg:order-1 leading-7 tracking-wider space-y-3 lg:pt-20'>
        <div className=''>
          <div className=' space-y-3'>
            <h1 className='text-4xl font-bold '>{profile.name}</h1>
            <p className='text-xl'>{profile.role}</p>
          </div>
        </div>

        <p className='mt-3 text-gray-600'>{about.headline}</p>
      </div>

      {/* Ikon sosial */}
      <div className='order-3 flex gap-5 pt-3 pb-20 bg-red'>
        <a
          href={profile.socials.twitter}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter size={22} className={iconClass} />
        </a>
        <a
          href={profile.socials.github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub size={22} className={iconClass} />
        </a>
        <a
          href={profile.socials.linkedin}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin size={22} className={iconClass} />
        </a>
        <a href={`mailto:${profile.socials.email}`}>
          <FaEnvelope size={22} className={iconClass} />
        </a>
        <a
          href={`https://wa.me/${profile.socials.wa.replace(/[^0-9]/g, '')}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaWhatsapp size={22} className={iconClass} />
        </a>
      </div>
      {/* <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute inset-20 rounded-full bg-accent/10 blur-3xl' />
      </div> */}
      <div className="" id='mouse-glow'></div>
    </section>
  );
}
