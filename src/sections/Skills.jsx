import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Tag from '../components/Tag';
import { skills } from '../data/content';

const SkillGroup = ({ label, items, variant, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
  >
    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-3">
      {label}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <Tag key={s} variant={variant}>
          {s}
        </Tag>
      ))}
    </div>
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-neutral-900/30">
    <Container>
      <SectionHeading>Skills</SectionHeading>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <SkillGroup label="Strong" items={skills.strong} variant="strong" delay={0} />
        <SkillGroup label="Proficient" items={skills.proficient} variant="proficient" delay={0.1} />
        <SkillGroup label="Familiar" items={skills.familiar} variant="familiar" delay={0.2} />
        <SkillGroup label="Tools" items={skills.tools} variant="tools" delay={0.3} />
      </div>
    </Container>
  </section>
);

export default Skills;
