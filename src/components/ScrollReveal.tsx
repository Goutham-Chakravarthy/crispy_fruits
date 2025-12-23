"use client";

import React, { CSSProperties } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Delay in milliseconds before the animation starts.
   */
  delayMs?: number;
  /**
   * Intersection ratio required before revealing.
   * Defaults to 0.25 (25% visible).
   */
  threshold?: number | number[];
  /**
   * Optional rootMargin for fine-tuning when the reveal starts.
   */
  rootMargin?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  threshold = 0.25,
  rootMargin = '0px 0px -10% 0px',
  style,
  ...rest
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold,
    rootMargin,
  });

  const combinedStyle: CSSProperties = {
    transition: 'opacity 600ms ease-out, transform 600ms ease-out',
    transitionDelay: `${delayMs}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    ...style,
  };

  const baseClasses = 'will-change-transform will-change-opacity';

  return (
    <div
      ref={ref}
      style={combinedStyle}
      className={`${baseClasses} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
