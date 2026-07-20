import { portfolio } from '@/mock/portfolio';
import Image from 'next/image';

export default function PortfolioList() {
  return (
    <div className='py-6 lg:py-10'>
      <h1
        id='portfolio'
        className='lg:text-5xl text-2xl lg:text-3xl font-bold scroll-mt-24 pb-4 lg:pb-5'
      >
        <span className='relative inline-block'>
          What{' '}
          <svg
            className='absolute -bottom-1.5 left-0 w-full h-3'
            viewBox='0 0 100 12'
            preserveAspectRatio='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0,8 C5,2 10,12 15,8 C20,2 25,12 30,8 C35,2 40,12 45,8 C50,2 55,12 60,8 C65,2 70,12 75,8 C80,2 85,12 90,8 C95,2 100,8'
              fill='none'
              stroke='var(--accent)'
              strokeWidth='2.5'
              strokeLinecap='round'
            />
          </svg>
        </span>{' '}
        I Do
      </h1>

      <div className='divide-y divide-gray-200/50 dark:divide-gray-700/50'>
        {portfolio.map((item) => (
          <div
            key={item.id}
            className='grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-6 py-6 sm:py-8 items-start'
          >
            <div className='relative aspect-video sm:aspect-[4/3] rounded-lg overflow-hidden border border-gray-200/20 dark:border-gray-700/20'>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover'
                priority={item.id === 1}
              />
            </div>

            <div className='space-y-2'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                {item.title}
              </h3>
              <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
                {item.description}
              </p>
              <div className='flex gap-4 pt-1 text-sm'>
                <a
                  href={item.links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent hover:underline underline-offset-2'
                >
                  GitHub &rarr;
                </a>
                <a
                  href={item.links.preview}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent hover:underline underline-offset-2'
                >
                  Preview &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
