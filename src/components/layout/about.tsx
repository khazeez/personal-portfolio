import { about } from '@/mock/personalData';
import Glassmorphin from '../ui/glassmorphin';

export default function About() {
  return (
    <div className='tracking-widest gap-y-5 py-10 space-y-5'>
      <h1 id='about' className='lg:text-5xl text-3xl font-bold scroll-mt-24'>
        Know me better!
      </h1>
      <Glassmorphin className='p-4 z-10'>
        <p className=' tracking-wider text-normal'>{about.paragraphs}</p>
      </Glassmorphin>
    </div>
  );
}
