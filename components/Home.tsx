import { motion } from 'framer-motion';
import Ripple from './Ripple';
import Intro from './Intro';
import Senbonzakura from './Senbonzakura';

function Home() {
  return (
    <div className='relative mx-8 my-6 grid w-[100%] grow grid-cols-[auto_1fr_auto]'>
      <Senbonzakura count={3} />
      <Intro />
      <Senbonzakura count={3} reverse />
    </div>
  );
}

export default Home;
