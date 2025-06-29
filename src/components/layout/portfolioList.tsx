import { portfolio } from '@/mock/portfolio';
import Image from 'next/image';

export default function PortfolioList() {
  return (
    <div className='gap-y-5 py-10'>
      <h1
        id='portfolio'
        className='lg:text-5xl text-3xl font-bold scroll-mt-24 pb-5'
      >
        <span className='border-b-accent border-b-4 w-1'>What </span>I Do
      </h1>

      <section className='grid grid-cols-1 gap-8 py-5 sm:grid-cols-2 lg:grid-cols-2'>
        {portfolio.map((item) => (
          /* group = parent state hover */
          <article
            key={item.id}
            className='group overflow-hidden rounded-xl shadow'
          >
            {/* aspect-video agar rasio proporsional; ubah sesuai kebutuhan */}
            <div className='relative aspect-video'>
              <Image
                src={item.image}
                alt={item.title}
                fill /* isi kontainer */
                className='object-cover transition-transform duration-500
                           group-hover:scale-110 group-active:scale-100'
                priority={item.id === 1}
              />
            </div>

            <div className='space-y-2 p-4'>
              <h3 className='text-lg font-semibold'>{item.title}</h3>
              <p className='text-normal text-gray-500'>{item.description}</p>

              <div className='flex gap-4 text-sm text-accent'>
                <a
                  href={item.links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  GitHub&nbsp;→
                </a>
                <a
                  href={item.links.preview}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  Preview&nbsp;→
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
