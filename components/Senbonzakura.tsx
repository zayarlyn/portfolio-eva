import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Ripple from './Ripple';

const Senbonzakura = ({ count, reverse }: { count: number; reverse?: boolean }) => {
  // const [y, setY] = useState(0);
  const { scrollYProgress } = useScroll();


  return (
    <motion.div
      className='grid auto-cols-[90px] grid-flow-col items-center'
      style={{ rotateY: reverse ? 180 : 0 }}
    >
      {Array(count)
        .fill(0)
        .map((e, i) => (
          <motion.div
            className=''
            style={{
              scale: 1 - 0.2 * i,
              translateY: scrollYProgress
            }}
            key={i}
          >
            <motion.div style={{ overflowY: 'hidden' }}>
              <motion.img
                initial={{ translateX: 0, translateY: '100%' }}
                animate={{
                  translateY: 0,
                  // translateX: [-20, 0],
                  transition: { duration: 2, delay: 0.5 * (i + 1) },
                }}
                style={{
                  filter: `brightness(${100 - 10 * i + '%'})`,
                  // translateY: scrollYProgress
                  // ...(y !== 0.0 && { translateY: y*100+'%' }),
                }}
                transition={{duration: .1}}
                src='/sword.svg'
                alt=''
              />
            </motion.div>
            <Ripple />
            {/* {y === 0 ? 'true' : 'false'} */}
          </motion.div>
        ))}
    </motion.div>
  );
};

export default Senbonzakura;
// y * 400*(count-i) + 'px'
