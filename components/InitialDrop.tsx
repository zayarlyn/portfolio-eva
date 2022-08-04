import {motion} from 'framer-motion';

interface Props {
  setSwordDropped: React.Dispatch<React.SetStateAction<boolean>>
}

function InitialDrop({setSwordDropped}: Props) {
  return (
    <div className='fixed z-20'>
        <div className='mt-20 overflow-hidden'>
          <motion.img
            initial={{ translateY: '-100%' }}
            animate={{ translateY: '105%', transition: { duration: 2.5 } }}
            onAnimationComplete={() => setSwordDropped(true)}
            className='w-8'
            src='/zanpakuto.svg'
            alt='zanpakuto'
          />
        </div>
        <div className='relative grid w-full place-items-center'>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: [1, 0], transition: { repeat: Infinity, duration: 1.5 } }}
            style={{ rotateX: 60, border: '1px solid black', borderRadius: '50%' }}
            className='absolute h-8 w-16'
          ></motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 3,
              opacity: [1, 0],
              transition: { repeat: Infinity, duration: 1.5, delay: 0.3 },
            }}
            style={{ rotateX: 60, border: '1px solid', borderRadius: '50%' }}
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
      </div>
  )
}

export default InitialDrop