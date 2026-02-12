import React from 'react';

const variants = {
  primary:
    'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',
  secondary:
    'border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800',
  ghost:
    'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800',
};

const Button = ({
  children,
  variant = 'primary',
  href,
  download,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-950';

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = !href.startsWith('#') && !href.startsWith('mailto:');

    if (isExternal) {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          download={download}
          className={cls}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <a href={href} download={download} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;
