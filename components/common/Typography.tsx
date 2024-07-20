// components/Typography.tsx

import React, { ReactNode } from 'react';

interface TypographyProps {
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ className = '' }) => (
  <h1 className={`text-h1 ${className}`}>
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ className = '' }) => (
  <h2 className={`text-h2 ${className}`}>
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ className = '' }) => (
  <h3 className={`text-h3 ${className}`}>
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ className = '' }) => (
  <h4 className={`text-h4 ${className}`}>
  </h4>
);

export const SectionHeader: React.FC<TypographyProps> = ({ className = '' }) => (
  <div className={`text-styleguide-section-header ${className}`}>
  </div>
);

export const HeadingMedium: React.FC<TypographyProps> = ({ className = '' }) => (
  <div className={`text-styleguide-heading-medium ${className}`}>
  </div>
);

export const HeadingLarge: React.FC<TypographyProps> = ({ className = '' }) => (
  <div className={`text-styleguide-heading-large ${className}`}>
  </div>
);

export const HeadingMediumCustom: React.FC<TypographyProps> = ({ className = '' }) => (
  <div className={`text-heading-medium ${className}`}>
  </div>
);

export const P: React.FC<TypographyProps> = ({ className = '' }) => (
  <p className={`text-base ${className}`}>
  </p>
);

export const SmallText: React.FC<TypographyProps> = ({ className = '' }) => (
  <small className={`text-sm ${className}`}>
  </small>
);
