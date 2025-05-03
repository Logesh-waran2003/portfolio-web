'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { MdMailOutline, MdOutlineDescription } from 'react-icons/md';
import { FaLinkedin, FaAws } from 'react-icons/fa';
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
        
        {/* AWS Certification Badge */}
        <div className="mt-6 flex items-center">
          <div className={`flex items-center px-4 py-2 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <FaAws className="text-orange-500 text-2xl mr-2" />
            <div>
              <p className="font-medium">AWS Certified Solutions Architect</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Associate Level • Verified 2023
              </p>
            </div>
          </div>
        </div>
        
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
        
        {/* Call to Action for Recruiters */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link 
            href="https://drive.google.com/file/d/1uRa__WN_7oMACb_M-Nh10dSbTDbe_N0d/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
              theme === 'dark' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <MdOutlineDescription className="mr-2" /> View Resume
          </Link>
          <Link 
            href="/works" 
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            View Projects
          </Link>
        </div>
        
        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
          }`}>
            <div className="flex flex-wrap gap-4 items-center">
              {/* Frontend */}
              <div className="relative h-10 w-10">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" fill alt="javascript" title="JavaScript" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" fill alt="typescript" title="TypeScript" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" fill alt="html5" title="HTML5" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" fill alt="css3" title="CSS3" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://skillicons.dev/icons?i=tailwind" fill alt="tailwindcss" title="Tailwind CSS" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" fill alt="react" title="React" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://skillicons.dev/icons?i=nextjs" fill alt="nextjs" title="Next.js" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" fill alt="redux" title="Redux" />
              </div>
              
              {/* Backend */}
              <div className="relative h-10 w-10">
                <Image src="https://skillicons.dev/icons?i=nodejs" fill alt="nodejs" title="Node.js" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://skillicons.dev/icons?i=dotnet" fill alt="dotnet" title=".NET" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://skillicons.dev/icons?i=cs" fill alt="csharp" title="C#" />
              </div>
              
              {/* Database */}
              <div className="relative h-10 w-10">
                <Image src="https://skillicons.dev/icons?i=postgres" fill alt="postgresql" title="PostgreSQL" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" fill alt="mongodb" title="MongoDB" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" fill alt="redis" title="Redis" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://skillicons.dev/icons?i=prisma" fill alt="prisma" title="Prisma" />
              </div>
              
              {/* DevOps & Cloud */}
              <div className="relative h-10 w-10">
                <Image src="https://skillicons.dev/icons?i=aws" fill alt="aws" title="AWS" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.simpleicons.org/docker/2496ED" fill alt="docker" title="Docker" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.simpleicons.org/git/F05032" fill alt="git" title="Git" />
              </div>
              
              {/* Tools & Environment */}
              <div className="relative h-10 w-10">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" fill alt="linux" title="Linux" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" fill alt="vscode" title="VS Code" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://skillicons.dev/icons?i=neovim" fill alt="neovim" title="Neovim" />
              </div>
              <div className="relative h-10 w-10">
                <Image src="https://cdn.simpleicons.org/gnubash/4EAA25" fill alt="bash" title="Bash" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Professional Philosophy Section (replacing explicit startup section) */}
        <div className={`mt-16 p-6 rounded-lg border ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <p className={`mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            I thrive in fast-paced environments where I can wear multiple hats and contribute across the stack. My experience with AWS and cloud infrastructure enables me to build scalable solutions from day one.
          </p>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
            I&apos;m passionate about creating efficient, maintainable code that solves real business problems. My approach focuses on delivering value quickly while building a solid foundation for future growth.
          </p>
        </div>
      </section>
    </main>
  );
}
