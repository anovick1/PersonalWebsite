import React from 'react';
import { motion } from 'framer-motion';
import Tag from './Tag';

const ProjectShowcase = ({ project }) => {
  const p = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm"
    >
      {/* Image carousel area */}
      {p.images && p.images.length > 0 && (
        <div className="flex gap-4 overflow-x-auto p-6 pb-0 scrollbar-hide">
          {p.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${p.title} screenshot ${i + 1}`}
              className="h-64 sm:h-80 w-auto rounded-xl object-cover border border-neutral-200 dark:border-neutral-800 shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Title + one-liner */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            {p.title}
          </h3>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {p.oneLiner}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tech.map((t) => (
            <Tag key={t} variant="tech">
              {t}
            </Tag>
          ))}
        </div>

        {/* Bullets */}
        <ul className="space-y-3 mb-6">
          {p.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
            >
              <span className="text-accent-500 mt-1.5 shrink-0">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Metrics table */}
        {p.metrics && p.metrics.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 uppercase tracking-wider">
              Performance
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-medium text-neutral-500 dark:text-neutral-400">
                      Metric
                    </th>
                    <th className="text-right py-2 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                      Baseline
                    </th>
                    <th className="text-right py-2 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                      Final
                    </th>
                    <th className="text-right py-2 pl-4 font-medium text-neutral-500 dark:text-neutral-400">
                      Δ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {p.metrics.map((m, i) => (
                    <tr
                      key={i}
                      className="border-b border-neutral-100 dark:border-neutral-800 last:border-0"
                    >
                      <td className="py-2 pr-4 text-neutral-700 dark:text-neutral-300 font-medium">
                        {m.label}
                      </td>
                      <td className="py-2 px-4 text-right text-neutral-500 dark:text-neutral-400 font-mono text-xs">
                        {m.baseline}
                      </td>
                      <td className="py-2 px-4 text-right text-neutral-900 dark:text-neutral-100 font-mono text-xs font-semibold">
                        {m.final}
                      </td>
                      <td
                        className={`py-2 pl-4 text-right font-mono text-xs font-semibold ${
                          m.delta.startsWith('+') || m.delta.startsWith('−')
                            ? m.delta.startsWith('−') && m.label.includes('HD')
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : m.delta.startsWith('+')
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : 'text-amber-600 dark:text-amber-400'
                            : 'text-neutral-500'
                        }`}
                      >
                        {m.delta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Key Features */}
        {p.features && p.features.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 uppercase tracking-wider">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {p.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                >
                  <svg
                    className="h-4 w-4 text-accent-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;
