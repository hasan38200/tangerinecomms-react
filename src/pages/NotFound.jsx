import { Link } from 'react-router-dom';
import Reveal from '../components/shared/Reveal';
import TextReveal from '../components/shared/TextReveal';

export default function NotFound() {
  return (
    <main className="max-w-site mx-auto px-4 md:px-6 xl:px-header-pad py-32 md:py-48 text-center">
      <Reveal>
        <TextReveal as="h1" className="font-display italic text-6xl md:text-8xl text-ink">
          404
        </TextReveal>
      </Reveal>
      <Reveal variant="fade" delay={0.2}>
        <p className="font-sans text-lg md:text-xl text-muted mt-8 max-w-2xl mx-auto">
          This page doesn't exist yet.
        </p>
      </Reveal>
      <Reveal variant="fade" delay={0.4}>
        <Link
          to="/"
          className="inline-flex items-center justify-center mt-12 px-8 py-4 bg-ink text-white font-bold rounded-full transition-transform hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </Reveal>
    </main>
  );
}