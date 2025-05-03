'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  if (!theme) return null; // Prevent rendering until theme is set

  return <div className={`${theme} min-h-screen`}>{children}</div>;
}
