'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { MdMailOutline } from 'react-icons/md';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const [showIcons, setShowIcons] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Logeshwaran Portfolio</title>
        <meta name='description' content='Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='flex flex-col items-start justify-start min-h-screen m-48'>
        <button
          onClick={toggleTheme}
          className='fixed top-20 right-20 p-2 rounded-full bg-gray-800 text-white dark:bg-white dark:text-black transition-all'
        >
          {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <section className='w-full max-w-5xl'>
          <h1 className='text-4xl font-bold'>Logeshwaran</h1>
          <p className='text-lg text-gray-600 mt-2'>Put your content here</p>
          <p className='text-lg text-gray-600 mt-2'>
            Take a look at some recent{' '}
            <Link href='/works' className='font-bold text-blue-600'>
              work
            </Link>{' '}
            or{' '}
            <button
              onClick={() => setShowIcons(!showIcons)}
              className='font-bold text-blue-600 focus:outline-none'
            >
              get in touch
            </button>
          </p>
          <div
            className={`mt-4 flex space-x-4 transition-all duration-500 ease-in-out ${
              showIcons
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-90 pointer-events-none'
            }`}
          >
            <Link href='https://twitter.com' className='text-blue-500 text-2xl'>
              <FaXTwitter />
            </Link>
            <Link href='https://github.com' className='text-blue-500 text-2xl'>
              <LuGithub />
            </Link>
            <Link
              href='mailto:example@mail.com'
              className='text-blue-500 text-3xl'
            >
              <MdMailOutline />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
