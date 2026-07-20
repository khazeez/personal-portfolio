import { about } from '@/mock/personalData';

export default function About() {
  return (
    <div className='py-6 lg:py-10 space-y-4 lg:space-y-5'>
      <h1
        id='about'
        className='lg:text-5xl text-2xl font-bold scroll-mt-24 pb-4 lg:pb-5'
      >
        <span className='relative inline-block'>
          Know{' '}
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
        Me Better!
      </h1>
      <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
        {about.paragraphs}
      </p>
    </div>
  );
}
