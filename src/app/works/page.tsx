'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { useState } from 'react';
import { FiExternalLink, FiGithub, FiChevronDown, FiChevronUp, FiBriefcase, FiUser, FiImage, FiMap } from 'react-icons/fi';
import { professionalProjects, personalProjects, ProfessionalProject, PersonalProject } from '@/data/portfolioData';

type TabType = 'professional' | 'personal';

export default function Works() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<TabType>('professional');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [showScreenshots, setShowScreenshots] = useState<string | null>(null);

  const toggleProjectDetails = (projectId: string) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
      setShowScreenshots(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  const toggleScreenshots = (projectId: string) => {
    if (showScreenshots === projectId) {
      setShowScreenshots(null);
    } else {
      setShowScreenshots(projectId);
    }
  };

  return (
    <main className='flex flex-col items-start min-h-screen px-6 py-12 md:p-24 lg:p-36 transition-all'>
      <h1 className='text-2xl font-bold tracking-tight'>work</h1>
      <p
        className={`mt-2 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        a curated list of projects with the thinking behind each one.
      </p>

      {/* Tabs */}
      <div className="flex mt-8 border-b w-full">
        <button
          onClick={() => setActiveTab('professional')}
          className={`flex items-center px-4 py-2 mr-4 transition-all ${
            activeTab === 'professional'
              ? theme === 'dark'
                ? 'border-b-2 border-white text-white'
                : 'border-b-2 border-black text-black'
              : theme === 'dark'
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          <FiBriefcase className="mr-2" />
          professional
        </button>
        <button
          onClick={() => setActiveTab('personal')}
          className={`flex items-center px-4 py-2 transition-all ${
            activeTab === 'personal'
              ? theme === 'dark'
                ? 'border-b-2 border-white text-white'
                : 'border-b-2 border-black text-black'
              : theme === 'dark'
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          <FiUser className="mr-2" />
          personal
        </button>
      </div>

      {/* Projects Container */}
      <div className='mt-8 w-full space-y-6'>
        {activeTab === 'professional' ? (
          professionalProjects.length > 0 ? (
            professionalProjects.map((project) => (
              <ProfessionalProjectCard
                key={project.id}
                project={project}
                theme={theme}
                isExpanded={expandedProject === project.id}
                showScreenshots={showScreenshots === project.id}
                toggleExpand={() => toggleProjectDetails(project.id)}
                toggleScreenshots={() => toggleScreenshots(project.id)}
              />
            ))
          ) : (
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              no professional projects to display.
            </p>
          )
        ) : personalProjects.length > 0 ? (
          personalProjects.map((project) => (
            <PersonalProjectCard
              key={project.id}
              project={project}
              theme={theme}
              isExpanded={expandedProject === project.id}
              showScreenshots={showScreenshots === project.id}
              toggleExpand={() => toggleProjectDetails(project.id)}
              toggleScreenshots={() => toggleScreenshots(project.id)}
            />
          ))
        ) : (
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            no personal projects to display.
          </p>
        )}
      </div>

      {/* Go Back Link */}
      <Link href='/' className='mt-8 font-medium text-blue-600 transition-all hover:underline'>
        go back home
      </Link>
    </main>
  );
}

interface ProjectCardProps {
  theme: string | null;
  isExpanded: boolean;
  showScreenshots: boolean;
  toggleExpand: () => void;
  toggleScreenshots: () => void;
}

function ProfessionalProjectCard({ 
  project, 
  theme, 
  isExpanded, 
  showScreenshots,
  toggleExpand,
  toggleScreenshots
}: ProjectCardProps & { project: ProfessionalProject }) {
  return (
    <div
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
          {/* Project Name with Company */}
          <div className="flex flex-col sm:flex-row sm:items-center">
            <Link 
              href={`/project/${project.id}`}
              className='text-lg font-semibold transition-colors group-hover:text-blue-500'
            >
              {project.name}
            </Link>
            <span className={`text-xs sm:ml-2 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              at {project.companyName}
            </span>
          </div>

          {/* Links */}
          <div className="flex space-x-2 mt-1">
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

          {/* Description */}
          <p
            className={`text-sm mt-1 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-700'
            }`}
          >
            {project.description}
          </p>
          
          {/* Role & Year */}
          <div className="flex flex-wrap items-center mt-1">
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              {project.role}
            </p>
            <span className={`mx-2 text-xs ${
              theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
            }`}>•</span>
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
            }`}>
              {project.year}
            </p>
          </div>
        </div>
        
        {/* Toggle Button with Icon */}
        <button 
          onClick={toggleExpand}
          className={`flex items-center text-sm font-medium ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          } hover:underline`}
          aria-expanded={isExpanded}
        >
          <span className="mr-1">
            {isExpanded ? 'hide details' : 'show details'}
          </span>
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
      
      {/* Expanded Content */}
      {isExpanded && (
        <div className={`mt-4 ml-14 text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
        }`}>
          <h3 className={`font-medium mb-2 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
          }`}>
            impact & achievements
          </h3>
          
          <ul className="list-disc pl-5 space-y-2">
            {project.impact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className={`px-2 py-1 text-xs rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-gray-300' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Project Links and Actions */}
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
                <FiGithub /> view source
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
                <FiExternalLink /> view live demo
              </Link>
            )}
            
            {project.screenshots && project.screenshots.length > 0 && (
              <button
                onClick={toggleScreenshots}
                className={`flex items-center gap-1 text-sm font-medium ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                } hover:underline`}
              >
                <FiImage /> {showScreenshots ? 'hide screenshots' : 'view screenshots'}
              </button>
            )}
            
            <Link
              href={`/project/${project.id}`}
              className={`flex items-center gap-1 text-sm font-medium ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              } hover:underline`}
            >
              view full project details
            </Link>
          </div>
          
          {/* Screenshots Section */}
          {showScreenshots && project.screenshots && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className={`relative h-48 rounded-lg overflow-hidden border ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                  }`}
                >
                  {/* This is a placeholder. In a real implementation, you would use actual images */}
                  <div className={`absolute inset-0 flex items-center justify-center ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <p className="text-center px-4">
                      screenshot placeholder: {screenshot.split('/').pop()}
                      <br />
                      <span className="text-xs">
                        (add actual images to the public directory)
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
function PersonalProjectCard({ 
  project, 
  theme, 
  isExpanded, 
  showScreenshots,
  toggleExpand,
  toggleScreenshots
}: ProjectCardProps & { project: PersonalProject }) {
  return (
    <div
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
            <Link
              href={`/project/${project.id}`}
              className='text-lg font-semibold transition-colors group-hover:text-blue-500'
            >
              {project.name}
            </Link>
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
            className={`text-sm mt-1 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-700'
            }`}
          >
            {project.description}
          </p>
          
          {/* Progress & Year */}
          <div className="flex flex-wrap items-center mt-1">
            {project.progress && (
              <>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  status: {project.progress}
                </p>
                <span className={`mx-2 text-xs ${
                  theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
                }`}>•</span>
              </>
            )}
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
            }`}>
              {project.year}
            </p>
          </div>
        </div>
        
        {/* Toggle Button with Icon */}
        <button 
          onClick={toggleExpand}
          className={`flex items-center text-sm font-medium ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          } hover:underline`}
          aria-expanded={isExpanded}
        >
          <span className="mr-1">
            {isExpanded ? 'hide details' : 'show details'}
          </span>
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
      
      {/* Expanded Content */}
      {isExpanded && (
        <div className={`mt-4 ml-14 text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
        }`}>
          <h3 className={`font-medium mb-2 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
          }`}>
            behind the project
          </h3>
          
          <div className="mb-3">
            {project.ideation && (
              <>
                <h4 className={`font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>ideation</h4>
                <p className="mb-2">{project.ideation}</p>
              </>
            )}
            
            <h4 className={`font-medium ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}>the problem</h4>
            <p className="mb-2">{project.problem}</p>
            
            <h4 className={`font-medium ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}>my approach</h4>
            <p className="mb-2">{project.approach}</p>
            
            <h4 className={`font-medium ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}>thought process</h4>
            <p>{project.thought}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className={`px-2 py-1 text-xs rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-gray-300' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Project Links and Actions */}
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
                <FiGithub /> view source
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
                <FiExternalLink /> view live demo
              </Link>
            )}
            
            {project.screenshots && project.screenshots.length > 0 && (
              <button
                onClick={toggleScreenshots}
                className={`flex items-center gap-1 text-sm font-medium ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                } hover:underline`}
              >
                <FiImage /> {showScreenshots ? 'hide screenshots' : 'view screenshots'}
              </button>
            )}
            
            {project.futureRoadmap && project.futureRoadmap.length > 0 && (
              <div className="w-full mt-2">
                <h4 className={`font-medium mt-4 mb-2 flex items-center ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                }`}>
                  <FiMap className="mr-2" /> future roadmap
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.futureRoadmap.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <Link
              href={`/project/${project.id}`}
              className={`flex items-center gap-1 text-sm font-medium ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              } hover:underline`}
            >
              view full project details
            </Link>
          </div>
          
          {/* Screenshots Section */}
          {showScreenshots && project.screenshots && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className={`relative h-48 rounded-lg overflow-hidden border ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                  }`}
                >
                  {/* This is a placeholder. In a real implementation, you would use actual images */}
                  <div className={`absolute inset-0 flex items-center justify-center ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <p className="text-center px-4">
                      screenshot placeholder: {screenshot.split('/').pop()}
                      <br />
                      <span className="text-xs">
                        (add actual images to the public directory)
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
