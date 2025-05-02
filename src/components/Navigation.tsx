'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  
  const navItems = [
    { name: 'home', path: '/' },
    { name: 'work', path: '/works' },
    { name: 'about', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 px-6 py-4 md:px-12 lg:px-20 backdrop-blur-md ${
      theme === 'dark' 
        ? 'bg-black/70 shadow-md shadow-gray-900/20' 
        : 'bg-white/70 shadow-md shadow-gray-200/50'
    } transition-all duration-300`}>
      <div className="flex justify-between items-center">
        <ul className="flex space-x-6">
          {navItems.map((item) => {
            const isActive = 
              (item.path === '/' && pathname === '/') || 
              (item.path !== '/' && pathname.startsWith(item.path));
              
            return (
              <li key={item.path}>
                <Link 
                  href={item.path}
                  className={`text-sm transition-colors ${
                    isActive 
                      ? 'font-medium ' + (theme === 'dark' ? 'text-white' : 'text-black')
                      : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all ${
            theme === 'dark' 
              ? 'bg-gray-800 text-white hover:bg-gray-700' 
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>
      </div>
    </nav>
  );
}
