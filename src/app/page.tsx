'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { MdMailOutline } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '@/data/portfolioData';

export default function Home() {
  const [showIcons, setShowIcons] = useState(false);
  const { theme } = useTheme();

  return (
    <main className='flex flex-col items-start justify-start min-h-screen px-6 py-12 md:p-24 lg:p-48'>
      <section className='w-full max-w-5xl'>
        <h1 className='text-4xl font-bold'>{personalInfo.name}</h1>
        <p className={`text-lg mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {personalInfo.title}
        </p>
        <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {personalInfo.shortBio}
        </p>
        <p className={`text-lg mt-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Take a look at some recent{' '}
          <Link href='/works' className='font-bold text-blue-600 hover:underline'>
            work
          </Link>{' '}
          or{' '}
          <button
            onClick={() => setShowIcons(!showIcons)}
            className='font-bold text-blue-600 focus:outline-none hover:underline'
          >
            get in touch
          </button>
        </p>
        
        <div
          className={`mt-4 flex space-x-6 transition-all duration-500 ease-in-out ${
            showIcons
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <Link 
            href={personalInfo.socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-blue-500 hover:text-blue-700 text-2xl'
            aria-label="Twitter"
          >
            <FaXTwitter />
          </Link>
          <Link 
            href={personalInfo.socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-blue-500 hover:text-blue-700 text-2xl'
            aria-label="GitHub"
          >
            <LuGithub />
          </Link>
          <Link 
            href={personalInfo.socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-blue-500 hover:text-blue-700 text-2xl'
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            href={`mailto:${personalInfo.email}`}
            className='text-blue-500 hover:text-blue-700 text-3xl'
            aria-label="Email"
          >
            <MdMailOutline />
          </Link>
        </div>
      </section>
    </main>
  );
}
