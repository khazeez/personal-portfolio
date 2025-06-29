
// 1. Tipe sosial-media
export interface Socials {
  twitter: string;
  github: string;
  linkedin: string;
  discord: string;
  email: string;
  wa: string;
}

// 2. Tipe data personal
export interface PersonalProfile {
  name: string;
  profilePic: string;
  role: string;
  desc: string;
  socials: Socials;
}

// 3. Data mock personal
export const profile: PersonalProfile = {
  name: 'Khoirul Aziz',
  profilePic: '/vercel.svg',
  role: 'Software Engineer',
  desc: 'I build web aplication',
  socials: {
    twitter: 'https://twitter.com/aziz_dev',
    github: 'https://github.com/khazeez',
    linkedin: 'httpslinkedin.com/in/khoirul-aziz',
    discord: 'Aziz#1234',
    email: 'eeroel99@gmail.com',
    wa: '+6285784483657',
  },
};

// src/data/about.ts
// --------------------------------------------------
// Tipe dasar
export interface Experience {
    company: string;
    position: string;
    period: string;      // mis. "2023 – Sekarang"
    description: string;
  }
  
  export interface AboutData {
    headline: string;    // kalimat singkat di hero/about
    paragraphs: string[]; // bio panjang (beberapa paragraf)
    experiences: Experience[];
    skills: string[];
  }
  
  // Mock content
  export const about: AboutData = {
    headline: 'Automation | Blockchain | DeFi | AI',
    paragraphs: [
      "I’m an Automation Engineer with a strong focus on building reliable testing systems and streamlining development workflows. As a freelance Software Engineer, I work across various tech stacks to deliver efficient and scalable solutions for clients. I'm also a passionate blockchain enthusiast, constantly exploring smart contracts, decentralized applications, and the future of Web3. With a blend of automation expertise and curiosity in emerging technologies, I enjoy solving complex problems and bringing high-impact ideas to life.",
    ],
    experiences: [
      {
        company: 'PT. Kreasi Digital Nusantara',
        position: 'Senior Full-stack Developer',
        period: '2023 – Sekarang',
        description:
          'Memimpin tim kecil membangun platform e-commerce skala nasional \
          menggunakan Next.js, NestJS, dan PostgreSQL. \
          Berhasil meningkatkan TTI (Time-to-Interactive) hingga 35 %.',
      },
      {
        company: 'Freelance',
        position: 'Web & Blockchain Engineer',
        period: '2020 – 2023',
        description:
          'Mengembangkan lebih dari 15 proyek web-app dan kontrak ERC-20/ERC-721 \
          untuk klien global, termasuk integrasi IPFS dan Pinata.',
      },
    ],
    skills: [
      'JavaScript / TypeScript',
      'React / Next.js',
      'Node.js (NestJS, Express)',
      'Tailwind CSS',
      'Solidity & Hardhat',
      'PostgreSQL / MongoDB',
      'CI/CD & Docker',
      'REST / GraphQL API',
    ],
  };
  