import Glassmorphin from '../ui/glassmorphin';
import { mockBlogPosts } from '@/mock/blog';
import Link from 'next/link'; // Next.js <Link>

export default function BlogList() {
  // Ambil hanya 5 data teratas
  const posts = mockBlogPosts.slice(0, 5);

  return (
    <div className='tracking-widest gap-y-5 item-center py-10 space-y-10'>
      <h1
        id='blog'
        className='lg:text-5xl text-3xl font-bold border-b-accent border-b-4 w-15 scroll-mt-24'
      >
        Writing
      </h1>


      {/* Timeline */}
      <ol className='relative border-s border-gray-200 dark:border-gray-700 ml-4'>
        {posts.map((post, idx) => {
          const snippet =
            post.content.length > 180
              ? `${post.content.slice(0, 180)}…`
              : post.content;

          return (
            <li key={post.title} className='mb-10 ms-6'>
              {/* Titik timeline */}
              <span className='absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-4 ring-blue-400/40 ring-offset-0 bg-accent'>
                <svg
                  className='w-2.5 h-2.5 text-background dark:text-background'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                </svg>
              </span>

              <h3 className='flex flex-wrap items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                {post.title}
                {idx === 0 && (
                  <span className='text-background text-sm font-medium ms-3 px-2.5 py-0.5 rounded-sm bg-accent dark:text-background'>
                    Latest
                  </span>
                )}
              </h3>

              <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                {new Date(post.timestamp).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>

              <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                {snippet}
              </p>

              {/* Badge kategori */}
              <div className='flex flex-wrap gap-2'>
                {post.category.map((cat) => (
                  <span
                    key={cat}
                    className='text-xs font-medium glassmorphin text-accent dark:text-accent px-2 py-0.5 rounded-sm'
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </li>
          );
        })}
      </ol>

      {/* Tombol See more */}
      <div className='flex pt-6'>
        <Link
          href='/blog'
          className='inline-flex px-6 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
        >
          See more
        </Link>
      </div>
    </div>
  );
}
