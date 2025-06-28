import Image from 'next/image';
import About from '@/components/layout/about';
import Hero from '@/components/layout/sidebar';
import BlogList from '@/components/layout/blogList';
import PortfolioList from '@/components/layout/portfolioList';
import Footer from '@/components/layout/footer';
import Experience from '@/components/layout/experience';

export default function Home() {
  return (
    <>
      <div className='container grid grid-cols-4 lg lg:h-screen mx-auto'>
        <div className=' lg:col-span-1 col-span-4'>
          <Hero />
        </div>
        <div className=' lg:col-span-3 col-span-4 overflow-y-auto mx-auto p-5 lg:px-20'>
          <div className=''>
            <About />
          </div>
          {/* <div className="">
            <Experience />
          </div> */}
          <div className=''>
            <PortfolioList />
          </div>
          <div className='lg:px-5'>
            <BlogList />
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
