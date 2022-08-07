import type { NextPage } from 'next';
import Head from 'next/head';

import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Bankai from '../components/Bankai';
import InitialDrop from '../components/InitialDrop';
import Header from '../components/Header';
import Miracle from '../components/Miracle';
import Senbonzakura from '../components/Home';
import Intro from '../components/Intro';
import Home from '../components/Home';
import Projects from '../components/Projects/Projects';

const Index: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Home />
      <Projects />
    </div>
  );
};

export default Index;
