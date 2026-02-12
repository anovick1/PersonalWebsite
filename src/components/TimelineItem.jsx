import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ company, title, dates, bullets, isLast, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    className="relative pl-8 pb-10 last:pb-0 group"
  >
    {/* Timeline line */}
    {!isLast && (
      <div className="absolute left-[7px] top-3 h-full w-px bg-neutral-200 dark:bg-neutral-800" />
    )}

    {/* Timeline dot */}
    <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-950 group-hover:border-accent-500 transition-colors duration-300" />

    {/* Content */}
    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
          {company}
        </h3>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 shrink-0">
          {dates}
        </span>
      </div>
      <p className="text-sm font-medium text-accent-600 dark:text-accent-400 mb-3">
        {title}
      </p>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 flex gap-2"
          >
            <span className="text-neutral-400 dark:text-neutral-600 mt-1.5 shrink-0">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3" />
              </svg>
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default TimelineItem;
