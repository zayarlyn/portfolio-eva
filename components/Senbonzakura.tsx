import { motion } from 'framer-motion';
import Ripple from './Ripple';

const Senbonzakura = ({ count, reverse }: { count: number; reverse?: boolean }) => {
  return (
    <div className={`grid auto-cols-[90px] items-center grid-flow-col ${reverse ? 'rotate-180' : ''}`}>
      {Array(count)
        .fill(0)
        .map((e, i) => (
          <motion.div className='' style={{ scale: 1 - 0.2 * i }} key={i}>
            <motion.div style={{ overflow: 'hidden' }}>
              <motion.img
                initial={{ translateY: '100%' }}
                animate={{ translateY: 0, transition: { duration: 1.8, delay: 0.3 * i } }}
                style={{ filter: `brightness(${100 - 10 * i + '%'})` }}
                src='/sword.svg'
                alt=''
              />
            </motion.div>
            <Ripple />
          </motion.div>
        ))}
    </div>
  );
};

export default Senbonzakura;
