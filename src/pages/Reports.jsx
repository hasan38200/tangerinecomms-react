import { Link } from 'react-router-dom';
import { useState } from 'react';
import useInView from '../hooks/useInView';

/* ============================================================
   REPORT DATA
   ============================================================ */
const REPORTS = [
  {
    date: '2026-07-20',
    img: 'images/report-1.jpg',
    bg: 'linear-gradient(135deg,#c9733b,#2d4a3e)',
    title: 'Unretrievable',
    tag: 'Report',
  },
  {
    date: '2026-05-06',
    img: 'images/report-2.jpg',
    bg: 'linear-gradient(160deg,#6a5acd,#f08a4b)',
    title: 'The Rise of Influencer Politics',
    tag: 'Report',
  },
  {
    date: '2025-07-25',
    img: 'images/report-3.jpg',
    bg: 'linear-gradient(135deg,#2f80c9,#f3c14b)',
    title: 'Gen Alpha Report',
    tag: 'Report',
  },
];

/* ============================================================
   DATE BADGE
   ============================================================ */
function DateBadge({ date }) {
  return (
    <span className="absolute top-4 left-4 z-[2] inline-flex items-center gap-2 bg-white rounded-full px-3.5 py-2 font-sans text-[0.85rem] text-ink">
      <svg viewBox="0 0 24 24" width="16" height="16">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 7v5l3 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {date}
    </span>
  );
}

/* ============================================================
   REPORT CARD
   ============================================================ */
function ReportCard({ report, delay = 0, swapKey = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.08,
    rootMargin: '0px 0px -5% 0px',
  });

  return (
    <Link
      ref={ref}
      to="#"
      key={swapKey}
      className="block no-underline text-ink group"
      style={{
        transitionDelay: `${delay}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition:
          'opacity 0.7s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* IMAGE */}
      <div
        className="relative aspect-[508/350] rounded-3xl overflow-hidden mb-4.5"
        style={{ background: report.bg }}
      >
        <DateBadge date={report.date} />
        <img
          src={report.img}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover block transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* TAG */}
      <span className="inline-block border-[1.5px] border-accent rounded-full px-2.5 py-[3px] font-sans text-[0.75rem] font-medium mb-2">
        {report.tag}
      </span>

      {/* TITLE */}
      <h3 className="relative w-fit font-sans text-[clamp(1.4rem,2.2vw,2rem)] font-semibold tracking-[-0.035em] text-ink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:after:scale-x-100">
        {report.title}
      </h3>
    </Link>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Reports() {
  const [order, setOrder] = useState([0, 1, 2]);
  const [swapKey, setSwapKey] = useState(0);

  const go = (dir) => {
    setOrder((prev) => {
      const next = [...prev];
      if (dir > 0) {
        const first = next.shift();
        next.push(first);
      } else {
        const last = next.pop();
        next.unshift(last);
      }
      return next;
    });
    setSwapKey((k) => k + 1);
  };

  const { ref: headRef, inView: headIn } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  return (
    <main>
      <section className="max-w-site mx-auto px-5 md:px-12">
        {/* HEADER ROW */}
        <div
          ref={headRef}
          className="flex items-end justify-between gap-6 pt-10 md:pt-[70px]"
        >
          <div>
            <h1
              className="font-sans text-ink"
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                fontWeight: 600,
                letterSpacing: '-0.045em',
                lineHeight: 1.05,
                opacity: headIn ? 1 : 0,
                transform: headIn ? 'translateY(0)' : 'translateY(24px)',
                transition:
                  'opacity 0.8s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              Attention Labs
            </h1>
            <p
              className="font-sans text-base md:text-[1.25rem] mt-2.5 text-ink"
              style={{
                opacity: headIn ? 1 : 0,
                transform: headIn ? 'translateY(0)' : 'translateY(20px)',
                transition:
                  'opacity 0.8s ease 0.15s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s',
              }}
            >
              Here you'll find our latest reports and ground breaking research
            </p>
          </div>
        </div>

        {/* ARROWS */}
        <div
          className="flex justify-end gap-5 mt-10 md:mt-20 mb-10"
          style={{
            opacity: headIn ? 1 : 0,
            transform: headIn ? 'translateY(0)' : 'translateY(20px)',
            transition:
              'opacity 0.7s ease 0.3s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s',
          }}
        >
          <button
            type="button"
            aria-label="Previous reports"
            onClick={() => go(-1)}
            className="w-14 h-14 md:w-[76px] md:h-[76px] rounded-full bg-ink text-white grid place-items-center cursor-pointer border-0 transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-accent"
          >
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next reports"
            onClick={() => go(1)}
            className="w-14 h-14 md:w-[76px] md:h-[76px] rounded-full bg-ink text-white grid place-items-center cursor-pointer border-0 transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-accent"
          >
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* GRID */}
        <div
          key={swapKey}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pb-16 md:pb-[160px]"
          style={{ animation: 'npSwap 0.55s cubic-bezier(0.22,1,0.36,1)' }}
        >
          {order.map((idx, i) => (
            <ReportCard
              key={`${swapKey}-${idx}`}
              report={REPORTS[idx]}
              delay={i * 0.1}
              swapKey={swapKey}
            />
          ))}
        </div>
      </section>
    </main>
  );
}