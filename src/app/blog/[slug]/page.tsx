import { mockBlogPosts } from '@/mock/blog';
import { slugify } from '@/components/ui/slugify';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return mockBlogPosts.map((p) => ({ slug: slugify(p.title) }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const post = mockBlogPosts.find((p) => slugify(p.title) === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.content.slice(0, 150) + '…',
  };
}

const readingTime = (txt: string) =>
  Math.ceil(txt.trim().split(/\s+/).length / 200);

export default async function BlogDetailPage({
  params,
}: {
  params: Params;
}) {
  const post = mockBlogPosts.find((p) => slugify(p.title) === params.slug);
  if (!post) return notFound();

  const date = new Date(post.timestamp).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='min-h-screen bg-background'>
      {/* Breadcrumb */}
      <div className='border-b border-gray-100 dark:border-gray-800'>
        <div className='max-w-3xl mx-auto px-5 lg:px-0 py-3'>
          <Link
            href='/blog'
            className='text-xs text-gray-400 hover:text-accent transition-colors'
          >
            &larr; Kembali ke Blog
          </Link>
        </div>
      </div>

      <article className='max-w-3xl mx-auto px-5 lg:px-0 py-12 lg:py-16'>
        {/* Header */}
        <header className='space-y-4 pb-8 border-b border-gray-100 dark:border-gray-800'>
          {/* Categories */}
          <div className='flex flex-wrap gap-1.5'>
            {post.category.map((cat) => (
              <span
                key={cat}
                className='text-[11px] px-2 py-0.5 border border-accent/30 text-accent rounded-sm'
              >
                {cat}
              </span>
            ))}
          </div>

          <h1 className='text-2xl lg:text-4xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white'>
            {post.title}
          </h1>

          <div className='flex flex-wrap items-center gap-2 text-xs text-gray-400 dark:text-gray-500'>
            <time>{date}</time>
            <span className='text-gray-300 dark:text-gray-600'>/</span>
            <span>{readingTime(post.content)} menit baca</span>
          </div>
        </header>

        {/* Content */}
        <section className='py-8 space-y-5 text-sm lg:text-base leading-[1.8] text-gray-600 dark:text-gray-400'>
          {post.content.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* Footer */}
        <div className='pt-8 border-t border-gray-100 dark:border-gray-800'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-accent transition-colors'
          >
            &larr; Kembali ke Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
