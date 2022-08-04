import {motion} from 'framer-motion';
import Ripple from './Ripple';

function Miracle() {
  return (
    <motion.div className='relative h-screen w-1/2'>
      {[1, 2, 3, 4, 5].map((e, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: 100 - 30 * i,
            left: 4 + 5 * i + 'rem',
            scale: 1 - 0.5 * i,
          }}
        >
          <motion.div style={{ overflow: 'hidden' }}>
            <motion.img
              initial={{ translateY: '100%' }}
              animate={{ translateY: 0, transition: { duration: 1.8, delay: 0.1 * i } }}
              style={{ rotateY: 180, opacity: 0.8, filter: `brightness(${100 - 5 * i + '%'})` }}
              src='/sword.svg'
              alt='sword'
            />
          </motion.div>
          <Ripple />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Miracle;
