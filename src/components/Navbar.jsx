import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profileData';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect current section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9F0]/90 dark:bg-[#242321]/90 backdrop-blur-md border-b border-[#E9E1D5] dark:border-[#49443E] shadow-xs py-3'
          : 'bg-[#FFF9F0]/70 dark:bg-[#242321]/70 backdrop-blur-xs py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Meruva Venkatesh Homepage"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F47B35] text-[#FFF9F0] flex items-center justify-center font-bold text-sm sm:text-base tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
              {profileData.monogram}
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm sm:text-base text-[#242321] dark:text-[#FFF9F0] tracking-tight group-hover:text-[#F47B35] transition-colors">
                {profileData.name}
              </span>
              <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3]">
                Data Analyst · AI/ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-[#F47B35] bg-[#FFF0E6] dark:bg-[#F47B35]/15 font-semibold'
                      : 'text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] hover:bg-[#F5EBDD]/60 dark:hover:bg-[#34312D]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F47B35] text-[#FFF9F0] text-xs font-semibold hover:bg-[#E06822] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] hover:bg-[#E9E1D5] dark:hover:bg-[#3D3934] border border-[#E9E1D5] dark:border-[#49443E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F47B35] text-xs font-semibold"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-[#E9E1D5] dark:border-[#49443E] bg-[#FFF9F0] dark:bg-[#242321] px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#F47B35] bg-[#FFF0E6] dark:bg-[#F47B35]/15 font-semibold'
                    : 'text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] hover:bg-[#F5EBDD] dark:hover:bg-[#34312D]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          <div className="pt-2 space-y-2 border-t border-[#E9E1D5] dark:border-[#49443E]">
            <ThemeToggle variant="mobile" />
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F47B35] text-[#FFF9F0] text-sm font-semibold hover:bg-[#E06822]"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
