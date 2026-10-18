import React from 'react';

/**
 * High-fidelity, scalable SVG logos and icons for technical skills
 */

export function PythonLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Python" {...props}>
      <path
        fill="#3776AB"
        d="M11.91 2c-3.13 0-2.94 1.36-2.94 1.36l.01 1.41h2.98v.43H6.04S4 4.97 4 8.13c0 3.17 1.77 3.06 1.77 3.06h1.06v-1.5c0-1.72 1.48-1.63 1.48-1.63h2.93c1.43 0 1.4-1.38 1.4-1.38V3.41S12.98 2 11.91 2zm-1.6 1.02a.64.64 0 1 1 0 1.28.64.64 0 0 1 0-1.28z"
      />
      <path
        fill="#FFD438"
        d="M12.09 22c3.13 0 2.94-1.36 2.94-1.36l-.01-1.41h-2.98v-.43h5.92s2.04.23 2.04-2.93c0-3.17-1.77-3.06-1.77-3.06h-1.06v1.5c0 1.72-1.48 1.63-1.48 1.63h-2.93c-1.43 0-1.4 1.38-1.4 1.38v3.27s-.34 1.41.73 1.41zm1.6-1.02a.64.64 0 1 1 0-1.28.64.64 0 0 1 0 1.28z"
      />
    </svg>
  );
}

export function SqlLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="SQL" {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="2.8" stroke="#F47B35" />
      <path d="M4 5v14c0 1.55 3.58 2.8 8 2.8s8-1.25 8-2.8V5" stroke="#F47B35" />
      <path d="M4 12c0 1.55 3.58 2.8 8 2.8s8-1.25 8-2.8" stroke="#F47B35" />
      <path d="M8 12.5l2 2-2 2" stroke="#242321" className="stroke-[#242321] dark:stroke-[#FFF9F0]" strokeWidth="1.8" />
      <path d="M12.5 16.5h3.5" stroke="#242321" className="stroke-[#242321] dark:stroke-[#FFF9F0]" strokeWidth="1.8" />
    </svg>
  );
}

export function ExcelLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Microsoft Excel" {...props}>
      <rect x="2" y="3" width="20" height="18" rx="2.5" fill="#107C41" />
      <path fill="#FFF" fillOpacity=".25" d="M11 3h9a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-9V3z" />
      <path fill="#FFF" d="M13.5 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6z" />
      <rect x="2" y="4" width="10" height="16" rx="1.5" fill="#185C37" />
      <path fill="#FFF" d="M4.6 7.8h1.8l1.3 2.5 1.3-2.5h1.7L8.6 12l2.2 4.2H9.1L7.7 13.4l-1.4 2.8H4.5l2.2-4.2-2.1-4.2z" />
    </svg>
  );
}

export function PowerBiLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Microsoft Power BI" {...props}>
      <rect x="15" y="3" width="5.5" height="18" rx="1.5" fill="#D99B00" />
      <rect x="9.25" y="7.5" width="5.5" height="13.5" rx="1.5" fill="#F2C811" />
      <rect x="3.5" y="12" width="5.5" height="9" rx="1.5" fill="#F6D751" />
    </svg>
  );
}

export function PandasLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Pandas" {...props}>
      <rect x="3" y="4" width="4" height="16" rx="1" fill="#150458" className="fill-[#150458] dark:fill-[#A594F9]" />
      <rect x="10" y="8" width="4" height="12" rx="1" fill="#E70488" />
      <rect x="17" y="12" width="4" height="8" rx="1" fill="#00D2B4" />
      <rect x="10" y="4" width="4" height="2.5" rx="0.5" fill="#FFD438" />
      <rect x="17" y="8" width="4" height="2.5" rx="0.5" fill="#150458" className="fill-[#150458] dark:fill-[#A594F9]" />
    </svg>
  );
}

export function NumPyLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="NumPy" {...props}>
      <path fill="#4DABCF" d="M12 2.5l8 4.6v9.8l-8 4.6-8-4.6V7.1L12 2.5z" />
      <path fill="#013243" d="M12 4.2l6.5 3.7v7.8L12 19.4l-6.5-3.7V7.9L12 4.2z" />
      <path fill="#4DABCF" d="M8 8.5v7h2.2v-4.2l3.6 4.2H16v-7h-2.2v4.2L10.2 8.5H8z" />
    </svg>
  );
}

export function MySqlLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="MySQL" {...props}>
      <path fill="#00758F" d="M12 3C7.03 3 3 7.03 3 12c0 3.2 1.68 6.01 4.22 7.6L6 21l3.5-1.1c.78.23 1.62.36 2.5.36 4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
      <path fill="#F29111" d="M13.2 7.2c-.3 0-.6.1-.8.3-.4.3-.5.9-.2 1.4.3.4.8.6 1.3.4.5-.2.8-.7.7-1.2 0-.5-.4-.9-1-.9zm-2.8 2.2c-.6.2-1 .7-.9 1.3.1.6.6 1 1.2.9.6-.1 1.1-.6 1-1.2-.1-.6-.7-1-1.3-1zm4.8.8c-.5 0-1 .4-1 .9 0 .6.4 1.1 1 1.1.5 0 1-.4 1-.9 0-.6-.5-1.1-1-1.1z" />
      <path fill="none" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" d="M8 15c1.5 1.5 4.5 1.5 6 0" />
    </svg>
  );
}

export function SqliteLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="SQLite" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#003B57" />
      <path fill="#00A8E8" d="M12 5.5c3.5 0 6.5.8 6.5 1.8S15.5 9 12 9s-6.5-.8-6.5-1.8S8.5 5.5 12 5.5z" />
      <path fill="none" stroke="#00A8E8" strokeWidth="1.5" d="M5.5 11.5c1.2.6 3.6 1 6.5 1s5.3-.4 6.5-1m-13 4c1.2.6 3.6 1 6.5 1s5.3-.4 6.5-1" />
      <path fill="#FFF" d="M10 8.5L8.5 13h2l-1 3.5 3.5-4h-2l1-4h-2z" />
    </svg>
  );
}

export function NoSqlLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="NoSQL" {...props}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" fill="#47A248" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" fill="#13AA52" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" fill="#13AA52" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" fill="#47A248" />
      <path d="M10.5 6.75h3M6.75 10.5v3M17.25 10.5v3M10.5 17.25h3" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" opacity=".8" />
    </svg>
  );
}

export function GitLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Git" {...props}>
      <path
        fill="#F05032"
        d="M21.62 10.45L13.55 2.38a2.22 2.22 0 0 0-3.14 0l-1.6 1.6 3.65 3.65a2.12 2.12 0 0 1 2.68 2.69l3.52 3.52a2.12 2.12 0 1 1-1.57 1.55l-3.29-3.29v4.2a2.12 2.12 0 1 1-2.22 2.1V11.2a2.12 2.12 0 0 1-1.15-2.77L7.04 5.04 2.38 9.7a2.22 2.22 0 0 0 0 3.14l8.07 8.07a2.22 2.22 0 0 0 3.14 0l8.03-8.03a2.22 2.22 0 0 0 0-3.14z"
      />
    </svg>
  );
}

export function GitHubLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" role="img" aria-label="GitHub" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function VsCodeLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Visual Studio Code" {...props}>
      <path
        fill="#007ACC"
        d="M17.583 2.013a1.66 1.66 0 0 0-1.176.438L7.868 9.387 4.195 6.618a1.134 1.134 0 0 0-1.572.22L.413 9.77a1.134 1.134 0 0 0 .22 1.572l3.415 2.576-3.415 2.576a1.134 1.134 0 0 0-.22 1.572l2.21 2.932a1.134 1.134 0 0 0 1.572.22l3.673-2.769 8.539 6.936a1.66 1.66 0 0 0 2.712-1.272V3.285a1.66 1.66 0 0 0-1.517-1.272zm-2.022 5.378l-5.69 4.609 5.69 4.609V7.391z"
      />
    </svg>
  );
}

export function JupyterLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Jupyter Notebook" {...props}>
      <path fill="#F37626" d="M12 4.2c-3.8 0-7 2.1-7.8 5.1 1.1-.9 2.7-1.5 4.5-1.5 3.5 0 6.3 2.1 6.3 4.8 0 .8-.3 1.6-.8 2.2 2.8-.7 4.8-2.9 4.8-5.6 0-2.8-3.1-5-7-5z" />
      <path fill="#F37626" d="M12 19.8c3.8 0 7-2.1 7.8-5.1-1.1.9-2.7 1.5-4.5 1.5-3.5 0-6.3-2.1-6.3-4.8 0-.8.3-1.6.8-2.2-2.8.7-4.8 2.9-4.8 5.6 0 2.8 3.1 5 7 5z" />
      <circle cx="5" cy="12" r="1.5" fill="#77716A" />
      <circle cx="12" cy="3" r="1.5" fill="#F37626" />
      <circle cx="19" cy="12" r="1.5" fill="#3884FF" />
    </svg>
  );
}

/* Concept & Methodology SVGs */
export function MlLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Machine Learning" {...props}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#8B5CF6" />
      <circle cx="12" cy="12" r="3.5" fill="#8B5CF6" fillOpacity=".25" stroke="#8B5CF6" />
    </svg>
  );
}

export function NlpLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Natural Language Processing" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#06B6D4" fill="#06B6D4" fillOpacity=".15" />
      <path d="M8 9h8M8 13h5" stroke="#06B6D4" />
    </svg>
  );
}

export function TfidfLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="TF-IDF" {...props}>
      <path d="M4 6h16M4 12h10M4 18h14" stroke="#F59E0B" />
      <rect x="16" y="9.5" width="5.5" height="5.5" rx="1.2" fill="#F59E0B" fillOpacity=".25" stroke="#F59E0B" />
      <path d="M18.75 11v2.5" stroke="#F59E0B" strokeWidth="1.5" />
    </svg>
  );
}

export function RegressionLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Logistic Regression" {...props}>
      <path d="M3 3v18h18" stroke="#77716A" strokeWidth="1.5" />
      <path d="M4 18c3 0 5-1 7-6s4-8 9-8" stroke="#6366F1" strokeWidth="2.2" />
      <circle cx="6" cy="18" r="1.5" fill="#6366F1" />
      <circle cx="18" cy="4" r="1.5" fill="#6366F1" />
    </svg>
  );
}

export function IntentLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Intent Classification" {...props}>
      <circle cx="12" cy="12" r="9" stroke="#F43F5E" fill="#F43F5E" fillOpacity=".15" />
      <circle cx="12" cy="12" r="5" stroke="#F43F5E" />
      <circle cx="12" cy="12" r="1.5" fill="#F43F5E" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3" stroke="#F43F5E" strokeWidth="1.5" />
    </svg>
  );
}

export function CleaningLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Data Cleaning" {...props}>
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" stroke="#10B981" fill="#10B981" fillOpacity=".15" />
      <path d="M16 16l2 2 4-4" stroke="#10B981" strokeWidth="2" />
    </svg>
  );
}

export function EdaLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Exploratory Data Analysis" {...props}>
      <circle cx="11" cy="11" r="7.5" stroke="#0EA5E9" fill="#0EA5E9" fillOpacity=".15" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" stroke="#0EA5E9" strokeWidth="2.2" />
      <path d="M8 12.5l2-2.5 2 2 3-3.5" stroke="#0EA5E9" strokeWidth="1.8" />
    </svg>
  );
}

export function VisualizationLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Data Visualization" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity=".15" />
      <path d="M7 16v-4m5 4v-8m5 8v-5" stroke="#8B5CF6" strokeWidth="2.2" />
    </svg>
  );
}

export function EtlLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="ETL Pipelines" {...props}>
      <rect x="3.5" y="3.5" width="6" height="6" rx="1.2" stroke="#F47B35" fill="#F47B35" fillOpacity=".2" />
      <rect x="14.5" y="14.5" width="6" height="6" rx="1.2" stroke="#F47B35" fill="#F47B35" fillOpacity=".2" />
      <path d="M9.5 6.5h4a3 3 0 0 1 3 3v5m0 0l-2-2m2 2l2-2" stroke="#F47B35" strokeWidth="1.8" />
      <path d="M14.5 17.5h-4a3 3 0 0 1-3-3v-5m0 0l2 2m-2-2l-2 2" stroke="#F47B35" strokeWidth="1.8" />
    </svg>
  );
}

export function BiLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Business Intelligence" {...props}>
      <path d="M3 21h18M5 17l5-5 4 4 6-7" stroke="#EAB308" strokeWidth="2" />
      <path d="M16 9h4v4" stroke="#EAB308" strokeWidth="2" />
      <circle cx="10" cy="12" r="1.5" fill="#EAB308" />
      <circle cx="14" cy="16" r="1.5" fill="#EAB308" />
    </svg>
  );
}

export function KpiLogo({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="KPI Reporting" {...props}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="#14B8A6" />
      <rect x="8" y="2" width="8" height="4" rx="1.2" stroke="#14B8A6" fill="#14B8A6" fillOpacity=".2" />
      <path d="M9 13.5l2 2 4-4" stroke="#14B8A6" strokeWidth="2" />
    </svg>
  );
}

/**
 * Universal logo resolver based on identifier
 */
export function SkillLogo({ name, className = "w-5 h-5", ...props }) {
  switch (name) {
    case 'python':
      return <PythonLogo className={className} {...props} />;
    case 'sql':
      return <SqlLogo className={className} {...props} />;
    case 'excel':
      return <ExcelLogo className={className} {...props} />;
    case 'powerbi':
      return <PowerBiLogo className={className} {...props} />;
    case 'pandas':
      return <PandasLogo className={className} {...props} />;
    case 'numpy':
      return <NumPyLogo className={className} {...props} />;
    case 'mysql':
      return <MySqlLogo className={className} {...props} />;
    case 'sqlite':
      return <SqliteLogo className={className} {...props} />;
    case 'nosql':
      return <NoSqlLogo className={className} {...props} />;
    case 'git':
      return <GitLogo className={className} {...props} />;
    case 'github':
      return <GitHubLogo className={className} {...props} />;
    case 'vscode':
      return <VsCodeLogo className={className} {...props} />;
    case 'jupyter':
      return <JupyterLogo className={className} {...props} />;
    case 'ml':
      return <MlLogo className={className} {...props} />;
    case 'nlp':
      return <NlpLogo className={className} {...props} />;
    case 'tfidf':
      return <TfidfLogo className={className} {...props} />;
    case 'regression':
      return <RegressionLogo className={className} {...props} />;
    case 'intent':
      return <IntentLogo className={className} {...props} />;
    case 'cleaning':
      return <CleaningLogo className={className} {...props} />;
    case 'eda':
      return <EdaLogo className={className} {...props} />;
    case 'visualization':
      return <VisualizationLogo className={className} {...props} />;
    case 'etl':
      return <EtlLogo className={className} {...props} />;
    case 'bi':
      return <BiLogo className={className} {...props} />;
    case 'kpi':
      return <KpiLogo className={className} {...props} />;
    default:
      return null;
  }
}
