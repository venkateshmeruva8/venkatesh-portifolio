import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './icons/SocialIcons';
import { profileData } from '../data/profileData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#FFF9F0] dark:bg-[#1E1C1A] border-t border-[#E9E1D5] dark:border-[#49443E] py-12 sm:py-16 text-[#77716A] dark:text-[#C5BDB3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#E9E1D5] dark:border-[#49443E]">
          
          {/* Logo & Tagline */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F47B35] text-[#FFF9F0] flex items-center justify-center font-bold text-sm tracking-wider shadow-xs">
                {profileData.monogram}
              </div>
              <span className="font-serif font-bold text-lg text-[#242321] dark:text-[#FFF9F0]">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-[#77716A] dark:text-[#C5BDB3] leading-relaxed">
              Aspiring Data Analyst & AI/ML Developer. Transforming raw datasets into
              meaningful insights and practical software solutions.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[#77716A] dark:text-[#C5BDB3] hover:text-[#F47B35] dark:hover:text-[#F47B35] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] hover:text-[#F47B35] dark:hover:text-[#F47B35] hover:bg-[#E9E1D5] dark:hover:bg-[#49443E] border border-[#E9E1D5] dark:border-[#49443E] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] hover:text-[#F47B35] dark:hover:text-[#F47B35] hover:bg-[#E9E1D5] dark:hover:bg-[#49443E] border border-[#E9E1D5] dark:border-[#49443E] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] hover:text-[#F47B35] dark:hover:text-[#F47B35] hover:bg-[#E9E1D5] dark:hover:bg-[#49443E] border border-[#E9E1D5] dark:border-[#49443E] transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-xl bg-[#FFF0E6] dark:bg-[#3A2518] text-[#F47B35] hover:bg-[#F47B35] hover:text-[#FFF9F0] border border-[#F47B35]/25 dark:border-[#F47B35]/40 transition-colors ml-2"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#77716A]/80 dark:text-[#C5BDB3]/80">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with React, Tailwind CSS & React Bits
          </p>
        </div>

      </div>
    </footer>
  );
}
