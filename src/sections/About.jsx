import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { about } from '../data/content';

const About = () => (
  <section id="about" className="py-20 sm:py-28">
    <Container>
      <SectionHeading>About</SectionHeading>
      <div className="mt-8 max-w-2xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </Container>
  </section>
);

export default About;
