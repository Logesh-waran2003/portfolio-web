'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiExternalLink, FiGithub, FiArrowLeft, FiMap, FiImage } from 'react-icons/fi';
import { allProjects, ProfessionalProject, PersonalProject } from '@/data/portfolioData';
import { useState } from 'react';

export default function ProjectDetail() {
  const { theme } = useTheme();
  const params = useParams();
  const projectId = params.id as string;
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'screenshots'>('overview');
  
  const project = allProjects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <main className='flex flex-col items-start min-h-screen px-6 py-12 md:p-24 lg:p-48 transition-all'>
        <h1 className='text-2xl font-bold tracking-tight'>Project not found</h1>
        <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          The project you're looking for doesn't exist.
        </p>
        <Link href='/works' className='mt-6 flex items-center text-blue-600 hover:underline'>
          <FiArrowLeft className="mr-2" /> Back to all projects
        </Link>
      </main>
    );
  }

  return (
    <main className='flex flex-col items-start min-h-screen px-6 py-12 md:p-24 lg:p-48 transition-all'>
      <Link href='/works' className='flex items-center text-blue-600 hover:underline mb-6'>
        <FiArrowLeft className="mr-2" /> Back to all projects
      </Link>
      
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className='text-3xl font-bold tracking-tight'>{project.name}</h1>
          
          <div className="flex mt-2 md:mt-0 space-x-4">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 text-sm font-medium ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                } hover:underline`}
              >
                <FiGithub className="mr-1" /> Source
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
                <FiExternalLink className="mr-1" /> Demo
              </Link>
            )}
          </div>
        </div>
        
        <p className={`mt-2 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {project.description}
        </p>
        
        <div className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.type === 'professional' ? (
            <p>
              {project.role} at {project.companyName} • {project.year}
            </p>
          ) : (
            <p>Personal Project • {project.year}</p>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Tabs */}
        <div className="flex mt-8 border-b w-full">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 mr-4 transition-all ${
              activeTab === 'overview'
                ? theme === 'dark'
                  ? 'border-b-2 border-white text-white'
                  : 'border-b-2 border-black text-black'
                : theme === 'dark'
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 mr-4 transition-all ${
              activeTab === 'details'
                ? theme === 'dark'
                  ? 'border-b-2 border-white text-white'
                  : 'border-b-2 border-black text-black'
                : theme === 'dark'
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Details
          </button>
          {project.screenshots && project.screenshots.length > 0 && (
            <button
              onClick={() => setActiveTab('screenshots')}
              className={`flex items-center px-4 py-2 transition-all ${
                activeTab === 'screenshots'
                  ? theme === 'dark'
                    ? 'border-b-2 border-white text-white'
                    : 'border-b-2 border-black text-black'
                  : theme === 'dark'
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <FiImage className="mr-2" /> Screenshots
            </button>
          )}
        </div>
        
        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'overview' && (
            <div>
              {project.type === 'professional' ? (
                <ProfessionalOverview project={project as ProfessionalProject} theme={theme} />
              ) : (
                <PersonalOverview project={project as PersonalProject} theme={theme} />
              )}
            </div>
          )}
          
          {activeTab === 'details' && (
            <div>
              {project.type === 'professional' ? (
                <ProfessionalDetails project={project as ProfessionalProject} theme={theme} />
              ) : (
                <PersonalDetails project={project as PersonalProject} theme={theme} />
              )}
            </div>
          )}
          
          {activeTab === 'screenshots' && project.screenshots && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className={`relative h-64 rounded-lg overflow-hidden border ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                  }`}
                >
                  {/* This is a placeholder. In a real implementation, you would use actual images */}
                  <div className={`absolute inset-0 flex items-center justify-center ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <p className="text-center px-4">
                      Screenshot placeholder: {screenshot.split('/').pop()}
                      <br />
                      <span className="text-xs">
                        (Add actual images to the public directory)
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function ProfessionalOverview({ project, theme }: { project: ProfessionalProject, theme: string | null }) {
  return (
    <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
      <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
      
      <h3 className="text-lg font-medium mt-6 mb-2">Impact & Achievements</h3>
      <ul className="list-disc pl-5 space-y-3">
        {project.impact.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      {/* Future roadmap removed for professional projects as requested */}
    </div>
  );
}

function PersonalOverview({ project, theme }: { project: PersonalProject, theme: string | null }) {
  return (
    <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
      <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
      
      {project.ideation && (
        <>
          <h3 className="text-lg font-medium mt-6 mb-2">Ideation</h3>
          <p className="mb-4">{project.ideation}</p>
        </>
      )}
      
      <h3 className="text-lg font-medium mt-6 mb-2">The Problem</h3>
      <p className="mb-4">{project.problem}</p>
      
      <h3 className="text-lg font-medium mt-6 mb-2">My Approach</h3>
      <p className="mb-4">{project.approach}</p>
      
      {project.progress && (
        <>
          <h3 className="text-lg font-medium mt-6 mb-2">Current Status</h3>
          <p className="mb-4">{project.progress}</p>
        </>
      )}
      
      {project.futureRoadmap && project.futureRoadmap.length > 0 && (
        <>
          <h3 className="text-lg font-medium mt-6 mb-2 flex items-center">
            <FiMap className="mr-2" /> Future Roadmap
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {project.futureRoadmap.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function ProfessionalDetails({ project, theme }: { project: ProfessionalProject, theme: string | null }) {
  return (
    <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
      <h2 className="text-xl font-semibold mb-4">Technical Details</h2>
      
      <h3 className="text-lg font-medium mt-6 mb-2">Technologies Used</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className={`px-3 py-1 text-sm rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-800 text-gray-300' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <h3 className="text-lg font-medium mt-6 mb-2">Role & Responsibilities</h3>
      <p className="mb-4">As {project.role} at {project.companyName}, I was responsible for:</p>
      <ul className="list-disc pl-5 space-y-2">
        {project.impact.map((item, index) => {
          // Extract the responsibility part from the impact statement
          const responsibility = item.split(',')[0];
          return <li key={index}>{responsibility}</li>;
        })}
      </ul>
    </div>
  );
}

function PersonalDetails({ project, theme }: { project: PersonalProject, theme: string | null }) {
  return (
    <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
      <h2 className="text-xl font-semibold mb-4">Technical Details</h2>
      
      <h3 className="text-lg font-medium mt-6 mb-2">Technologies Used</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className={`px-3 py-1 text-sm rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-800 text-gray-300' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <h3 className="text-lg font-medium mt-6 mb-2">Thought Process</h3>
      <p className="mb-6">{project.thought}</p>
      
      <h3 className="text-lg font-medium mt-6 mb-2">Implementation Approach</h3>
      <p className="mb-4">{project.approach}</p>
    </div>
  );
}
