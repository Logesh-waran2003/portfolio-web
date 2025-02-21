'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

const projects = [
  {
    id: 'OG',
    name: 'Oxygenie',
    description: 'Mac app to check air quality at your current location',
    link: 'https://yourproject1.com',
    blog: '/blog/oxygenie',
  },
  {
    id: 'CW',
    name: 'Calendar of Wisdom',
    description: 'Daily insight and reflections from A Calendar of Wisdom',
    link: 'https://yourproject2.com',
  },
  {
    id: 'GB',
    name: 'Goggins Blocker',
    description: 'Goggins inspired content blocking Chrome Extension',
    link: 'https://yourproject3.com',
    blog: '/blog/goggins-blocker',
  },
];

export default function Works() {
  const { theme } = useTheme();

  return (
    <main className='flex flex-col items-start min-h-screen m-48 transition-all'>
      <h1 className='text-2xl font-bold tracking-tight'>work</h1>
      <p
        className={`mt-2 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        A curated list of recent and not so recent projects.
      </p>

      {/* Projects Container */}
      <div className='mt-8 w-full space-y-3'>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group flex items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
              theme === 'dark'
                ? 'hover:bg-gray-800 bg-transparent'
                : 'hover:bg-slate-200 bg-transparent'
            }`}
          >
            {/* Circle with initials */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold text-sm transition-all ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-400'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {project.id}
            </div>

            {/* Project Details */}
            <div className='ml-4'>
              {/* Project Name (Links to Project) */}
              <Link
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                <h2 className='text-lg font-semibold transition-colors group-hover:text-blue-500'>
                  {project.name}
                </h2>
              </Link>

              {/* Description (Links to Blog Only If Exists) */}
              {project.blog ? (
                <Link
                  href={project.blog}
                  className={`text-sm transition-colors block hover:text-blue-500 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-700'
                  }`}
                >
                  {project.description}
                </Link>
              ) : (
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-700'
                  }`}
                >
                  {project.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Go Back Link */}
      <Link href='/' className='mt-10 font-bold text-blue-600 transition-all'>
        Go Back Home
      </Link>
    </main>
  );
}
