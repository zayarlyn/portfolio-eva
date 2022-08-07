import React from 'react';
import Tilt from 'react-parallax-tilt';

const Gallery = () => {
  return (
    <div className='grid w-1/2 place-items-center'>
      <Tilt tiltReverse>
        <div className='-rotate-45 p-12'>
          <div className='flex items-center gap-4'>
            <img className='mt-auto w-[18rem]' src='/ytr-thumb-1.jpg' />
            <img className='w-[9rem]' src='/ytr-thumb-2.jpg' />
          </div>
          <div className='mt-4 flex items-center gap-4'>
            <img className='w-[9rem]' src='/ytr-thumb-3.jpg' />
            <img className='mb-auto w-[18rem]' src='/ytr-thumb-4.jpg' />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Gallery;
