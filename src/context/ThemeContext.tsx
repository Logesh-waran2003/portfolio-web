'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme | null>(null); // Start with null to avoid mismatch

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = storedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
    document.documentElement.style.setProperty('--background', 
      initialTheme === 'dark' ? 'var(--background-dark)' : 'var(--background-light)');
    document.documentElement.style.setProperty('--foreground', 
      initialTheme === 'dark' ? 'var(--text-dark)' : 'var(--text-light)');
    localStorage.setItem('theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      document.documentElement.style.setProperty('--background', 
        newTheme === 'dark' ? 'var(--background-dark)' : 'var(--background-light)');
      document.documentElement.style.setProperty('--foreground', 
        newTheme === 'dark' ? 'var(--text-dark)' : 'var(--text-light)');
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  if (theme === null) return null; // Prevent rendering until theme is set

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
