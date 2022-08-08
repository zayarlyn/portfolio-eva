import { motion } from 'framer-motion';
import Ripple from './Ripple';

interface Props {
  y: number;
  count: number;
  reverse?: boolean;
}

const Senbonzakura = ({ y, count, reverse }: Props) => {
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
              ...(y > 0 && { y: staggerRipple(y, i) }),
            }}
            key={i}
          >
            <motion.div style={{ overflowY: 'hidden' }}>
              <motion.img
                initial={{ translateX: 0, translateY: '100%' }}
                animate={{
                  translateY: 0,
                  transition: { duration: 1.4, delay: 0.4 * (i + 1) },
                }}
                style={{
                  filter: `brightness(${100 - 10 * i + '%'})`,
                  ...(y > 0 && { y: staggerSword(y, i) }),
                }}
                transition={{ duration: 0.1 }}
                src='/sword.svg'
                alt=''
              />
            </motion.div>
            <Ripple />
          </motion.div>
        ))}
    </motion.div>
  );
};

export default Senbonzakura;

const staggerSword = (v: number, i: number) => {
  const t = v - (2 - i) * 15;
  return Math.max(0, Math.min(100, t)) + '%';
};

const staggerRipple = (v: number, i: number) => {
  const t = v - (2 - i) * 25 + (i === 1 ? -5 : 0);
  return Math.max(0, Math.min(34 + i*20, t)) + 'px';
};
