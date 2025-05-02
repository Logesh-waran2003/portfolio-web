'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { about, skills } from '@/data/portfolioData';

export default function About() {
  const { theme } = useTheme();

  return (
    <main className='flex flex-col items-start min-h-screen px-6 py-12 md:p-24 lg:p-48 transition-all'>
      <h1 className='text-2xl font-bold tracking-tight'>about</h1>
      
      <section className='mt-6'>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {about.bio}
        </p>
        
        <h2 className={`mt-8 text-xl font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          Philosophy
        </h2>
        <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {about.philosophy}
        </p>
        
        <h2 className={`mt-8 text-xl font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          Interests
        </h2>
        <ul className={`mt-2 list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {about.interests.map((interest, index) => (
            <li key={index} className="mt-1">{interest}</li>
          ))}
        </ul>
      </section>
      
      <section className='mt-12 w-full'>
        <h2 className={`text-xl font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          Skills
        </h2>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillCategory, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800/30' : 'bg-gray-100'
              }`}
            >
              <h3 className={`font-medium ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {skillCategory.category}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-2 py-1 text-sm rounded-full ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Link href='/' className='mt-12 font-bold text-blue-600 transition-all hover:underline'>
        Go Back Home
      </Link>
    </main>
  );
}
