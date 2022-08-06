import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
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
        .map((e, i) => {
          return (
            <motion.div
              className=''
              style={{
                marginLeft: i === 1 ? 5 : 0,
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
                    transition: { duration: 1.8, delay: 0.4 * (i + 1) },
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
          );
        })}
    </motion.div>
  );
};

export default Senbonzakura;

const staggerSword = (v: number, i: number) => {
  const t = v - (2 - i) * 15;
  return (t < 0 ? 0 : t > 100 ? 100 : t) + '%';
};

const staggerRipple = (v: number, i: number) => {
  const t = v - (2 - i) * 30 + (i === 1 ? 10 : 0);
  return t < 0 ? 0 : t > 100 ? 100 : t + 'px';
};
