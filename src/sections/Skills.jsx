import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  BarChart3,
  Database,
  Cpu,
  Wrench,
  Sparkles,
  Terminal
} from 'lucide-react';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import TiltCard from '../components/reactbits/TiltCard';
import { skillsData } from '../data/skillsData';
import { SkillLogo } from '../components/icons/SkillLogos';

export default function Skills() {
  const categoryIcons = {
    'Programming Languages': <Code className="w-4 h-4 text-[#F47B35]" />,
    'Data Analytics': <BarChart3 className="w-4 h-4 text-[#F47B35]" />,
    'Databases': <Database className="w-4 h-4 text-[#F47B35]" />,
    'AI & Machine Learning': <Cpu className="w-4 h-4 text-[#F47B35]" />,
    'Tools & Development': <Wrench className="w-4 h-4 text-[#F47B35]" />,
    'Analytics Concepts': <Sparkles className="w-4 h-4 text-[#F47B35]" />
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 bg-[#FFF9F0] dark:bg-[#242321] border-t border-[#E9E1D5] dark:border-[#49443E] transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F47B35]" />
              <span className="text-xs font-mono font-semibold tracking-wider text-[#F47B35] uppercase">
                Technical Toolkit
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mt-1 mb-3">
              Skills & Competencies
            </h2>
            <p className="text-sm sm:text-base text-[#77716A] dark:text-[#C5BDB3]">
              Core technologies, analytical frameworks, and practical toolchains.
            </p>
            <div className="w-14 h-1 bg-[#F47B35] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* 6 Category Cards in a Balanced 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 [perspective:1200px]">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30, scale: 0.96, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: groupIdx * 0.07,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="h-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <TiltCard
                maxTilt={6}
                scale={1.015}
                className="h-full bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#F47B35]/10 dark:hover:shadow-black/50 hover:border-[#F47B35]/40 dark:hover:border-[#F47B35]/40 transition-shadow duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div
                    className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E9E1D5] dark:border-[#49443E]"
                    style={{ transform: 'translateZ(14px)' }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-center shrink-0 shadow-2xs">
                        {categoryIcons[group.category] || <Terminal className="w-4 h-4 text-[#F47B35]" />}
                      </div>
                      <h3 className="text-sm sm:text-base font-serif font-bold text-[#242321] dark:text-[#FFF9F0] tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#77716A] dark:text-[#C5BDB3] px-2 py-0.5 rounded-md bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E]">
                      {group.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Grid - Displaying only logo and name */}
                  <div
                    className="grid grid-cols-2 gap-2 sm:gap-2.5"
                    style={{ transform: 'translateZ(18px)' }}
                  >
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/chip relative flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] hover:border-[#F47B35]/60 dark:hover:border-[#F47B35]/60 hover:bg-[#FFFFFF] dark:hover:bg-[#302D29] hover:shadow-md hover:shadow-[#F47B35]/10 dark:hover:shadow-[#F47B35]/15 transition-all duration-200 cursor-default select-none"
                        style={{ transform: 'translateZ(12px)' }}
                      >
                        {/* Recognizable SVG Icon */}
                        <div className="w-7 h-7 rounded-lg bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-center shrink-0 p-1 group-hover/chip:scale-110 group-hover/chip:border-[#F47B35]/40 transition-all duration-200 shadow-2xs">
                          <SkillLogo name={skill.icon} className="w-4.5 h-4.5 shrink-0" />
                        </div>

                        {/* Skill Name */}
                        <span className="text-xs sm:text-sm font-semibold text-[#242321] dark:text-[#FFF9F0] group-hover/chip:text-[#F47B35] transition-colors duration-200 leading-snug">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
