import { Link } from 'react-router-dom';
import Reveal from '../shared/Reveal';

export default function AttentionLabs() {
  const items = Array.from({ length: 6 });

  return (
    <Reveal variant="up">
      <section className="pb-24 md:pb-32 overflow-hidden">
        <div className="overflow-hidden whitespace-nowrap py-3">
          <div className="inline-flex items-baseline gap-20 animate-[scrollLeft_40s_linear_infinite]">
            {items.map((_, i) => (
              <span
                key={i}
                className="text-ink leading-none tracking-tight text-[5rem] md:text-[10rem] xl:text-[13rem]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 700,
                }}
              >
                Attention Labs.
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap py-3">
          <div className="inline-flex items-baseline gap-20 animate-[scrollRight_40s_linear_infinite]">
            {items.map((_, i) => (
              <span
                key={i}
                className="text-ink leading-none tracking-tight text-[5rem] md:text-[10rem] xl:text-[13rem]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 700,
                }}
              >
                Attention Labs.
              </span>
            ))}
          </div>
        </div>

        <Reveal variant="fade" delay={0.3} className="flex justify-end px-4 md:px-6 xl:px-header-pad pt-10">
          <Link
            to="/our-reports"
            className="inline-flex items-center gap-3 px-5 py-2.5 border-2 border-accent rounded-full text-ink text-sm font-medium transition-all hover:bg-accent hover:text-white hover:-translate-y-0.5 group"
          >
            <span>View All Reports</span>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Reveal>
      </section>
    </Reveal>
  );
}