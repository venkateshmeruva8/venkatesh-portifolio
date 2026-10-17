import React from 'react';
import { ArrowDown, Download, Eye, Mail, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from '../components/icons/SocialIcons';
import BlurText from '../components/reactbits/BlurText';
import DecryptedText from '../components/reactbits/DecryptedText';
import SubtleBackground from '../components/reactbits/SubtleBackground';
import HeroVisual from '../components/HeroVisual';
import { profileData } from '../data/profileData';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
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
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#FFF9F0] dark:bg-[#242321] transition-colors duration-300"
    >
      {/* Subtle React Bits Animated Background */}
      <SubtleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Small Introductory Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E6] dark:bg-[#F47B35]/15 border border-[#F47B35]/25 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#F47B35] animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider text-[#F47B35] uppercase">
                {profileData.heroLabel}
              </span>
            </div>

            {/* Main Heading with React Bits BlurText */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight text-[#242321] dark:text-[#FFF9F0] leading-[1.15]">
                <BlurText
                  text="Hi, I'm Meruva Venkatesh."
                  delay={70}
                  animateBy="words"
                  direction="top"
                />
              </h1>

              {/* Supporting Headline with Decrypted Role Accent */}
              <p className="text-xl sm:text-2xl font-serif italic text-[#77716A] dark:text-[#C5BDB3] leading-relaxed">
                Turning Data Into Insights.{' '}
                <span className="text-[#F47B35] not-italic font-sans font-bold">
                  Building Intelligent Solutions.
                </span>
              </p>
            </div>

            {/* Role Decrypted Pill */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-[#77716A] dark:text-[#C5BDB3]">
              <span className="font-medium text-[#242321] dark:text-[#FFF9F0]">Focus:</span>
              <div className="px-3 py-1 rounded-lg bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] font-mono text-xs font-semibold text-[#242321] dark:text-[#FFF9F0]">
                <DecryptedText
                  text="Aspiring Data Analyst · AI/ML Developer"
                  speed={35}
                  maxIterations={8}
                />
              </div>
            </div>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-[#77716A] dark:text-[#C5BDB3] max-w-2xl leading-relaxed font-normal">
              {profileData.heroDescription}
            </p>

            {/* Location & Institution Tag */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#77716A] dark:text-[#C5BDB3] pt-1">
              <span className="flex items-center gap-1.5 font-medium text-[#242321] dark:text-[#FFF9F0]">
                <MapPin className="w-4 h-4 text-[#F47B35]" />
                {profileData.location}
              </span>
              <span className="text-[#DFD5C6] dark:text-[#49443E] hidden sm:inline">•</span>
              <span className="font-mono text-xs text-[#77716A] dark:text-[#C5BDB3]">
                MVJ College of Engineering (CGPA: 8.71)
              </span>
            </div>

            {/* Primary & Secondary Action CTAs + Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F47B35] text-[#FFF9F0] text-sm font-semibold hover:bg-[#E06822] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore My Work
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* View Resume Button */}
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] text-sm font-semibold border border-[#E9E1D5] dark:border-[#49443E] hover:bg-[#E9E1D5] dark:hover:bg-[#3D3934] transition-all duration-200 hover:-translate-y-0.5"
                title="View verified resume PDF in a new tab"
              >
                <Eye className="w-4 h-4 text-[#F47B35]" />
                View Resume
              </a>

              {/* Download Resume Button */}
              <a
                href={profileData.resumeUrl}
                download="Meruva_Venkatesh_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] text-sm font-semibold border border-[#E9E1D5] dark:border-[#49443E] hover:bg-[#E9E1D5] dark:hover:bg-[#3D3934] transition-all duration-200 hover:-translate-y-0.5"
                title="Download verified resume PDF"
              >
                <Download className="w-4 h-4 text-[#F47B35]" />
                Download Resume
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] hover:text-[#F47B35] hover:bg-[#E9E1D5] dark:hover:bg-[#3D3934] border border-[#E9E1D5] dark:border-[#49443E] transition-colors"
                  aria-label="Meruva Venkatesh GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] hover:text-[#F47B35] hover:bg-[#E9E1D5] dark:hover:bg-[#3D3934] border border-[#E9E1D5] dark:border-[#49443E] transition-colors"
                  aria-label="Meruva Venkatesh LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-3 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] hover:text-[#F47B35] hover:bg-[#E9E1D5] dark:hover:bg-[#3D3934] border border-[#E9E1D5] dark:border-[#49443E] transition-colors"
                  aria-label="Send email to Meruva Venkatesh"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-[#E9E1D5] dark:border-[#49443E] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-serif text-[#242321] dark:text-[#FFF9F0]">8.71</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3]">BE CGPA</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-serif text-[#242321] dark:text-[#FFF9F0]">51K+</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3]">Records Explored</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-serif text-[#242321] dark:text-[#FFF9F0]">2</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3]">Internships</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Custom Data Visualization Motif */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
