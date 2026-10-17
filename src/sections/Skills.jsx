import React, { useState } from 'react';
import {
  Code,
  BarChart3,
  Database,
  Cpu,
  Wrench,
  CheckCircle2,
  Terminal,
  Sparkles
} from 'lucide-react';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import { skillsData } from '../data/skillsData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    'Programming': <Code className="w-5 h-5 text-[#F47B35]" />,
    'Data Analytics & BI': <BarChart3 className="w-5 h-5 text-[#F47B35]" />,
    'Databases': <Database className="w-5 h-5 text-[#F47B35]" />,
    'Machine Learning': <Cpu className="w-5 h-5 text-[#F47B35]" />,
    'Developer Tools': <Wrench className="w-5 h-5 text-[#F47B35]" />
  };

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#FFF9F0] dark:bg-[#242321] border-t border-[#E9E1D5] dark:border-[#49443E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-14">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#F47B35] uppercase">
              Technical Toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mt-2 mb-4">
              Skills & Competencies
            </h2>
            <p className="text-base sm:text-lg text-[#77716A] dark:text-[#C5BDB3]">
              Organized by analytical domains, programming languages, and practical toolchains.
              Focused on data preparation, quantitative querying, and intelligent application development.
            </p>
            <div className="w-16 h-1 bg-[#F47B35] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#F47B35] text-[#FFF9F0] shadow-xs'
                    : 'bg-[#F5EBDD] dark:bg-[#34312D] text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] hover:bg-[#E9E1D5] dark:hover:bg-[#3D3934] border border-[#E9E1D5] dark:border-[#49443E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grouped Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((group, groupIdx) => (
            <ScrollReveal key={group.category} delay={0.1 + groupIdx * 0.08}>
              <SpotlightCard className="h-full bg-[#F5EBDD] dark:bg-[#34312D] border-[#E9E1D5] dark:border-[#49443E] p-6 flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#E9E1D5] dark:border-[#49443E]">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-center">
                      {categoryIcons[group.category] || <Terminal className="w-5 h-5 text-[#F47B35]" />}
                    </div>
                    <div>
                      <h3 className="text-base font-serif font-bold text-[#242321] dark:text-[#FFF9F0]">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#77716A] dark:text-[#C5BDB3]">
                        {group.skills.length} core skills
                      </span>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-[#77716A] dark:text-[#C5BDB3] mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skill Items */}
                  <div className="space-y-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/item p-2.5 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] hover:border-[#F47B35]/50 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs sm:text-sm font-bold text-[#242321] dark:text-[#FFF9F0] group-hover/item:text-[#F47B35] transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FFF0E6] dark:bg-[#F47B35]/15 text-[#F47B35] font-semibold border border-[#F47B35]/20">
                            {skill.highlight}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#77716A] dark:text-[#C5BDB3] leading-snug">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-between text-[11px] text-[#77716A] dark:text-[#C5BDB3] font-mono">
                  <span>Verified Stack</span>
                  <span className="text-[#F47B35]">Ready for Production</span>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
