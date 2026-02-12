import React from 'react';

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 ${className}`}>
    {children}
  </div>
);

export default Container;
