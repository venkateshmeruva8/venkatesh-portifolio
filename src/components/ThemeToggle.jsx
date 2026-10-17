import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '', variant = 'compact' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  if (variant === 'mobile') {
    return (
      <button
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] border border-[#E9E1D5] dark:border-[#49443E] hover:border-[#F47B35]/50 focus:outline-none focus:ring-2 focus:ring-[#F47B35] ${className}`}
        aria-label={label}
        title={label}
      >
        <span className="flex items-center gap-2">
          {isDark ? (
            <Sun className="w-4 h-4 text-[#F47B35]" />
          ) : (
            <Moon className="w-4 h-4 text-[#77716A]" />
          )}
          <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </span>
        <span className="text-xs font-mono text-[#77716A] dark:text-[#C5BDB3]">
          {isDark ? 'Turn On Light' : 'Turn On Dark'}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] border border-[#E9E1D5] dark:border-[#49443E] hover:border-[#F47B35]/50 hover:bg-[#E9E1D5] dark:hover:bg-[#3D3934] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F47B35] group ${className}`}
      aria-label={label}
      title={label}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#F47B35] transition-transform duration-300 rotate-0 scale-100 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#77716A] transition-transform duration-300 -rotate-12 scale-100 group-hover:rotate-0 group-hover:text-[#F47B35]" />
        )}
      </div>
      <span className="sr-only">{label}</span>
    </button>
  );
}
