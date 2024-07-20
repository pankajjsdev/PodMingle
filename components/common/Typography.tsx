// components/Typography.tsx

import React, { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`text-h1 font-bold ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`text-h2 ${className}`}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`text-h3 ${className}`}>
    {children}
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h4 className={`text-lg ${className}`}>
    {children}
  </h4>
);

export const SectionHeader: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <div className={`text-styleguide-section-header ${className}`}>
    {children}
  </div>
);

export const HeadingMedium: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <div className={`text-styleguide-heading-medium ${className}`}>
    {children}
  </div>
);

export const HeadingLarge: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <div className={`text-styleguide-heading-large ${className}`}>
    {children}
  </div>
);

export const HeadingMediumCustom: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <div className={`text-heading-medium ${className}`}>
    {children}
  </div>
);

export const P: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-base ${className}`}>
    {children}
  </p>
);

export const SmallText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <small className={`text-sm ${className}`}>
    {children}
  </small>
);
