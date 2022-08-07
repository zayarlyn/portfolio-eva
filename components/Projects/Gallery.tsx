import React from 'react';

const Gallery = () => {
  return (
    <div className='grid place-items-center outline-white w-1/2'>
      <div className='-rotate-45'>
        <div className='flex items-center gap-4'>
          <img className='mt-auto w-[18rem]' src='/ytr-thumb-1.jpg' />
          <img className='w-[9rem]' src='/ytr-thumb-3.jpg' />
        </div>
        <div className='mt-4 flex items-center gap-4'>
          <img className='w-[9rem]' src='/ytr-thumb-3.jpg' />
          <img className='mb-auto w-[18rem]' src='/ytr-thumb-1.jpg' />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
