import type { NextPage } from 'next';
import Head from 'next/head';

import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Bankai from '../components/Bankai';
import InitialDrop from '../components/InitialDrop';
import BgSwords from '../components/BgSwords';
import Header from '../components/Header';
import Intro from '../components/Intro';

const Home: NextPage = () => {
  const [swordDropped, setSwordDropped] = useState(false);
  // const [yScroll, setYScroll] = useState(0);

  // const { scrollYProgress, scrollY } = useScroll();

  useEffect(() => {
    // return scrollYProgress.onChange(setYScroll);
  }, []);
  // console.log(swordDropped);

  return (
    <div className='flex h-screen min-h-screen flex-col items-center overflow-hidden'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* {swordDropped ? (
        <> */}
          <Header />
          <BgSwords />
          <Intro/>
        {/* </>
      ) : (
      <InitialDrop setSwordDropped={setSwordDropped} />
      )} */}
    </div>
  );
};

export default Home;
