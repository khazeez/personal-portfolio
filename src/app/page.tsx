import About from '@/components/layout/about';
import Hero from '@/components/layout/sidebar';
import BlogList from '@/components/layout/blogList';
import PortfolioList from '@/components/layout/portfolioList';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div
      className="
        max-w-screen-xl mx-auto       /* lebar maksimal & auto‑center */
        px-5 lg:px-10                 /* padding kiri‑kanan */
        grid gap-x-8 gap-y-10         /* jarak antar‑kolom & antar‑row */
        lg:grid-cols-5                /* 1 kolom di mobile, 5 kolom ≥ lg */
      "
    >
      {/* === SIDEBAR ===================================================== */}
      <aside
        className="
          lg:col-span-2               /* ambil 2 kolom di desktop */
          lg:sticky lg:top-0          /* selalu terlihat saat scroll */
          lg:h-screen                 /* penuh tinggi layar */
          lg:px-0
        "
      >
        <Hero />
      </aside>

      {/* === KONTEN ====================================================== */}
      <main
        className="
          space-y-10                  /* jarak antar‑section */
          lg:col-span-3 lg:col-start-3/* mulai di kolom‑3, ambil 3 kolom */
          lg:p-10
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
