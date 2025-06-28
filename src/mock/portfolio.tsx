// src/data/portfolio.ts
// --------------------------------------------------
// Mock data: 4 portfolio items
type Link = {
  github: string;
  preview: string;
};

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  links: Link;
}

// helper: Unsplash tech placeholder by signature
const img = (sig: number) =>
  `https://source.unsplash.com/featured/900x600?project,code,ui&sig=${sig}`;

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: 'Next.js SaaS Landing Page',
    description:
      'Landing page dinamis dengan Tailwind dan animasi Framer Motion.',
    image: '/p1.jpeg',
    links: {
      github: 'https://github.com/username/nextjs-saas-landing',
      preview: 'https://saas-landing.vercel.app/',
    },
  },
  {
    id: 2,
    title: 'Blockchain Explorer Mini',
    description: 'Aplikasi React yang menampilkan transaksi dan blok Ethereum.',
    image: '/p2.jpeg',
    links: {
      github: 'https://github.com/username/blockchain-explorer-mini',
      preview: 'https://explorer-mini.netlify.app/',
    },
  },
  {
    id: 3,
    title: 'DeFi Dashboard',
    description:
      'Dashboard analitik DeFi dengan grafik real‑time dan wallet connect.',
    image: '/p3.jpeg',
    links: {
      github: 'https://github.com/username/defi-dashboard',
      preview: 'https://defi-dash.app/',
    },
  },
  {
    id: 4,
    title: 'AI Image Generator UI',
    description:
      'Frontend sederhana untuk menghasilkan gambar menggunakan OpenAI DALL·E.',
    image: '/p4.jpeg',
    links: {
      github: 'https://github.com/username/ai-image-generator-ui',
      preview: 'https://ai-imager.vercel.app/',
    },
  },
];
