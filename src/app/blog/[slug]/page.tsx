import { mockBlogPosts } from '@/mock/blog';
import { slugify } from '@/components/ui/slugify';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type Params = { slug: string };

/* ------------------------------------------------------------------ */
/*  Static Params (SSG)                                               */
/* ------------------------------------------------------------------ */
export function generateStaticParams(): Params[] {
  return mockBlogPosts.map((p) => ({ slug: slugify(p.title) }));
}

/* ------------------------------------------------------------------ */
/*  Metadata (SEO)                                                    */
/* ------------------------------------------------------------------ */
export async function generateMetadata({ params }: { params: Params }) {
  const post = mockBlogPosts.find((p) => slugify(p.title) === params.slug);
  if (!post) return {};

  const image =
    post.image ?? `https://images.unsplash.com/random/800x420?sig=${params.slug}`;

  return {
    title: post.title,
    description: post.content.slice(0, 150) + '…',
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 150) + '…',
      images: [{ url: image, width: 800, height: 420, alt: post.title }],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Helper Function                                                   */
/* ------------------------------------------------------------------ */
const readingTime = (txt: string) =>
  Math.ceil(txt.trim().split(/\s+/).length / 200);

/* ------------------------------------------------------------------ */
/*  Page Component                                                    */
/* ------------------------------------------------------------------ */
export default async function BlogDetailPage({
  params,
}: {
  params: Params;
}) {
  const post = mockBlogPosts.find((p) => slugify(p.title) === params.slug);
  if (!post) return notFound();

  const date = new Date(post.timestamp).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const img =
    post.image ?? `https://images.unsplash.com/random/1200x600?sig=${params.slug}`;

  return (
    <article className="mx-auto max-w-4xl px-5 md:px-8 lg:px-0 py-16 space-y-10">
      {/* Hero */}
      <figure className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-lg">
        <Image
          src={img}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
          priority
        />
      </figure>

      {/* Heading */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{date}</span>
          <span className="hidden sm:inline">•</span>
          <span>{readingTime(post.content)} min read</span>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 ml-auto">
            {post.category.map((cat) => (
              <span
                key={cat}
                className="text-xs uppercase tracking-wide font-normal rounded-full px-3 py-1 bg-accent/10 text-accent dark:bg-accent/20"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Divider */}
      <hr className="border-dashed border-gray-300 dark:border-gray-700" />

      {/* Content */}
      <section className="prose dark:prose-invert lg:prose-lg xl:prose-xl max-w-none">
        {post.content.split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
    </article>
  );
}
