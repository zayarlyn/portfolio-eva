import {motion} from 'framer-motion';

function Ripple({color}: {color?: string}) {
  return (
    <div className='relative grid w-full place-items-center -ml-5'>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 3, opacity: [1, 0], transition: { repeat: Infinity, duration: 1.5 } }}
        style={{ rotateX: 60, border: '1px solid black', borderRadius: '50%', position: 'absolute' }}
        className='absolute h-8 w-16'
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 3,
          opacity: [1, 0],
          transition: { repeat: Infinity, duration: 1.5, delay: 0.3 },
        }}
        style={{ rotateX: 60, border: '1px solid black', borderRadius: '50%' }}
        className='absolute h-8 w-16'
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 3,
          opacity: [1, 0],
          transition: { repeat: Infinity, duration: 1.5, delay: 0.6 },
        }}
        style={{ rotateX: 60, border: '1px solid black', borderRadius: '50%' }}
        className='absolute h-8 w-16'
      ></motion.div>
    </div>
  );
}

export default Ripple;
