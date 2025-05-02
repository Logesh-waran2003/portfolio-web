'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { useState } from 'react';
import { FiExternalLink, FiGithub, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { projects } from '@/data/portfolioData';

export default function Works() {
  const { theme } = useTheme();
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProjectDetails = (projectId: string) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <main className='flex flex-col items-start min-h-screen px-6 py-12 md:p-24 lg:p-48 transition-all'>
      <h1 className='text-2xl font-bold tracking-tight'>work</h1>
      <p
        className={`mt-2 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        A curated list of projects with the thinking behind each one.
      </p>

      {/* Projects Container */}
      <div className='mt-8 w-full space-y-6'>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group flex flex-col p-4 rounded-lg transition-all duration-300 ${
              theme === 'dark'
                ? 'hover:bg-gray-800/50 bg-transparent'
                : 'hover:bg-slate-200/50 bg-transparent'
            }`}
          >
            <div className="flex items-center">
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
              <div className='ml-4 flex-grow'>
                {/* Project Name with Link Icon */}
                <div className="flex items-center">
                  <h2 className='text-lg font-semibold transition-colors group-hover:text-blue-500'>
                    {project.name}
                  </h2>
                  <div className="flex space-x-2 ml-2">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`text-sm transition-colors ${
                          theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                        }`}
                        aria-label={`${project.name} GitHub repository`}
                      >
                        <FiGithub />
                      </Link>
                    )}
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`text-sm transition-colors ${
                          theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                        }`}
                        aria-label={`${project.name} live demo`}
                      >
                        <FiExternalLink />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-700'
                  }`}
                >
                  {project.description}
                </p>
                
                {/* Year */}
                <p className={`text-xs mt-1 ${
                  theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
                }`}>
                  {project.year}
                </p>
              </div>
              
              {/* Toggle Button with Icon */}
              <button 
                onClick={() => toggleProjectDetails(project.id)}
                className={`flex items-center text-sm font-medium ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                } hover:underline`}
                aria-expanded={expandedProject === project.id}
              >
                <span className="mr-1">
                  {expandedProject === project.id ? 'Hide details' : 'Show details'}
                </span>
                {expandedProject === project.id ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            
            {/* Expanded Content */}
            {expandedProject === project.id && (
              <div className={`mt-4 ml-14 text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
              }`}>
                <h3 className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                }`}>
                  Behind the project
                </h3>
                <p className="mb-3">{project.thought}</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-2 py-1 text-xs rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gray-800 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="mt-4 flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-sm font-medium ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      } hover:underline`}
                    >
                      <FiGithub /> View Source
                    </Link>
                  )}
                  
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-sm font-medium ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      } hover:underline`}
                    >
                      <FiExternalLink /> View Live Demo
                    </Link>
                  )}
                  
                  {project.blog && (
                    <Link
                      href={project.blog}
                      className={`flex items-center gap-1 text-sm font-medium ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      } hover:underline`}
                    >
                      Read case study
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Go Back Link */}
      <Link href='/' className='mt-10 font-bold text-blue-600 transition-all hover:underline'>
        Go Back Home
      </Link>
    </main>
  );
}
