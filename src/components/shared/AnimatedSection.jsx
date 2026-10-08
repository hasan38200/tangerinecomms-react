import Reveal from './Reveal';

/**
 * AnimatedSection — wraps any section in a Reveal.
 * Just a tiny convenience so pages read cleanly.
 */
export default function AnimatedSection({ children, variant = 'up', delay = 0, className = '' }) {
  return (
    <Reveal variant={variant} delay={delay} className={className}>
      {children}
    </Reveal>
  );
}