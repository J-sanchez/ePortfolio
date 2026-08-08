import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number counting up from 0 to `value` once it scrolls into
 * view. `prefix`/`suffix` wrap the rendered number (e.g. "$" / "M",
 * "" / "+") so the underlying value can stay a plain integer.
 */
const CountUp = ({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1400,
  className = '',
}) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const runCountUp = () => {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        setDisplay(value);
        return;
      }

      const factor = 10 ** decimals;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value * factor) / factor);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      runCountUp();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            runCountUp();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
