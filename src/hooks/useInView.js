import { useEffect, useRef, useState } from 'react';

/**
 * Reversible IntersectionObserver.
 * Matches the vanilla `classList.toggle('in-view', isIntersecting)` pattern.
 *
 * @param {Object}  opts
 * @param {number}  opts.threshold   default 0.15
 * @param {string}  opts.rootMargin  default '-5% 0px -10% 0px'
 * @param {boolean} opts.once        default false — if true, only fires once
 * @returns {{ ref, inView }}
 */
export default function useInView(opts = {}) {
  const {
    threshold = 0.15,
    rootMargin = '-5% 0px -10% 0px',
    once = false,
  } = opts;

  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (once && entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        } else if (!once) {
          setInView(entry.isIntersecting);
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}