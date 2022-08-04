import { motion } from 'framer-motion';

function Ripple({ color }: { color?: string }) {
  return (
    <div className='relative grid w-full -translate-x-5 place-items-center'>
      {[0, 1, 2].map((e) => (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2.5, opacity: [1, 0], transition: { repeat: Infinity, duration: 1.8, delay: 0.4 * e } }}
          style={{
            rotateX: 65,
            border: '1px solid black',
            borderRadius: '50%',
            position: 'absolute',
          }}
          className='absolute h-8 w-16'
        ></motion.div>
      ))}
    
    </div>
  );
}

export default Ripple;
