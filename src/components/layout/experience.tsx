import { about } from '@/mock/personalData';

export default function Experience() {
  return (
    <div className='py-6 lg:py-10 space-y-6 lg:space-y-8'>
      <h1
        id='experience'
        className='scroll-mt-24 text-2xl lg:text-5xl font-bold'
      >
        <span className='relative inline-block'>
          Experience
          <svg
            className='absolute -bottom-1.5 left-0 w-full h-3'
            viewBox='0 0 160 12'
            preserveAspectRatio='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0,8 C5,2 10,12 15,8 C20,2 25,12 30,8 C35,2 40,12 45,8 C50,2 55,12 60,8 C65,2 70,12 75,8 C80,2 85,12 90,8 C95,2 100,12 105,8 C110,2 115,12 120,8 C125,2 130,12 135,8 C140,2 145,12 150,8 C155,2 160,8'
              fill='none'
              stroke='var(--accent)'
              strokeWidth='2.5'
              strokeLinecap='round'
            />
          </svg>
        </span>
      </h1>

      <div className='space-y-8'>
        {about.experiences.map((exp, idx) => (
          <div key={idx} className='relative pl-6 border-l-2 border-dashed border-accent/30'>
            <div className='absolute -left-[9px] top-1 z-10 h-4 w-4 rounded-full bg-accent ring-[3px] ring-background dark:ring-[#0c0f17]' />

            <div className='space-y-1.5 pl-4'>
              <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3'>
                <h3 className='text-base font-semibold text-gray-900 dark:text-white'>
                  {exp.position}
                </h3>
                <span className='text-xs text-gray-400'>&middot; {exp.company}</span>
              </div>
              <p className='text-xs text-gray-400'>{exp.period}</p>
              <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
                {exp.description.trim()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
