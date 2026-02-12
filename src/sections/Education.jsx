import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/content';

const Education = () => (
  <section id="education" className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-neutral-900/30">
    <Container>
      <SectionHeading>Education</SectionHeading>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-50 dark:bg-accent-950">
                <svg
                  className="h-4 w-4 text-accent-600 dark:text-accent-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 leading-tight">
                  {edu.school}
                </h3>
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  {edu.dates}
                </span>
              </div>
            </div>
            <p className="text-sm font-medium text-accent-600 dark:text-accent-400 mb-2">
              {edu.degree}
            </p>
            {edu.details && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {edu.details}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

export default Education;
