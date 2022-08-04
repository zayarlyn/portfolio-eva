import { motion } from 'framer-motion';
import Ripple from './Ripple';

function BgSwords() {
  return (
    <div className='screen fixed top-12 flex w-full items-center'>
      <motion.div className='relative h-screen w-1/2'>
        {[1, 2, 3, 4, 5].map((e, i) => (
          <motion.div
          key={i}
            style={{ position: 'absolute', top: 100 - 30 * i, left: 4 + 5 * i + 'rem', scale: 1 - .5 * i }}
          >
            <motion.div style={{ overflow: 'hidden' }}>
              <motion.img
                initial={{ translateY: '100%' }}
                animate={{ translateY: 0, transition: { duration: 1.8, delay: 0.1 * i } }}
                style={{ rotateY: 180, opacity: 0.8, filter: `brightness(${100 - 5 * i+'%'})` }}
                src='/sword.svg'
                alt='sword'
              />
            </motion.div>
            <Ripple />
          </motion.div>
        ))}
      </motion.div>

      <div className='relative h-screen w-1/2'>
        <motion.div style={{ position: 'absolute', top: -20, right: '24rem' }}>
          <motion.div style={{ overflow: 'hidden', scale: 0.8, translateY: '0' }}>
            <motion.img
              initial={{ translateY: '100%' }}
              animate={{ translateY: 0, transition: { duration: 1.8, delay: 0.8 } }}
              style={{ filter: 'brightness(80%)' }}
              src='/sword.svg'
              alt='sword'
            />
          </motion.div>
          {/* <Ripple /> */}
        </motion.div>
        <motion.div style={{ position: 'absolute', top: -40, right: '19rem' }}>
          <motion.div style={{ overflow: 'hidden', scale: 0.85, translateY: '8%' }}>
            <motion.img
              initial={{ translateY: '100%' }}
              animate={{ translateY: 0, transition: { duration: 1.8, delay: 0.6 } }}
              style={{ opacity: 0.85, filter: 'brightness(85%)' }}
              src='/sword.svg'
              alt='sword'
            />
          </motion.div>
          {/* <Ripple /> */}
        </motion.div>
        <motion.div style={{ position: 'absolute', top: -0, right: '14rem' }}>
          <motion.div style={{ overflow: 'hidden', scale: 0.9, translateY: '8%' }}>
            <motion.img
              initial={{ translateY: '100%' }}
              animate={{ translateY: 0, transition: { duration: 1.8, delay: 0.4 } }}
              style={{ opacity: 0.9, filter: 'brightness(90%)' }}
              src='/sword.svg'
              alt='sword'
            />
          </motion.div>
          {/* <Ripple /> */}
        </motion.div>
        <motion.div style={{ position: 'absolute', top: 40, right: '9rem' }}>
          <motion.div style={{ overflow: 'hidden', scale: 0.95, translateY: '8%' }}>
            <motion.img
              initial={{ translateY: '100%' }}
              animate={{ translateY: 0, transition: { duration: 1.8, delay: 0.2 } }}
              style={{ opacity: 0.95, filter: 'brightness(95%)' }}
              src='/sword.svg'
              alt='sword'
            />
          </motion.div>
          {/* <Ripple /> */}
        </motion.div>
        <motion.div style={{ position: 'absolute', top: 120, right: '4rem' }}>
          <motion.div style={{ overflow: 'hidden' }}>
            <motion.img
              initial={{ translateY: '100%' }}
              animate={{ translateY: 0, transition: { duration: 1.8 } }}
              style={{}}
              src='/sword.svg'
              alt='sword'
            />
          </motion.div>
          {/* <Ripple /> */}
        </motion.div>
      </div>
    </div>
  );
}

export default BgSwords;
