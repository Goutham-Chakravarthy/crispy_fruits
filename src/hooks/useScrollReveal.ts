import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  /**
   * If true, disables animation and reveals content immediately.
   * Used internally for `prefers-reduced-motion`.
   */
  disabled?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const { root = null, rootMargin = '0px 0px -10% 0px', threshold = 0.25, disabled } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let resolvedDisabled = disabled ?? false;

    // Respect prefers-reduced-motion when disabled is not explicitly provided
    if (disabled === undefined) {
      if (typeof window !== 'undefined' && 'matchMedia' in window) {
        try {
          resolvedDisabled = window
            .matchMedia('(prefers-reduced-motion: reduce)')
            .matches;
        } catch {
          resolvedDisabled = false;
        }
      }
    }

    if (resolvedDisabled) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, disabled]);

  return { ref, isVisible } as const;
}
