import React, { useState } from 'react';
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
import SpotlightCard from '../components/reactbits/SpotlightCard';
import { skillsData } from '../data/skillsData';
import { SkillLogo } from '../components/icons/SkillLogos';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    'Programming Languages': <Code className="w-5 h-5 text-[#F47B35]" />,
    'Data Analytics': <BarChart3 className="w-5 h-5 text-[#F47B35]" />,
    'Databases': <Database className="w-5 h-5 text-[#F47B35]" />,
    'AI & Machine Learning': <Cpu className="w-5 h-5 text-[#F47B35]" />,
    'Tools & Development': <Wrench className="w-5 h-5 text-[#F47B35]" />,
    'Analytics Concepts': <Sparkles className="w-5 h-5 text-[#F47B35]" />
  };

  const categoryDomainTags = {
    'Programming Languages': 'Execution Engine',
    'Data Analytics': 'Insights & Analytics',
    'Databases': 'Storage & Schemas',
    'AI & Machine Learning': 'Predictive Intelligence',
    'Tools & Development': 'Workflows & Tooling',
    'Analytics Concepts': 'Analytical Frameworks'
  };

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  const totalSkillsCount = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#FFF9F0] dark:bg-[#242321] border-t border-[#E9E1D5] dark:border-[#49443E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F47B35]" />
              <span className="text-xs font-mono font-semibold tracking-wider text-[#F47B35] uppercase">
                Technical Toolkit
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mt-1 mb-4">
              Skills & Competencies
            </h2>
            <p className="text-base sm:text-lg text-[#77716A] dark:text-[#C5BDB3] leading-relaxed">
              Organized into 6 core analytical domains and practical toolchains.
              Covering data preparation, quantitative querying, statistical machine learning, and business intelligence dashboards.
            </p>
            <div className="w-16 h-1 bg-[#F47B35] rounded-full mt-5" />
          </div>
        </ScrollReveal>

        {/* Category Filter Pills & Metrics */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#F47B35] text-[#FFF9F0] shadow-sm shadow-[#F47B35]/25 ring-2 ring-[#F47B35]/20'
                      : 'bg-[#F5EBDD] dark:bg-[#34312D] text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] hover:bg-[#EAE0D1] dark:hover:bg-[#3D3934] border border-[#E9E1D5] dark:border-[#49443E]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#77716A] dark:text-[#C5BDB3] px-3 py-1.5 rounded-xl bg-[#F5EBDD]/60 dark:bg-[#34312D]/60 border border-[#E9E1D5] dark:border-[#49443E]">
              <span className="text-[#F47B35] font-semibold">{skillsData.length}</span> Domains
              <span>·</span>
              <span className="text-[#F47B35] font-semibold">{totalSkillsCount}</span> Verified Skills
            </div>
          </div>
        </ScrollReveal>

        {/* Grouped Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((group, groupIdx) => (
            <ScrollReveal key={group.category} delay={0.08 + groupIdx * 0.06}>
              <SpotlightCard className="h-full bg-[#F5EBDD] dark:bg-[#34312D] border-[#E9E1D5] dark:border-[#49443E] p-6 flex flex-col justify-between rounded-2xl hover:shadow-md transition-shadow">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#E9E1D5] dark:border-[#49443E]">
                    <div className="w-11 h-11 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-center shrink-0 shadow-2xs">
                      {categoryIcons[group.category] || <Terminal className="w-5 h-5 text-[#F47B35]" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-serif font-bold text-[#242321] dark:text-[#FFF9F0] truncate">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#77716A] dark:text-[#C5BDB3]">
                        {group.skills.length} core {group.skills.length === 1 ? 'competency' : 'competencies'}
                      </span>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-[#77716A] dark:text-[#C5BDB3] mb-5 leading-relaxed min-h-[32px]">
                    {group.description}
                  </p>

                  {/* Skill Items with Recognizable Logos */}
                  <div className="space-y-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/item p-3 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] hover:border-[#F47B35]/50 hover:shadow-xs transition-all duration-200"
                      >
                        <div className="flex items-start gap-3">
                          {/* Recognizable SVG Technology Logo / Icon */}
                          <div className="w-8 h-8 rounded-lg bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-center shrink-0 p-1.5 shadow-2xs group-hover/item:border-[#F47B35]/40 transition-colors">
                            <SkillLogo name={skill.icon} className="w-5 h-5 shrink-0" />
                          </div>

                          {/* Skill Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-1.5 mb-0.5">
                              <h4 className="text-xs sm:text-[13px] font-bold text-[#242321] dark:text-[#FFF9F0] group-hover/item:text-[#F47B35] transition-colors leading-snug">
                                {skill.name}
                              </h4>
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-[#FFF0E6] dark:bg-[#F47B35]/15 text-[#F47B35] font-semibold border border-[#F47B35]/20 shrink-0 whitespace-nowrap">
                                {skill.highlight}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#77716A] dark:text-[#C5BDB3] leading-snug">
                              {skill.note}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Tag */}
                <div className="mt-6 pt-3.5 border-t border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-between text-[11px] text-[#77716A] dark:text-[#C5BDB3] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Applied Stack</span>
                  </div>
                  <span className="text-[#F47B35] font-semibold">
                    {categoryDomainTags[group.category] || 'Production Ready'}
                  </span>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
