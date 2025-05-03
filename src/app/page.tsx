'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { MdMailOutline, MdDownload, MdRocketLaunch } from 'react-icons/md';
import { FaLinkedin, FaAws } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, skills } from '@/data/portfolioData';

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
            href="/resume.pdf" 
            target="_blank"
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
              theme === 'dark' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <MdDownload className="mr-2" /> Download Resume
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
        
        {/* Tech Stack Visualization */}
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((category, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}
              >
                <h3 className="font-medium mb-2">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.slice(0, 3).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-2 py-1 text-xs rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                  {category.items.length > 3 && (
                    <span 
                      className={`px-2 py-1 text-xs rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      +{category.items.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Startup Interest Section */}
        <div className={`mt-16 p-6 rounded-lg border ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center mb-4">
            <MdRocketLaunch className={`text-2xl mr-2 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`} />
            <h2 className="text-xl font-bold">Why I'm Great for Startups</h2>
          </div>
          <p className={`mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            I thrive in fast-paced environments where I can wear multiple hats and contribute across the stack. My experience with AWS and cloud infrastructure enables me to build scalable solutions from day one.
          </p>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
            I'm passionate about creating efficient, maintainable code that solves real business problems. My approach focuses on delivering value quickly while building a solid foundation for future growth.
          </p>
        </div>
      </section>
    </main>
  );
}
