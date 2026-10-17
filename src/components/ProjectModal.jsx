import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Database,
  BarChart3,
  Calendar,
  Layers,
  CheckCircle2,
  Copy,
  Check,
  Download,
  AlertTriangle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Github } from './icons/SocialIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#242321]/60 dark:bg-black/75 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FFF9F0] dark:bg-[#242321] border border-[#E9E1D5] dark:border-[#49443E] p-6 sm:p-8 shadow-2xl text-[#242321] dark:text-[#FFF9F0] transition-colors duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#F5EBDD] dark:bg-[#34312D] text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] hover:bg-[#E9E1D5] dark:hover:bg-[#49443E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F47B35]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Period */}
          <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#FFF0E6] dark:bg-[#3A2518] text-[#F47B35] border border-[#F47B35]/20 dark:border-[#F47B35]/40">
              {project.category}
            </span>
            {project.period && (
              <span className="flex items-center gap-1 text-xs text-[#77716A] dark:text-[#C5BDB3] font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {project.period}
              </span>
            )}
          </div>

          {/* Title */}
          <h2
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mb-2 leading-tight"
          >
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="text-sm sm:text-base text-[#77716A] dark:text-[#C5BDB3] mb-6 font-medium">
              {project.subtitle}
            </p>
          )}

          {/* Screenshots Gallery if available */}
          {project.images && project.images.length > 0 && (
            <div className="mb-8 rounded-xl overflow-hidden border border-[#E9E1D5] dark:border-[#49443E] bg-[#F5EBDD]/60 dark:bg-[#34312D]/60 p-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#242321]/5 dark:bg-[#1E1C1A]">
                <img
                  src={project.images[activeImageIndex].url}
                  alt={project.images[activeImageIndex].caption}
                  className="w-full h-full object-contain"
                />
                {project.images.length > 1 && (
                  <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === 0 ? project.images.length - 1 : prev - 1
                        )
                      }
                      className="pointer-events-auto p-2 rounded-full bg-[#FFF9F0]/90 dark:bg-[#242321]/90 text-[#242321] dark:text-[#FFF9F0] shadow-md hover:bg-white dark:hover:bg-[#34312D] hover:text-[#F47B35] transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === project.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="pointer-events-auto p-2 rounded-full bg-[#FFF9F0]/90 dark:bg-[#242321]/90 text-[#242321] dark:text-[#FFF9F0] shadow-md hover:bg-white dark:hover:bg-[#34312D] hover:text-[#F47B35] transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
              <p className="mt-2 text-center text-xs text-[#77716A] dark:text-[#C5BDB3] px-2 font-medium">
                {project.images[activeImageIndex].caption} ({activeImageIndex + 1} of{' '}
                {project.images.length})
              </p>
            </div>
          )}

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] border border-[#E9E1D5] dark:border-[#49443E]"
                >
                  <p className="text-xs uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3] font-semibold mb-1">
                    {m.label}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-[#242321] dark:text-[#FFF9F0]">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Deep Dive Description */}
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#242321] dark:text-[#FFF9F0] mb-2">
              Project Overview & Methodology
            </h3>
            <p className="text-sm sm:text-base text-[#77716A] dark:text-[#C5BDB3] leading-relaxed">
              {project.longDescription || project.shortDescription}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#242321] dark:text-[#FFF9F0] mb-3">
                Key Analytical Accomplishments
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#77716A] dark:text-[#C5BDB3]">
                    <CheckCircle2 className="w-4 h-4 text-[#F47B35] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* SQL Preview if available (e.g., Stock Market Project) */}
          {project.sqlPreview && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#242321] dark:text-[#FFF9F0] flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-[#F47B35]" />
                  Verified SQL Analysis Code Sample
                </h3>
                <button
                  onClick={() => handleCopyCode(project.sqlPreview)}
                  className="flex items-center gap-1 text-xs text-[#77716A] dark:text-[#C5BDB3] hover:text-[#F47B35] transition-colors py-1 px-2 rounded-md hover:bg-[#F5EBDD] dark:hover:bg-[#34312D]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                      <span className="text-green-600 dark:text-green-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Query</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-[#242321] text-[#FFF9F0] text-xs font-mono overflow-x-auto leading-relaxed border border-[#383633]">
                <code>{project.sqlPreview}</code>
              </pre>
              {project.sqlFile && (
                <div className="mt-2 flex items-center justify-end">
                  <a
                    href={project.sqlFile}
                    download="stock_market_analysis.sql"
                    className="inline-flex items-center gap-1.5 text-xs text-[#F47B35] hover:underline font-semibold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download complete stock_market_analysis.sql
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Sensitive Project Disclaimer */}
          {project.disclaimer && (
            <div className="mb-6 p-3 rounded-xl bg-[#FFF0E6] dark:bg-[#3A2518]/70 border border-[#F47B35]/30 dark:border-[#F47B35]/50 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#F47B35] shrink-0 mt-0.5" />
              <p className="text-xs text-[#242321]/90 dark:text-[#FFF9F0]/90 leading-relaxed font-medium">
                {project.disclaimer}
              </p>
            </div>
          )}

          {/* Technology Badges */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3] mb-2">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] border border-[#E9E1D5] dark:border-[#49443E]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E9E1D5] dark:border-[#49443E]">
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#242321] dark:bg-[#34312D] text-[#FFF9F0] text-xs font-semibold hover:bg-[#383633] dark:hover:bg-[#49443E] border border-transparent dark:border-[#49443E] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Repository
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#77716A] dark:text-[#C5BDB3] text-xs font-medium border border-[#E9E1D5] dark:border-[#49443E]" title="Configurable in src/data/projectsData.js">
                  <Github className="w-3.5 h-3.5" />
                  Repository Link Configurable
                </span>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F47B35] text-[#FFF9F0] text-xs font-semibold hover:bg-[#E06822] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] hover:bg-[#E9E1D5] dark:hover:bg-[#49443E] border border-[#E9E1D5] dark:border-[#49443E] transition-colors ml-auto"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
