import React from 'react';
import Gallery from './Gallery';

const Project = () => {
  return (
    <section className='relative flex h-screen'>
      <Gallery />
      <div className='grid w-1/2 place-items-center text-white'>
        <div className='mr-16 w-[28rem]'>
          <h2 className='text-3xl font-medium'>yt-thumbnail-rank</h2>
          <p className='mt-7 text-lg'>
            A SSR app equipped with cookie-based authentication that users can upload and rate
            youtube thumbnails from different sources.
          </p>
          <div className='mt-4'>
            <b className='mr-3'>Tech stack:</b>
            <i className='tracking-wide'>nextjs, firestore, chakra ui</i>
          </div>
          <div className='mt-9'>
            <button className='rounded-md border-2 border-red-600 px-6 py-1'>Demo</button>
            <button className='ml-6'>source code</button>
          </div>
        </div>
        <div className='absolute right-0 top-10'>
          <span className='text-8xl'>01</span>
        </div>
      </div>
    </section>
  );
};

export default Project;
