import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Database, TrendingUp, Cpu, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative Warm Backing Grid Frame with 3D Tilt */}
      <SpotlightCard
        maxTilt={4}
        className="rounded-3xl p-6 sm:p-7 bg-[#F5EBDD]/80 dark:bg-[#302E2B]/90 border border-[#E9E1D5] dark:border-[#49443E] shadow-xl backdrop-blur-xs transition-colors duration-300"
      >
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E9E1D5] dark:border-[#49443E]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F47B35]" />
            <span className="w-3 h-3 rounded-full bg-[#E9E1D5] dark:bg-[#49443E]" />
            <span className="w-3 h-3 rounded-full bg-[#DFD5C6] dark:bg-[#3D3934]" />
            <span className="ml-2 text-xs font-mono font-medium text-[#77716A] dark:text-[#C5BDB3]">
              venkatesh.analytics.workspace
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF9F0] dark:bg-[#242321] border border-[#E9E1D5] dark:border-[#49443E] text-[11px] font-mono text-[#F47B35]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F47B35] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F47B35]"></span>
            </span>
            <span>Active Ready</span>
          </div>
        </div>

        {/* Workspace Selector Tabs */}
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'analytics'
                ? 'bg-[#F47B35] text-[#FFF9F0] shadow-xs'
                : 'bg-[#FFF9F0] dark:bg-[#242321] text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] border border-[#E9E1D5] dark:border-[#49443E]'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Retail BI Pipeline
          </button>
          <button
            onClick={() => setActiveTab('ml')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'ml'
                ? 'bg-[#F47B35] text-[#FFF9F0] shadow-xs'
                : 'bg-[#FFF9F0] dark:bg-[#242321] text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] border border-[#E9E1D5] dark:border-[#49443E]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            NEXA ML Engine
          </button>
          <button
            onClick={() => setActiveTab('sql')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'sql'
                ? 'bg-[#F47B35] text-[#FFF9F0] shadow-xs'
                : 'bg-[#FFF9F0] dark:bg-[#242321] text-[#77716A] dark:text-[#C5BDB3] hover:text-[#242321] dark:hover:text-[#FFF9F0] border border-[#E9E1D5] dark:border-[#49443E]'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            SQL Windowing
          </button>
        </div>

        {/* Dynamic Card Display */}
        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#FFF9F0] dark:bg-[#242321] border border-[#E9E1D5] dark:border-[#49443E] transition-colors">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3] mb-1">
                  Records Analyzed
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-serif text-[#242321] dark:text-[#FFF9F0]">51,271</span>
                  <span className="text-xs font-semibold text-[#F47B35]">+100% verified</span>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FFF9F0] dark:bg-[#242321] border border-[#E9E1D5] dark:border-[#49443E] transition-colors">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#77716A] dark:text-[#C5BDB3] mb-1">
                  Academic CGPA
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-serif text-[#242321] dark:text-[#FFF9F0]">8.71</span>
                  <span className="text-xs text-[#77716A] dark:text-[#C5BDB3]">Data Science</span>
                </div>
              </div>
            </div>

            {/* SVG Trendline Chart */}
            <div className="p-4 rounded-2xl bg-[#FFF9F0] dark:bg-[#242321] border border-[#E9E1D5] dark:border-[#49443E] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#242321] dark:text-[#FFF9F0]">
                  Sales Margin & Profitability Curve
                </span>
                <span className="text-[11px] font-mono text-[#F47B35] flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +18.4% YoY
                </span>
              </div>
              <div className="h-28 w-full">
                <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F47B35" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#F47B35" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Subtle Grid Lines */}
                  <line x1="0" y1="30" x2="400" y2="30" stroke="currentColor" strokeDasharray="3 3" className="text-[#E9E1D5] dark:text-[#49443E]" />
                  <line x1="0" y1="70" x2="400" y2="70" stroke="currentColor" strokeDasharray="3 3" className="text-[#E9E1D5] dark:text-[#49443E]" />
                  <line x1="0" y1="110" x2="400" y2="110" stroke="currentColor" className="text-[#E9E1D5] dark:text-[#49443E]" />

                  {/* Gradient Area */}
                  <path
                    d="M 0 95 Q 60 70, 120 80 T 240 45 T 320 35 T 400 20 L 400 110 L 0 110 Z"
                    fill="url(#chartGradient)"
                  />
                  {/* Smooth Primary Trend Curve */}
                  <path
                    d="M 0 95 Q 60 70, 120 80 T 240 45 T 320 35 T 400 20"
                    fill="none"
                    stroke="#F47B35"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Interactive Nodes */}
                  <circle cx="120" cy="80" r="4" fill="currentColor" stroke="#F47B35" strokeWidth="2.5" className="text-[#FFF9F0] dark:text-[#242321]" />
                  <circle cx="240" cy="45" r="4" fill="currentColor" stroke="#F47B35" strokeWidth="2.5" className="text-[#FFF9F0] dark:text-[#242321]" />
                  <circle cx="320" cy="35" r="4" fill="currentColor" stroke="#F47B35" strokeWidth="2.5" className="text-[#FFF9F0] dark:text-[#242321]" />
                  <circle cx="400" cy="20" r="5" fill="#F47B35" />
                </svg>
              </div>
              <div className="flex justify-between pt-2 text-[10px] font-mono text-[#77716A] dark:text-[#C5BDB3]">
                <span>Q1 Preparation</span>
                <span>Q2 MySQL Querying</span>
                <span>Q3 Power BI DAX</span>
                <span>Q4 Reporting</span>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'ml' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-4 rounded-2xl bg-[#FFF9F0] dark:bg-[#242321] border border-[#E9E1D5] dark:border-[#49443E] space-y-3 transition-colors"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#E9E1D5] dark:border-[#49443E]">
              <span className="text-xs font-semibold text-[#242321] dark:text-[#FFF9F0]">
                NEXA Intent Classifier (scikit-learn)
              </span>
              <span className="text-[11px] font-mono text-[#F47B35]">TF-IDF Vectorizer</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center p-2 rounded-lg bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0]">
                <span>'open vscode project'</span>
                <span className="px-2 py-0.5 rounded bg-[#F47B35] text-[#FFF9F0] text-[10px] font-bold">
                  APP_LAUNCH (99.4%)
                </span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0]">
                <span>'remind me at 5 PM'</span>
                <span className="px-2 py-0.5 rounded bg-[#F47B35] text-[#FFF9F0] text-[10px] font-bold">
                  SET_REMINDER (98.9%)
                </span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-[#F5EBDD] dark:bg-[#34312D] text-[#242321] dark:text-[#FFF9F0]">
                <span>'query stock golden cross'</span>
                <span className="px-2 py-0.5 rounded bg-[#F47B35] text-[#FFF9F0] text-[10px] font-bold">
                  FINANCIAL_QUERY (97.8%)
                </span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FFF0E6] dark:bg-[#F47B35]/15 border border-[#F47B35]/20 text-[11px] text-[#77716A] dark:text-[#C5BDB3]">
              Offline intent classification running directly on Windows without remote API latency.
            </div>
          </motion.div>
        )}

        {activeTab === 'sql' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-4 rounded-2xl bg-[#242321] dark:bg-[#1E1C1A] text-[#FFF9F0] border border-[#383633] dark:border-[#49443E] space-y-2 font-mono text-xs"
          >
            <div className="flex items-center justify-between text-[#DFD5C6] text-[11px] pb-2 border-b border-[#383633] dark:border-[#49443E]">
              <span className="text-[#F47B35] font-semibold">stock_analysis.sql</span>
              <span>6 Equities Analyzed</span>
            </div>
            <pre className="text-[11px] leading-relaxed text-[#FFF9F0]/90 overflow-x-auto py-1">
              <code>{`-- 20 & 50 Day Moving Averages
SELECT stock, date, close_price,
  AVG(close_price) OVER(
    PARTITION BY stock ORDER BY date
    ROWS BETWEEN 19 PRECEDING
    AND CURRENT ROW
  ) AS ma_20
FROM master_stock_table;`}</code>
            </pre>
            <div className="flex items-center justify-between pt-2 text-[10px] text-[#9B948C]">
              <span>Partitioned Window Functions</span>
              <span className="text-[#F47B35]">MySQL 8.0</span>
            </div>
          </motion.div>
        )}

        {/* Bottom Highlights Row */}
        <div className="mt-4 pt-3 border-t border-[#E9E1D5] dark:border-[#49443E] flex items-center justify-between text-xs text-[#77716A] dark:text-[#C5BDB3]">
          <span className="flex items-center gap-1.5 font-medium">
            <Layers className="w-3.5 h-3.5 text-[#F47B35]" />
            Python · SQL · Power BI · ML
          </span>
          <span className="font-mono text-[11px]">Bengaluru, India</span>
        </div>
      </SpotlightCard>
    </div>
  );
}
