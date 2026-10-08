import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

/* ============================================================
   SplitWords — staggered word reveal
   ============================================================ */
function SplitWords({ text, step = 1, active = false }) {
  const words = String(text).split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            '--d': i * step,
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(20px)',
            transition:
              'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)',
            transitionDelay: 'calc(var(--d) * 0.06s)',
            willChange: 'opacity, transform',
          }}
        >
          {w}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function StrategyHero() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  const heroBody =
    "We place attention strategies at the heart of all of our clients' marketing plans. To capture that attention we harness data and human insights to go beyond the numbers, uncovering what people truly think about your brand, your market, and your audience. This human-centred approach, powered by real-world listening, elevates brands from mere players to industry leaders.";

  const bodyWords = heroBody.split(/\s+/).filter(Boolean);

  return (
    <section
      ref={ref}
      className="max-w-site mx-auto px-5 py-10 md:px-12 md:py-10 md:pb-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-10 md:gap-20 items-start">
        {/* ---------- IMAGE ---------- */}
        <div
          className="rounded-3xl overflow-hidden bg-[#111] aspect-[4/3] md:aspect-[4/5]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView
              ? 'translateY(0) scale(1)'
              : 'translateY(40px) scale(0.97)',
            transition:
              'opacity 1s ease, transform 1.2s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <img
            src="images/strategy-hero.jpg"
            alt="Strategy portrait"
            className="w-full h-full object-cover block"
          />
        </div>

        {/* ---------- COPY ---------- */}
        <div className="md:pt-10">
          <h1
            className="font-sans text-ink"
            style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            {['Strategy'].map((w, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition:
                    'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                  transitionDelay: '0s',
                }}
              >
                {w}
              </span>
            ))}
          </h1>

          <p
            className="font-sans text-base text-[#333] max-w-[560px]"
            style={{
              lineHeight: 1.55,
              marginBottom: '32px',
            }}
          >
            {bodyWords.map((w, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  '--d': i,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(12px)',
                  transition:
                    'opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                  transitionDelay: 'calc(0.4s + var(--d) * 0.015s)',
                }}
              >
                {w}{i < bodyWords.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </p>

          <Link
            to="/our-work"
            className="group inline-flex items-center gap-2.5 px-7 py-[18px] bg-ink text-white no-underline rounded-full text-[0.95rem] font-semibold tracking-[-0.01em]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition:
                'opacity 0.7s ease 1.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 1.1s, background-color 0.3s ease',
            }}
          >
            <span>View Our Work</span>
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
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
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   STRATEGY SERVICES
   ============================================================ */
function StrategyServices() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  const services = [
    'Brand Strategy',
    'Comms Strategy',
    'Social Strategy',
    'Campaign planning',
    'Insight',
    'Measurement & Analytics',
  ];

  const titleLines = [['Our', 'Strategy'], ['Services']];

  return (
    <section
      ref={ref}
      className="max-w-site mx-auto px-5 py-10 md:px-12 md:py-10 md:pb-20"
    >
      <div
        className="bg-soft rounded-3xl md:rounded-[32px] p-8 md:p-20 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20 items-start"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(40px)',
          transition:
            'opacity 0.9s ease, transform 1.2s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* TITLE */}
        <h2
          className="font-sans text-ink"
          style={{
            fontSize: 'clamp(2rem, 3.4vw, 3rem)',
            fontWeight: 600,
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
          }}
        >
          {titleLines.map((line, li) => (
            <span key={li} className="block">
              {line.map((w, wi) => {
                const d = li * 2 + wi;
                return (
                  <span
                    key={wi}
                    className="inline-block"
                    style={{
                      '--d': d,
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(20px)',
                      transition:
                        'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                      transitionDelay: 'calc(var(--d) * 0.06s)',
                    }}
                  >
                    {w}{wi < line.length - 1 ? '\u00A0' : ''}
                  </span>
                );
              })}
            </span>
          ))}
        </h2>

        {/* LIST */}
        <ul className="list-none flex flex-col">
          {services.map((s, i) => (
            <li
              key={i}
              className="border-b-[1.5px] border-ink text-base md:text-[1.05rem] font-medium text-ink py-4 md:py-[22px] px-1"
              style={{
                borderTop: i === 0 ? '1.5px solid #1a1a1a' : 'none',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                transition:
                  'opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: `${0.35 + i * 0.1}s`,
              }}
            >
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   TOOLS WE USE
   ============================================================ */
function StrategyTools() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  const tools = [
    { label: 'Google Trends', style: { background: '#f5f5f5', color: '#4285f4', fontWeight: 500 } },
    {
      label: 'Meltwater',
      style: { background: '#2dd4bf', color: '#fff' },
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            d="M4 12c3-4 6-6 8-6s3 2 3 4-1 4-3 4-3-2-3-4 1-4 3-4 5 2 8 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    { label: 'STYLUS', style: { background: '#000', color: '#fff', letterSpacing: '0.15em' } },
    { label: 'YouGov', style: { background: '#f44b5b', color: '#fff' } },
    { label: 'BuzzSumo', style: { background: '#3b6ee0', color: '#fff' } },
  ];

  const titleWords = ['The', 'Tools', 'We', 'Use'];

  return (
    <section
      ref={ref}
      className="w-full max-w-none px-5 md:px-12 py-10 md:py-10 md:pb-[100px] mx-auto"
    >
      <div className="w-full max-w-none mx-auto">
        {/* TITLE */}
        <h2
          className="font-sans text-ink max-w-site mx-auto mb-10"
          style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 600,
            letterSpacing: '-0.035em',
          }}
        >
          {titleWords.map((w, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                '--d': i,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(18px)',
                transition:
                  'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: 'calc(var(--d) * 0.06s)',
              }}
            >
              {w}{i < titleWords.length - 1 ? '\u00A0' : ''}
            </span>
          ))}
        </h2>

        {/* TOOLS ROW */}
        <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-5 items-stretch w-full max-w-site mx-auto">
          {tools.map((t, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center gap-2.5 flex-1 basis-[calc(50%-6px)] md:basis-0 min-w-0 h-[64px] md:h-24 px-3 md:px-6 rounded-xl font-sans whitespace-nowrap"
              style={{
                fontSize: 'clamp(0.8rem, 1.1vw, 1.15rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                opacity: inView ? 1 : 0,
                transform: inView
                  ? 'translateY(0) scale(1)'
                  : 'translateY(20px) scale(0.96)',
                transition:
                  'opacity 0.6s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: `${0.2 + i * 0.12}s`,
                ...t.style,
              }}
            >
              {t.icon}
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   OPPOSING MARQUEES — "Recent Work."
   ============================================================ */
function RecentWorkMarquees() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  const spans = Array.from({ length: 6 });

  return (
    <section
      ref={ref}
      className="py-5 md:py-5 md:pb-[60px] overflow-hidden bg-white relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition:
          'opacity 0.9s ease, transform 1.2s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* LEFT-SCROLLING ROW */}
      <div className="overflow-hidden whitespace-nowrap py-3">
        <div
          className="inline-flex items-baseline gap-10 md:gap-[60px] will-change-transform"
          style={{ animation: 'scrollLeft 30s linear infinite' }}
        >
          {spans.map((_, i) => (
            <span
              key={`l-${i}`}
              className="font-display italic font-semibold text-ink"
              style={{
                fontSize: 'clamp(3rem, 12vw, 11rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              Recent Work.
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT-SCROLLING ROW */}
      <div className="overflow-hidden whitespace-nowrap py-3">
        <div
          className="inline-flex items-baseline gap-10 md:gap-[60px] will-change-transform"
          style={{ animation: 'scrollRight 30s linear infinite' }}
        >
          {spans.map((_, i) => (
            <span
              key={`r-${i}`}
              className="font-display italic font-semibold text-ink"
              style={{
                fontSize: 'clamp(3rem, 12vw, 11rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              Recent Work.
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WORK CARD
   ============================================================ */
function WorkCard({ img, badge, alt, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '-5% 0px -10% 0px',
  });

  return (
    <Link
      ref={ref}
      to="#"
      className="group relative block overflow-hidden rounded-3xl bg-[#eee] no-underline aspect-[16/10] md:aspect-[506/283] transition-[transform,opacity] duration-[500ms] hover:-translate-y-2 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        transitionDelay: `${delay}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
      }}
    >
      <img
        src={img}
        alt={alt || `${badge} project`}
        className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] flex items-center overflow-hidden">
        <div
          className="flex items-center gap-16 whitespace-nowrap [animation-play-state:paused] group-hover:[animation-play-state:running]"
          style={{ animation: 'marqueeScroll 14s linear infinite' }}
        >
          {[0, 1, 2].map((k) => (
            <span key={k} className="contents">
              <span className="font-display italic font-semibold text-[clamp(3rem,6vw,5rem)] text-white tracking-[-0.02em] leading-none">
                View Project
              </span>
              <span className="inline-block shrink-0 w-[0.55em] h-[1.2em] border-[3px] border-white border-l-0 rounded-r-full text-[clamp(3rem,6vw,5rem)] align-middle" />
            </span>
          ))}
        </div>
      </div>

      <span
        className="absolute left-4 bottom-4 text-white font-sans text-[0.75rem] font-bold tracking-[-0.01em] px-3 py-[5px] border-2 border-accent rounded-full z-[3] pointer-events-none opacity-0 translate-y-1 transition-[opacity,transform] duration-[350ms] delay-[50ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0"
      >
        {badge}
      </span>
    </Link>
  );
}

/* ============================================================
   WORK GRID
   ============================================================ */
function StrategyWorkGrid() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  const leftCards = [
    { img: 'images/work-1.jpg', badge: 'Topcon' },
    { img: 'images/work-3.jpg', badge: 'Topcon' },
  ];
  const rightCards = [
    { img: 'images/work-2.jpg', badge: 'Specsavers' },
    { img: 'images/work-4.jpg', badge: 'Specsavers' },
  ];

  return (
    <section
      ref={ref}
      className="max-w-site mx-auto px-5 md:px-6 py-6 md:py-12"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition:
          'opacity 0.9s ease, transform 1.2s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* VIEW ALL */}
      <div className="flex justify-end pb-6">
        <Link
          to="/our-work"
          className="group inline-flex items-center gap-3 px-5 py-[10px] border-2 border-accent rounded-full text-ink bg-transparent text-[0.9rem] font-medium no-underline transition-[transform,background-color,color] duration-300 hover:bg-accent hover:text-white hover:-translate-y-0.5"
        >
          <span>View All Work</span>
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
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
        <div className="flex flex-col gap-4 md:gap-6">
          {leftCards.map((c, i) => (
            <WorkCard key={i} {...c} delay={i * 0.08} />
          ))}
        </div>
        <div className="flex flex-col gap-4 md:gap-6 md:mt-[84px]">
          {rightCards.map((c, i) => (
            <WorkCard key={i} {...c} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Strategy() {
  return (
    <main>
      <StrategyHero />
      <StrategyServices />
      <StrategyTools />
      <RecentWorkMarquees />
      <StrategyWorkGrid />
    </main>
  );
}