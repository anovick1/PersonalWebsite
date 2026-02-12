import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, className = '' }) => (
  <motion.h2
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className={`text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 ${className}`}
  >
    {children}
  </motion.h2>
);

export default SectionHeading;
