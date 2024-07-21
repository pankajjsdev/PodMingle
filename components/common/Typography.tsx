// components/Typography.tsx

import React, { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

// 'h1': '3.25rem', // 52px
// 'h2': '2.75rem', // 44px
// 'h3': '2.25rem', // 36px
// 'h4': '1.75rem', // 28px
// 'h5': '1rem', // 24px

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`text-h3 lg:text-h1 font-bold leading-[1.2] ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`text-h2 font-bold ${className}`}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`text-hs3 lg:text-h3 font-bold leading-[1.2] ${className}`}>
    {children}
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h4 className={`text-lg font-semibold ${className}`}>
    {children}
  </h4>
);

export const P: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-base lg:text-lg font-normal leading-[1.5] ${className}`}>
    {children}
  </p>
);

export const SmallText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <small className={`text-sm ${className}`}>
    {children}
  </small>
);
