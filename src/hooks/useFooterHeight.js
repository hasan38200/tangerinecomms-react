import { useEffect, useRef } from 'react';

/**
 * Measures the footer box's natural height and stores it on the
 * <footer> element as the CSS variable `--footer-h`. This lets the
 * box animate from a fixed 160px to its real content height.
 *
 * Usage:
 *   const { footerRef, boxRef } = useFooterHeight();
 *   <footer ref={footerRef}> <div ref={boxRef}> ... </div> </footer>
 */
export default function useFooterHeight() {
  const footerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const box = boxRef.current;
    if (!footer || !box) return;

    const measure = () => {
      // Temporarily force full size to read natural height
      box.style.transition = 'none';
      box.style.width = '100%';
      box.style.height = 'auto';
      const h = box.offsetHeight;
      // Reset
      box.style.width = '';
      box.style.height = '';
      void box.offsetWidth;
      box.style.transition = '';
      // Store on the footer as --footer-h
      footer.style.setProperty('--footer-h', h + 'px');
    };

    measure();
    window.addEventListener('load', measure);
    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('load', measure);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return { footerRef, boxRef };
}