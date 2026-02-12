import React from 'react';

const colorMap = {
  strong:
    'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900',
  proficient:
    'bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
  familiar:
    'border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400',
  tools:
    'border border-dashed border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400',
  tech:
    'bg-accent-50 text-accent-700 dark:bg-accent-950 dark:text-accent-300 border border-accent-200 dark:border-accent-800',
};

const Tag = ({ children, variant = 'strong', className = '' }) => (
  <span
    className={`inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-200 ${
      colorMap[variant] || colorMap.strong
    } ${className}`}
  >
    {children}
  </span>
);

export default Tag;
