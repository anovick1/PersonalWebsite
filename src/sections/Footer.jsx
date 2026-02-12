import React from 'react';
import Container from '../components/Container';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-500">
          <p>&copy; {year} Avery Novick. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/anovick1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/avery-novick/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:averynov@yahoo.com"
              className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
