import { motion } from 'framer-motion';

function Intro() {
  return (
    <>
      <h1 className='mt-44 w-[35%] text-center text-5xl font-semibold'>
        {['Self-driven developer', 'who loves to explore', 'new technologies'].map((t) => (
          <motion.span style={{ overflow: 'hidden', display: 'block' }}>
            <motion.span
              initial={{ translateY: '100%' }}
              animate={{ translateY: 0, transition: { duration: 0.8, delay: 0.2 } }}
              style={{ display: 'block' }}
            >
              {t}
            </motion.span>
          </motion.span>
        ))}
      </h1>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        className='mt-12 rounded-md border-2 border-black px-5 py-1'
      >
        Explore Projects
      </motion.button>
    </>
  );
}

export default Intro;