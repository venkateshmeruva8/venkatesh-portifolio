import React from 'react';
import {
  GraduationCap,
  MapPin,
  Award,
  Sparkles,
  BarChart2,
  Search,
  LayoutDashboard,
  Code2,
  Brain,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import { profileData } from '../data/profileData';

export default function About() {
  const { about } = profileData;

  const interests = [
    {
      icon: <BarChart2 className="w-5 h-5 text-[#F47B35]" />,
      title: "Business Intelligence & Analytics",
      description: "Transforming ambiguous transactional data into executive KPIs, margin indicators, and interactive reports."
    },
    {
      icon: <Search className="w-5 h-5 text-[#F47B35]" />,
      title: "Finding Patterns in Datasets",
      description: "Investigating customer behaviors, distributions, and demographic cohorts using Pandas, NumPy, and statistical exploration."
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 text-[#F47B35]" />,
      title: "Creating Meaningful Dashboards",
      description: "Designing Power BI dashboards that prioritize clarity, intuitive visual hierarchy, and actionable decision-making."
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#F47B35]" />,
      title: "Applying Python & SQL to Practical Problems",
      description: "Writing maintainable scripts and relational window queries to extract insights and solve concrete operational questions."
    },
    {
      icon: <Brain className="w-5 h-5 text-[#F47B35]" />,
      title: "Building ML-Powered Applications",
      description: "Developing intelligent desktop systems like NEXA with scikit-learn intent classification and speech interaction."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFF9F0] dark:bg-[#242321] border-t border-[#E9E1D5] dark:border-[#49443E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#F47B35] uppercase">
              Background & Focus
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mt-2 mb-4">
              {about.heading}
            </h2>
            <div className="w-16 h-1 bg-[#F47B35] rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Interest Grid */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="prose prose-neutral max-w-none text-base sm:text-lg text-[#77716A] dark:text-[#C5BDB3] leading-relaxed space-y-4">
                <p>
                  I am a Computer Science & Engineering student specializing in{' '}
                  <span className="font-semibold text-[#242321] dark:text-[#FFF9F0]">
                    Data Science at MVJ College of Engineering, Bengaluru
                  </span>{' '}
                  (Graduation: 2023–2027).
                </p>
                <p>
                  My work is centered around the full data lifecycle: cleaning messy datasets,
                  structuring analytical queries with SQL, deriving exploratory patterns with Python,
                  and presenting key metrics through intuitive Power BI dashboards. I combine
                  analytical reasoning with engineering fundamentals to build solutions that turn raw
                  numbers into clear business actions.
                </p>
              </div>
            </ScrollReveal>

            {/* Core Areas of Interest */}
            <ScrollReveal delay={0.2}>
              <div className="pt-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3] mb-4">
                  What I Focus On
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {interests.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] hover:border-[#F47B35]/50 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-center mb-3">
                        {item.icon}
                      </div>
                      <h4 className="text-sm font-semibold text-[#242321] dark:text-[#FFF9F0] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#77716A] dark:text-[#C5BDB3] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Compact Professional Education & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.25}>
              <SpotlightCard className="bg-[#F5EBDD] dark:bg-[#34312D] p-6 sm:p-7 shadow-xs border-[#E9E1D5] dark:border-[#49443E]">
                
                {/* Header */}
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-[#E9E1D5] dark:border-[#49443E]">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-center text-[#F47B35]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#F47B35] uppercase tracking-wider font-semibold">
                      Education Summary
                    </span>
                    <h3 className="text-lg font-serif font-bold text-[#242321] dark:text-[#FFF9F0]">
                      MVJ College of Engineering
                    </h3>
                  </div>
                </div>

                {/* Main Degree */}
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3] mb-1">
                      Degree & Specialization
                    </p>
                    <p className="text-sm font-semibold text-[#242321] dark:text-[#FFF9F0]">
                      Bachelor of Engineering (B.E.)
                    </p>
                    <p className="text-sm text-[#77716A] dark:text-[#C5BDB3]">
                      Computer Science & Engineering (Data Science)
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E]">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3] mb-0.5">
                        Current CGPA
                      </p>
                      <p className="text-xl font-bold font-serif text-[#242321] dark:text-[#FFF9F0]">
                        8.71
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E]">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3] mb-0.5">
                        Duration
                      </p>
                      <p className="text-sm font-semibold text-[#242321] dark:text-[#FFF9F0] pt-1">
                        2023 – 2027
                      </p>
                    </div>
                  </div>
                </div>

                {/* Previous Education Records */}
                <div className="space-y-2.5 pt-4 border-t border-[#E9E1D5] dark:border-[#49443E]">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3] mb-2 font-semibold">
                    Academic Track Record
                  </p>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] text-xs">
                    <div>
                      <span className="font-semibold text-[#242321] dark:text-[#FFF9F0] block">
                        Class 12 (Pre-University)
                      </span>
                      <span className="text-[#77716A] dark:text-[#C5BDB3]">Year: 2023</span>
                    </div>
                    <span className="font-mono font-bold text-sm text-[#F47B35] px-2.5 py-1 rounded-md bg-[#FFF0E6] dark:bg-[#F47B35]/15">
                      96.0%
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] text-xs">
                    <div>
                      <span className="font-semibold text-[#242321] dark:text-[#FFF9F0] block">
                        Class 10 (Secondary School)
                      </span>
                      <span className="text-[#77716A] dark:text-[#C5BDB3]">Year: 2021</span>
                    </div>
                    <span className="font-mono font-bold text-sm text-[#F47B35] px-2.5 py-1 rounded-md bg-[#FFF0E6] dark:bg-[#F47B35]/15">
                      98.0%
                    </span>
                  </div>
                </div>

                {/* Location Footer */}
                <div className="mt-6 pt-4 border-t border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-between text-xs text-[#77716A] dark:text-[#C5BDB3]">
                  <span className="flex items-center gap-1.5 font-medium text-[#242321] dark:text-[#FFF9F0]">
                    <MapPin className="w-3.5 h-3.5 text-[#F47B35]" />
                    Bengaluru, Karnataka, India
                  </span>
                  <span className="font-mono text-[11px] text-[#F47B35]">
                    Open to Opportunities
                  </span>
                </div>

              </SpotlightCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
