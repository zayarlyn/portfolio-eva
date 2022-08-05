import { motion } from 'framer-motion';

function Ripple({ color }: { color?: string }) {
  return (
    <div className='relative -mt-[2px] -z-20 grid w-full -translate-x-5 place-items-center'>
      {[0, 1, 2, 3].map((e) => (
        <motion.div
          initial={{ width: 0, height: 0 }}
          animate={{
            width: 100,
            height: 100,
            opacity: [1, 1, 0],
            transition: { repeat: Infinity, duration: 1.8, delay: .4 * e },
          }}
          style={{
            rotateX: 70,
            border: '2px solid black',
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
