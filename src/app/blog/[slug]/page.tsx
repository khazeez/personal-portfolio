// app/blog/[slug]/page.tsx
import { fetchMockPosts } from '@/components/ui/mockBlogPost';
import { slugify } from '@/components/ui/slugify';
import { notFound } from 'next/navigation';
import Image from 'next/image';

/* ---------- Types ---------- */
type Params = { slug: string };

/* ---------- SSG params ---------- */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await fetchMockPosts();
  return posts.map((p) => ({ slug: slugify(p.title) }));
}

/* ---------- Metadata ---------- */
export async function generateMetadata({ params }: { params: Params }) {
  const posts = await fetchMockPosts();
  const post = posts.find((p) => slugify(p.title) === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.content.slice(0, 150) + '…',
  };
}

/* ---------- Helpers ---------- */
const readingTime = (t: string) =>
  Math.ceil(t.trim().split(/\s+/).length / 200);

/* ---------- Page ---------- */
export default async function BlogDetailPage({ params }: { params: Params }) {
  const posts = await fetchMockPosts();
  const post = posts.find((p) => slugify(p.title) === params.slug);
  if (!post) return notFound();

  /* formatted date */
  const dateStr = new Date(post.timestamp).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  /* fallback hero */
  const heroImage =
    post.image ??
    `https://images.unsplash.com/random/1200x600?sig=${params.slug}`;

  return (
    <article className='mx-auto max-w-4xl space-y-12 px-5 py-16 tracking-wider'>
      {/* ------- Header (title & meta) ------- */}
      <header className='space-y-6 text-center'>
        <h1 className='text-3xl font-extrabold md:text-6xl'>{post.title}</h1>

        {/* meta info */}
        <div className='flex flex-wrap justify-center gap-4 text-sm text-gray-500'>
          <span>{dateStr}</span>
          <span className='hidden sm:inline'>•</span>
          <span>{readingTime(post.content)} min read</span>
        </div>

        {/* categories */}
        <div className='flex flex-wrap justify-center gap-2'>
          {post.category.map((cat) => (
            <span
              key={cat}
              className='rounded-full bg-accent/10 px-3 py-1 text-xs uppercase tracking-wide text-accent'
            >
              {cat}
            </span>
          ))}
        </div>
      </header>

      {/* ------- Hero Image BELOW title ------- */}
      <figure className='relative overflow-hidden rounded-3xl shadow-xl group'>
        {/* image */}
        <Image
          src={heroImage}
          alt={post.title}
          width={1200}
          height={600}
          className='h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105'
          priority
        />
        {/* gradient overlay */}
        <span className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent'></span>
      </figure>

      {/* ------- Content ------- */}
      <section className='prose mx-auto max-w-none dark:prose-invert lg:prose-lg xl:prose-xl'>
        {post.content.split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
    </article>
  );
}
