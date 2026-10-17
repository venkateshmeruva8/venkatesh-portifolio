import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from '../components/icons/SocialIcons';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import { profileData } from '../data/profileData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFF9F0] dark:bg-[#242321] border-t border-[#E9E1D5] dark:border-[#49443E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#F47B35] uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mt-2 mb-4">
              Let's build something meaningful.
            </h2>
            <p className="text-base sm:text-lg text-[#77716A] dark:text-[#C5BDB3]">
              Have a project, internship opportunity, or collaboration in mind? I'd love to connect.
            </p>
            <div className="w-16 h-1 bg-[#F47B35] rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Contact Info & Links */}
        <div className="max-w-3xl space-y-6">
          
          {/* Primary Email Card */}
          <ScrollReveal delay={0.1}>
            <SpotlightCard className="bg-[#F5EBDD] dark:bg-[#34312D] p-6 sm:p-7 border border-[#E9E1D5] dark:border-[#49443E]">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] border border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-center text-[#F47B35]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#77716A] dark:text-[#C5BDB3] uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-base sm:text-lg font-semibold text-[#242321] dark:text-[#FFF9F0] hover:text-[#F47B35] dark:hover:text-[#F47B35] transition-colors break-all"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-[#E9E1D5] dark:border-[#49443E]">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FFF9F0] dark:bg-[#2A2724] text-xs font-semibold text-[#242321] dark:text-[#FFF9F0] hover:bg-[#E9E1D5] dark:hover:bg-[#49443E] border border-[#E9E1D5] dark:border-[#49443E] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                      <span className="text-green-600 dark:text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#F47B35]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F47B35] text-xs font-semibold text-[#FFF9F0] hover:bg-[#E06822] shadow-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Social Links Cards */}
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] hover:border-[#F47B35]/40 dark:hover:border-[#F47B35]/60 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Linkedin className="w-5 h-5 text-[#F47B35]" />
                  <ExternalLink className="w-3.5 h-3.5 text-[#77716A] dark:text-[#C5BDB3] group-hover:text-[#F47B35] transition-colors" />
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3]">Professional</p>
                <p className="text-sm font-bold text-[#242321] dark:text-[#FFF9F0] group-hover:text-[#F47B35] transition-colors">
                  LinkedIn Profile
                </p>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] hover:border-[#F47B35]/40 dark:hover:border-[#F47B35]/60 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Github className="w-5 h-5 text-[#F47B35]" />
                  <ExternalLink className="w-3.5 h-3.5 text-[#77716A] dark:text-[#C5BDB3] group-hover:text-[#F47B35] transition-colors" />
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3]">Repositories</p>
                <p className="text-sm font-bold text-[#242321] dark:text-[#FFF9F0] group-hover:text-[#F47B35] transition-colors">
                  GitHub Profile
                </p>
              </a>
            </div>
          </ScrollReveal>

          {/* Location & Status Card */}
          <ScrollReveal delay={0.2}>
            <SpotlightCard className="p-5 sm:p-6 rounded-2xl bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F47B35] font-semibold">
                <MapPin className="w-4 h-4" />
                Location & Availability
              </div>
              <p className="text-sm font-bold text-[#242321] dark:text-[#FFF9F0]">
                Bengaluru, Karnataka, India
              </p>
              <p className="text-xs text-[#77716A] dark:text-[#C5BDB3] leading-relaxed">
                Actively open for Data Analyst, Business Intelligence, and AI/ML internship and early-career opportunities.
              </p>
            </SpotlightCard>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
