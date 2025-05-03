'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { about } from '@/data/portfolioData';
import { FiAward } from 'react-icons/fi';

// Define a consistent set of technical skills to use across the site
const technicalSkills = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "Redux", 
  "Node.js", "HTML5", "CSS3", "Tailwind CSS", ".NET", "C#",
  "PostgreSQL", "MongoDB", "Redis", "Prisma ORM", 
  "AWS", "Docker", "Git", "Linux", "Bash"
];

export default function About() {
  const { theme } = useTheme();

  return (
    <main className='flex flex-col items-start min-h-screen px-6 py-12 md:p-24 lg:p-36 transition-all'>
      <h1 className='text-2xl font-bold tracking-tight'>about</h1>
      
      <section className='mt-8 max-w-3xl'>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {about.bio}
        </p>
        
        <h2 className='text-xl font-semibold mt-8 mb-3'>education</h2>
        <div className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          <h3 className='font-medium'>{about.education.degree}</h3>
          <p>{about.education.institution}</p>
          <p className='text-sm mt-1 text-gray-500'>{about.education.period} | {about.education.location}</p>
        </div>
        
        <h2 className='text-xl font-semibold mt-8 mb-3'>experience</h2>
        <div className='space-y-5'>
          {about.experience.map((exp, index) => (
            <div key={index} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <h3 className='font-medium'>{exp.position}</h3>
              <p>{exp.company}</p>
              <p className='text-sm mt-1 text-gray-500'>{exp.period} | {exp.location}</p>
              <p className='mt-2'>{exp.description}</p>
            </div>
          ))}
        </div>
        
        <h2 className='text-xl font-semibold mt-8 mb-3'>certifications</h2>
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
        
        <h2 className='text-xl font-semibold mt-8 mb-3'>achievements</h2>
        <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {about.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        
        <h2 className='text-xl font-semibold mt-8 mb-3'>skills</h2>
        <div className='flex flex-wrap gap-2'>
          {technicalSkills.map((skill, index) => (
            <span 
              key={index}
              className={`px-3 py-1 text-sm rounded-md ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Go Back Link */}
      <Link href='/' className='mt-8 font-medium text-blue-600 transition-all hover:underline'>
        go back home
      </Link>
    </main>
  );
}
