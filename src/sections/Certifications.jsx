import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  CheckCircle2,
  FileCheck,
  Eye,
  GraduationCap
} from 'lucide-react';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import CertificateModal from '../components/CertificateModal';
import { certificationsData } from '../data/certificationsData';
import { profileData } from '../data/profileData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-[#FFF9F0] dark:bg-[#242321] border-t border-[#E9E1D5] dark:border-[#49443E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#F47B35] uppercase">
              Verified Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mt-2 mb-4">
              Education & Certifications
            </h2>
            <p className="text-base sm:text-lg text-[#77716A] dark:text-[#C5BDB3]">
              Formal technical training, professional assessments, and verified credentials across
              Python, SQL database systems, analytics, and spreadsheets.
            </p>
            <div className="w-16 h-1 bg-[#F47B35] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificationsData.map((cert, idx) => (
            <ScrollReveal key={cert.id} delay={0.08 * idx}>
              <SpotlightCard className="h-full bg-[#F5EBDD] dark:bg-[#34312D] flex flex-col justify-between overflow-hidden border border-[#E9E1D5] dark:border-[#49443E] hover:border-[#F47B35]/50 dark:hover:border-[#F47B35]/60 transition-colors">
                <div>
                  
                  {/* Certificate Thumbnail Preview */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-[#242321]/5 dark:bg-[#242321]/40 cursor-pointer group/thumb border-b border-[#E9E1D5] dark:border-[#49443E]"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#242321]/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-xl bg-[#FFF9F0] dark:bg-[#242321] text-[#242321] dark:text-[#FFF9F0] text-xs font-semibold flex items-center gap-1.5 shadow-md">
                        <Eye className="w-3.5 h-3.5 text-[#F47B35]" />
                        Inspect Certificate
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded-md bg-[#FFF0E6] dark:bg-[#3A2518] text-[10px] font-mono font-bold text-[#F47B35] uppercase tracking-wider border border-[#F47B35]/20 dark:border-[#F47B35]/40">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono text-[#77716A] dark:text-[#C5BDB3]">
                        {cert.category}
                      </span>
                    </div>

                    <h3 className="text-base font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mb-2 leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-[#77716A] dark:text-[#C5BDB3] line-clamp-3 leading-relaxed mb-3">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {cert.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[10px] rounded bg-[#FFF9F0] dark:bg-[#2A2724] text-[#242321] dark:text-[#FFF9F0] border border-[#E9E1D5] dark:border-[#49443E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2 px-3 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] text-xs font-semibold text-[#242321] dark:text-[#FFF9F0] hover:text-[#F47B35] dark:hover:text-[#F47B35] hover:border-[#F47B35]/40 border border-[#E9E1D5] dark:border-[#49443E] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#F47B35]" />
                    View Details & Document
                  </button>
                </div>

              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Academic Foundation Summary Banner */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-3xl p-6 sm:p-8 bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F47B35] font-semibold uppercase">
                <GraduationCap className="w-4 h-4" />
                Academic Baseline & Degree
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0]">
                MVJ College of Engineering, Bengaluru
              </h3>
              <p className="text-xs sm:text-sm text-[#77716A] dark:text-[#C5BDB3]">
                Bachelor of Engineering in Computer Science & Engineering (Data Science) · Batch of 2023–2027
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center justify-start md:justify-end">
              <div className="p-3.5 rounded-2xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] text-center min-w-[110px]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3]">Current CGPA</p>
                <p className="text-2xl font-serif font-bold text-[#F47B35]">8.71</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] text-center min-w-[110px]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3]">Class 12</p>
                <p className="text-2xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0]">96%</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] text-center min-w-[110px]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3]">Class 10</p>
                <p className="text-2xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0]">98%</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

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
