import type { NextPage } from 'next';
import Head from 'next/head';

import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Bankai from '../components/Bankai';
import InitialDrop from '../components/InitialDrop';
import BgSwords from '../components/BgSwords';
import Header from '../components/Header';
import Miracle from '../components/Miracle';
import Senbonzakura from '../components/Home';
import Intro from '../components/Intro';

const Index: NextPage = () => {
  return (
    <div className='flex flex-col h-[400vh] min-h-screen overflow-hidden'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <div className='flex w-11/12 mx-auto'>
        <Senbonzakura />
        {/* <Miracle /> */}
        {/* <Intro /> */}
      </div>
    </div>
  );
};

export default Index;
