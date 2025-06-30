import Image from 'next/image';
import About from '@/components/layout/about';
import Hero from '@/components/layout/sidebar';
import BlogList from '@/components/layout/blogList';
import PortfolioList from '@/components/layout/portfolioList';
import Footer from '@/components/layout/footer';
import Experience from '@/components/layout/experience';

export default function Home() {
  return (
    <div className="lg:flex mx-auto gap-10">               {/* 1. pakai flex di layar besar */}
      {/* === SIDEBAR ===================================================== */}
      <aside
        className="
          w-full                   
          lg:fixed lg:inset-y-0 lg:left-0
          lg:h-screen
          px-6 py-8 lg:pl-10
        "
      >
        <Hero />
      </aside>

      {/* === KONTEN ====================================================== */}
      <main
        className="
          w-full                  /* sisa ruang 3 kolom         */
          lg:ml-[25%]                       /* geser supaya tdk ketutup   */
          px-5 lg:px-30                     /* padding                    */
          space-y-16                        /* jarak antar‑section        */
          lg:py-15
        "
      >
        <About />

        {/* <Experience /> */}

        <PortfolioList />
        <BlogList />
        <Footer />
      </main>
    </div>
  );
}
