import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Award, Calendar, CheckCircle } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
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

  if (!isOpen || !certificate) return null;

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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FFF9F0] dark:bg-[#242321] border border-[#E9E1D5] dark:border-[#49443E] p-6 sm:p-8 shadow-2xl text-[#242321] dark:text-[#FFF9F0] transition-colors duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#F5EBDD] dark:bg-[#34312D] text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] hover:bg-[#E9E1D5] dark:hover:bg-[#49443E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F47B35]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-2 pr-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#FFF0E6] dark:bg-[#3A2518] text-[#F47B35] border border-[#F47B35]/20 dark:border-[#F47B35]/40">
              <Award className="w-3.5 h-3.5" />
              {certificate.issuer || "Verified Credential"}
            </span>
          </div>

          <h2
            id="modal-cert-title"
            className="text-xl sm:text-2xl font-serif font-bold text-[#242321] dark:text-[#FFF9F0] mb-2"
          >
            {certificate.title}
          </h2>

          {certificate.description && (
            <p className="text-sm text-[#77716A] dark:text-[#C5BDB3] mb-4">
              {certificate.description}
            </p>
          )}

          {/* Certificate Image Preview */}
          <div className="mb-6 rounded-xl overflow-hidden border border-[#E9E1D5] dark:border-[#49443E] bg-[#242321]/5 dark:bg-[#1E1C1A] shadow-inner">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto max-h-[60vh] object-contain mx-auto"
            />
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E9E1D5] dark:border-[#49443E]">
            <div className="flex items-center gap-3">
              {certificate.pdfUrl && (
                <a
                  href={certificate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F47B35] text-[#FFF9F0] text-xs font-semibold hover:bg-[#E06822] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Original Document (PDF)
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold rounded-xl bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0] hover:bg-[#E9E1D5] dark:hover:bg-[#49443E] border border-[#E9E1D5] dark:border-[#49443E] transition-colors ml-auto"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
