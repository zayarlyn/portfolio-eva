import { motion } from 'framer-motion';

const Bankai = () => {
  return (
    <div className='fixed top-1/2 left-1/2 flex -translate-y-1/2 -translate-x-1/2 overflow-hidden text-7xl font-medium text-white'>
      {'Bankai'.split('').map((c, i) => (
        <motion.span
          initial={{ translateY: '100%' }}
          animate={{ translateY: 0, transition: { duration: 1, delay: i / 10 } }}
          exit={{opacity: 0}}
          style={{ display: 'block' }}
        >
          {c}
        </motion.span>
      ))}
    </div>
  );
};

export default Bankai;
