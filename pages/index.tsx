import type { NextPage } from 'next';
import Head from 'next/head';

import { motion, useScroll } from 'framer-motion';
import Header from '../components/Header';
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
