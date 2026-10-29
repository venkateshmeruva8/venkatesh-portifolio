import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  FileCheck,
  Building2,
  ExternalLink,
  Award
} from 'lucide-react';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import CertificateModal from '../components/CertificateModal';
import { experienceData } from '../data/experienceData';

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FFF9F0] dark:bg-[#242321] border-t border-[#E9E1D5] dark:border-[#49443E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#F47B35] uppercase">
              Career Trajectory
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mt-2 mb-4">
              Internship Experience
            </h2>
            <p className="text-base sm:text-lg text-[#77716A] dark:text-[#C5BDB3]">
              Practical experience applying analytical methodologies, structured querying, and business
              intelligence to real-world corporate problem sets.
            </p>
            <div className="w-16 h-1 bg-[#F47B35] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 [perspective:1200px]">
          {experienceData.map((exp, idx) => (
            <ScrollReveal
              key={exp.id}
              delay={0.1 * idx}
              yOffset={28}
              rotateX={8}
              className="h-full"
            >
              <SpotlightCard
                maxTilt={4}
                className="h-full bg-[#F5EBDD] dark:bg-[#34312D] p-6 sm:p-8 flex flex-col justify-between border border-[#E9E1D5] dark:border-[#49443E] transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-[#F47B35]/10 dark:hover:shadow-black/50"
              >
                <div>
                  
                  {/* Top Bar: Company & Duration */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-5 mb-5 border-b border-[#E9E1D5] dark:border-[#49443E]">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-center text-[#F47B35] shrink-0">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0]">
                          {exp.company}
                        </h3>
                        <p className="text-sm font-semibold text-[#F47B35]">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F0] dark:bg-[#2A2724] text-xs font-mono font-medium text-[#77716A] dark:text-[#C5BDB3] border border-[#E9E1D5] dark:border-[#49443E]">
                        <Calendar className="w-3.5 h-3.5 text-[#F47B35]" />
                        {exp.period}
                      </span>
                      {exp.internId && (
                        <p className="text-[10px] font-mono text-[#9B948C] dark:text-[#807971] mt-1">
                          {exp.internId}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3]">
                      Core Contributions
                    </p>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#77716A] dark:text-[#C5BDB3] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#F47B35] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3] mb-2">
                      Tools & Methodologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#FFF9F0] dark:bg-[#2A2724] text-[#242321] dark:text-[#FFF9F0] border border-[#E9E1D5] dark:border-[#49443E]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Action: View Verification Certificate */}
                <div className="pt-4 border-t border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#77716A] dark:text-[#C5BDB3] flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#F47B35]" />
                    Verified Experience
                  </span>

                  {exp.certificateImg && (
                    <button
                      onClick={() =>
                        setSelectedCert({
                          title: `${exp.company} — ${exp.role} Certificate`,
                          issuer: exp.company,
                          image: exp.certificateImg,
                          pdfUrl: exp.certificatePdf,
                          description: `Official completion certificate for ${exp.role} at ${exp.company} (${exp.period}).`
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F47B35] hover:text-[#E06822] transition-colors focus:outline-none"
                    >
                      <Award className="w-3.5 h-3.5" />
                      View Certificate
                    </button>
                  )}
                </div>

              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
