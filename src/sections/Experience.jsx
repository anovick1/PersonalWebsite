import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { experience } from '../data/content';

const Experience = () => (
  <section id="experience" className="py-20 sm:py-28">
    <Container>
      <SectionHeading>Experience</SectionHeading>
      <div className="mt-10 max-w-2xl">
        {experience.map((exp, i) => (
          <TimelineItem
            key={i}
            index={i}
            company={exp.company}
            title={exp.title}
            dates={exp.dates}
            bullets={exp.bullets}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </Container>
  </section>
);

export default Experience;
