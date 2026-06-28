import { about } from '@/mock/personalData';

const icons = [
  {
    path: 'M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z',
  },
  {
    path: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
];

export default function Experience() {
  return (
    <div className='tracking-widest py-10 space-y-10'>
      <h1
        id='experience'
        className='scroll-mt-24 text-3xl lg:text-5xl font-bold border-b-4 border-b-accent w-fit'
      >
        Experience
      </h1>

      <div className='relative space-y-8 lg:space-y-12'>
        {about.experiences.map((exp, idx) => (
          <div
            key={idx}
            className='group relative pl-8 lg:pl-12'
          >
            {/* Garis vertikal */}
            <div className='absolute left-[11px] top-3 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/40 to-transparent' />

            {/* Lingkaran ikon */}
            <div className='absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/30 ring-4 ring-background dark:ring-gray-900'>
              <svg
                className='h-3 w-3 text-background'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d={icons[idx % icons.length].path}
                />
              </svg>
            </div>

            {/* Card */}
            <div className='glassmorphin relative overflow-hidden rounded-xl p-5 lg:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-accent/10'>
              {/* Accent bar samping */}
              <div className='absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-accent/40 rounded-l-xl' />

              <div className='space-y-3 pl-2'>
                {/* Header: posisi + perusahaan */}
                <div className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3'>
                  <h3 className='text-lg font-bold text-gray-900 dark:text-white'>
                    {exp.position}
                  </h3>
                  <span className='hidden lg:inline text-gray-300 dark:text-gray-600'>|</span>
                  <span className='text-sm font-medium text-accent'>
                    {exp.company}
                  </span>
                </div>

                {/* Periode */}
                <div className='flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500'>
                  <svg
                    className='h-3.5 w-3.5'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
                    />
                  </svg>
                  {exp.period}
                </div>

                {/* Deskripsi */}
                <p className='text-sm leading-relaxed text-gray-600 dark:text-gray-400'>
                  {exp.description.trim()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
