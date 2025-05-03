'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { about, skills } from '@/data/portfolioData';
import { FiAward } from 'react-icons/fi';

export default function About() {
  const { theme } = useTheme();

  return (
    <main className='flex flex-col items-start min-h-screen px-6 py-12 md:p-24 lg:p-48 transition-all'>
      <h1 className='text-2xl font-bold tracking-tight'>about</h1>
      
      <section className='mt-8 max-w-3xl'>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {about.bio}
        </p>
        
        <h2 className='text-xl font-semibold mt-10 mb-4'>Education</h2>
        <div className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          <h3 className='font-medium'>{about.education.degree}</h3>
          <p>{about.education.institution}</p>
          <p className='text-sm mt-1 text-gray-500'>{about.education.period} | {about.education.location}</p>
        </div>
        
        <h2 className='text-xl font-semibold mt-10 mb-4'>Experience</h2>
        <div className='space-y-6'>
          {about.experience.map((exp, index) => (
            <div key={index} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <h3 className='font-medium'>{exp.position}</h3>
              <p>{exp.company}</p>
              <p className='text-sm mt-1 text-gray-500'>{exp.period} | {exp.location}</p>
              <p className='mt-2'>{exp.description}</p>
            </div>
          ))}
        </div>
        
        <h2 className='text-xl font-semibold mt-10 mb-4'>Certifications</h2>
        <div className='space-y-3'>
          {about.certifications?.map((cert, index) => (
            <div key={index} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <h3 className='font-medium flex items-center'>
                <FiAward className="mr-2" /> {cert.name}
              </h3>
              <p>{cert.issuer} | {cert.date}</p>
              {cert.url && (
                <Link 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='text-blue-500 hover:underline text-sm'
                >
                  View credential
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <h2 className='text-xl font-semibold mt-10 mb-4'>Achievements</h2>
        <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {about.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        
        <h2 className='text-xl font-semibold mt-10 mb-4'>Philosophy</h2>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {about.philosophy}
        </p>
        
        <h2 className='text-xl font-semibold mt-10 mb-4'>Skills</h2>
        <div className='space-y-6'>
          {skills.map((skillCategory, index) => (
            <div key={index}>
              <h3 className={`font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {skillCategory.category}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skillCategory.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-1 text-sm rounded-full ${
                      theme === 'dark' 
                        ? 'bg-gray-800 text-gray-300' 
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
        
        <h2 className='text-xl font-semibold mt-10 mb-4'>Interests</h2>
        <div className='flex flex-wrap gap-2'>
          {about.interests.map((interest, index) => (
            <span 
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Go Back Link */}
      <Link href='/' className='mt-10 font-bold text-blue-600 transition-all hover:underline'>
        Go Back Home
      </Link>
    </main>
  );
}
