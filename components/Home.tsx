import { motion, useScroll, useViewportScroll } from 'framer-motion';
import Ripple from './Ripple';
import Intro from './Intro';
import Senbonzakura from './Senbonzakura';
import { useEffect, useRef, useState } from 'react';

const customY = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  if (!ref.current) return 0;
  const pos = ref.current.getBoundingClientRect().bottom;
  return ((759 - pos) / 5) | 0;
};

function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: yProgress } = useScroll({});
  const [y, setY] = useState(0);
  useEffect(() => yProgress.onChange(() => setY(customY(ref))), []);

  return (
    <motion.div
      ref={ref}
      className='relative mx-8 grid h-[calc(100vh-92px)] w-[100%] grow grid-cols-[auto_1fr_auto]'
    >
      <Senbonzakura y={y} count={3} />
      <Intro />
      <Senbonzakura y={y} count={3} reverse />
    </motion.div>
  );
}

export default Home;
