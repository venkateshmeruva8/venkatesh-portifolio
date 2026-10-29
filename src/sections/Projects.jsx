import React, { useState } from 'react';
import {
  ExternalLink,
  ArrowRight,
  Database,
  BarChart3,
  Cpu,
  Layers,
  FileCode,
  Calendar,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Github } from '../components/icons/SocialIcons';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Business Intelligence', 'Analytics & EDA', 'Machine Learning', 'Quantitative SQL'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Business Intelligence') return project.category.includes('Business Intelligence') || project.category.includes('Sales');
    if (activeFilter === 'Analytics & EDA') return project.category.includes('Analytics') || project.category.includes('Consumer');
    if (activeFilter === 'Machine Learning') return project.category.includes('AI') || project.technologies.includes('scikit-learn');
    if (activeFilter === 'Quantitative SQL') return project.category.includes('Quantitative') || project.technologies.includes('SQL');
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#FFF9F0] dark:bg-[#242321] border-t border-[#E9E1D5] dark:border-[#49443E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#F47B35] uppercase">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mt-2 mb-4">
                Selected Projects
              </h2>
              <p className="text-base sm:text-lg text-[#77716A] dark:text-[#C5BDB3]">
                End-to-end data pipelines, business intelligence dashboards, quantitative financial querying,
                and applied machine learning applications.
              </p>
              <div className="w-16 h-1 bg-[#F47B35] rounded-full mt-4" />
            </div>

            {/* Filter Tabs */}
            <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeFilter === filter
                      ? 'bg-[#F47B35] text-[#FFF9F0] shadow-xs'
                      : 'bg-[#F5EBDD] dark:bg-[#34312D] text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] hover:bg-[#E9E1D5] dark:hover:bg-[#49443E] border border-[#E9E1D5] dark:border-[#49443E]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 [perspective:1200px]">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              delay={0.08 * idx}
              yOffset={28}
              rotateX={8}
              className="h-full"
            >
              <SpotlightCard
                maxTilt={5}
                className="h-full bg-[#F5EBDD] dark:bg-[#34312D] flex flex-col justify-between group overflow-hidden border border-[#E9E1D5] dark:border-[#49443E] hover:border-[#F47B35]/50 dark:hover:border-[#F47B35]/60 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-[#F47B35]/10 dark:hover:shadow-black/50"
              >
                <div>
                  
                  {/* Card Visual Banner / Preview Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#242321]/5 dark:bg-[#242321]/40 border-b border-[#E9E1D5] dark:border-[#49443E]">
                    {/* Project 1: Actual Power BI Screenshot */}
                    {project.images && project.images.length > 0 ? (
                      <div className="relative w-full h-full overflow-hidden group/img cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <img
                          src={project.images[0].url}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#242321]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <span className="text-xs font-semibold text-[#FFF9F0] flex items-center gap-1.5">
                            Click to expand dashboard view <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    ) : project.id === 'stock-market-analysis' ? (
                      /* Project 5: SQL Window Function Terminal Graphic */
                      <div className="w-full h-full bg-[#242321] p-4 font-mono text-[11px] text-[#FFF9F0] flex flex-col justify-between overflow-hidden">
                        <div className="flex items-center justify-between text-[#DFD5C6] border-b border-[#383633] pb-2">
                          <span className="text-[#F47B35] font-bold">stock_market_analysis.sql</span>
                          <span className="text-[10px]">Tasks 1–13</span>
                        </div>
                        <div className="text-[#DFD5C6]/90 space-y-1 py-1">
                          <p className="text-[#F47B35] font-semibold">-- 20 & 50 Day Moving Averages</p>
                          <p className="text-[#E9E1D5]">AVG(close) OVER (PARTITION BY stock</p>
                          <p className="text-[#E9E1D5] pl-4">ORDER BY date ROWS 19 PRECEDING)</p>
                          <p className="text-[#77716A]">-- Golden Cross buy/sell signal detection</p>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-[#9B948C] pt-1 border-t border-[#383633]">
                          <span>Bajaj Auto · TVS · TCS · Infosys</span>
                          <span className="text-[#F47B35]">Verified SQL</span>
                        </div>
                      </div>
                    ) : project.id === 'nexa-ai-desktop-assistant' ? (
                      /* Project 6: NEXA Voice AI Architecture Graphic */
                      <div className="w-full h-full bg-[#FFF9F0] dark:bg-[#2A2724] p-4 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#F47B35] uppercase">
                            Windows Voice Assistant
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-[#FFF0E6] dark:bg-[#3A2518] text-[10px] font-mono text-[#F47B35] font-bold border border-[#F47B35]/20 dark:border-[#F47B35]/40">
                            Offline ML
                          </span>
                        </div>
                        <div className="space-y-2 py-1">
                          <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F5EBDD] dark:bg-[#34312D] text-xs">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span className="font-mono text-[11px] text-[#242321] dark:text-[#FFF9F0]">TF-IDF Intent Engine</span>
                            <span className="ml-auto text-[10px] text-[#77716A] dark:text-[#C5BDB3]">scikit-learn</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F5EBDD] dark:bg-[#34312D] text-xs">
                            <span className="w-2 h-2 rounded-full bg-[#F47B35]"></span>
                            <span className="font-mono text-[11px] text-[#242321] dark:text-[#FFF9F0]">Voice & System Automation</span>
                            <span className="ml-auto text-[10px] text-[#77716A] dark:text-[#C5BDB3]">Windows API</span>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-[#77716A] dark:text-[#C5BDB3]">
                          Native Desktop Architecture
                        </div>
                      </div>
                    ) : (
                      /* Clean Data Graphic for Analytics Projects 2, 3, 4 */
                      <div className="w-full h-full bg-[#FFF9F0] dark:bg-[#2A2724] p-4 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-semibold text-[#F47B35] uppercase">
                            {project.category}
                          </span>
                          <BarChart3 className="w-4 h-4 text-[#F47B35]" />
                        </div>
                        <div className="space-y-1.5 py-1">
                          <div className="h-2 rounded-full bg-[#F5EBDD] dark:bg-[#34312D] overflow-hidden">
                            <div className="h-full bg-[#F47B35] rounded-full" style={{ width: '78%' }} />
                          </div>
                          <div className="h-2 rounded-full bg-[#F5EBDD] dark:bg-[#34312D] overflow-hidden">
                            <div className="h-full bg-[#DFD5C6] dark:bg-[#49443E] rounded-full" style={{ width: '62%' }} />
                          </div>
                          <div className="h-2 rounded-full bg-[#F5EBDD] dark:bg-[#34312D] overflow-hidden">
                            <div className="h-full bg-[#F47B35]/70 rounded-full" style={{ width: '90%' }} />
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-mono text-[#77716A] dark:text-[#C5BDB3]">
                          <span>Exploratory Analytics</span>
                          <span>Python · SQL · BI</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6">
                    {/* Category & Period */}
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                      <span className="font-mono text-[11px] font-semibold text-[#F47B35] uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.period && (
                        <span className="text-[11px] font-mono text-[#77716A] dark:text-[#C5BDB3]">
                          {project.period}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-bold text-[#242321] dark:text-[#FFF9F0] group-hover:text-[#F47B35] transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    {/* Concise Description */}
                    <p className="text-xs sm:text-sm text-[#77716A] dark:text-[#C5BDB3] line-clamp-3 mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-[#FFF9F0] dark:bg-[#2A2724] text-[#242321] dark:text-[#FFF9F0] border border-[#E9E1D5] dark:border-[#49443E]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-[#FFF9F0] dark:bg-[#2A2724] text-[#77716A] dark:text-[#C5BDB3] border border-[#E9E1D5] dark:border-[#49443E]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-[#E9E1D5]/60 dark:border-[#49443E]/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F47B35] hover:text-[#E06822] transition-colors group/btn focus:outline-none focus:underline"
                  >
                    View Project Details
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#FFF9F0] dark:bg-[#2A2724] text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] border border-[#E9E1D5] dark:border-[#49443E] transition-colors"
                        aria-label={`GitHub repo for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        className="p-1.5 rounded-lg bg-[#FFF9F0]/60 dark:bg-[#2A2724]/60 text-[#DFD5C6] dark:text-[#5E5851] border border-[#E9E1D5] dark:border-[#49443E] cursor-help"
                        title="Repository link configurable in src/data/projectsData.js"
                      >
                        <Github className="w-4 h-4" />
                      </span>
                    )}

                    {project.sqlFile && (
                      <a
                        href={project.sqlFile}
                        download="stock_market_analysis.sql"
                        className="p-1.5 rounded-lg bg-[#FFF9F0] dark:bg-[#2A2724] text-[#F47B35] hover:bg-[#FFF0E6] dark:hover:bg-[#3A2518] border border-[#F47B35]/30 dark:border-[#F47B35]/40 transition-colors"
                        title="Download SQL File"
                      >
                        <FileCode className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
