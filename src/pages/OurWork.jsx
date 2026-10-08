import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

/* ============================================================
   PROJECT DATA
   ============================================================ */
const PROJECTS = [
  { img: 'images/work-1.jpg', client: 'Specsavers', spec: 'Social' },
  { img: 'images/work-2.jpg', client: 'Specsavers', spec: 'PR' },
  { img: 'images/work-3.jpg', client: 'Specsavers', spec: 'PR' },
  { img: 'images/work-4.jpg', client: 'Rainbow', spec: 'Social' },
  { img: 'images/work-5.jpg', client: 'Primark', spec: 'PR' },
  { img: 'images/work-6.jpg', client: 'TENA Men', spec: 'Social' },
  { img: 'images/work-7.jpg', client: 'Topcon', spec: 'B2B' },
  { img: 'images/work-8.jpg', client: 'Specsavers', spec: 'Social' },
  { img: 'images/work-2.jpg', client: 'Peldon Rose', spec: 'B2B' },
  { img: 'images/work-5.jpg', client: 'Bodyform', spec: 'PR' },
  { img: 'images/work-3.jpg', client: 'Dunelm', spec: 'Social' },
  { img: 'images/work-7.jpg', client: 'Topcon', spec: 'B2B' },
  { img: 'images/work-1.jpg', client: 'Specsavers', spec: 'Corporate' },
  { img: 'images/work-6.jpg', client: 'TENA Men', spec: 'PR' },
  { img: 'images/work-4.jpg', client: 'Rainbow', spec: 'PR' },
  { img: 'images/work-8.jpg', client: 'Primark', spec: 'Social' },
];

/* ============================================================
   WORK CARD — reveal on scroll, hover marquee, badge
   ============================================================ */
function WorkCard({ img, client, alt, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.08,
    rootMargin: '0px 0px -5% 0px',
    once: true,
  });

  return (
    <Link
      ref={ref}
      to="#"
      className="group relative block overflow-hidden rounded-3xl bg-[#eee] no-underline
        aspect-[16/10] md:aspect-[506/283]
        transition-[transform,opacity] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        will-change-transform"
      style={{
        transitionDelay: `${delay}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
      }}
    >
      <img
        src={img}
        alt={alt || `${client} project`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />

      {/* Hover overlay with infinite "View Project" marquee */}
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

      {/* Client badge */}
      <span
        className="absolute left-4 bottom-4 text-white font-sans text-[0.75rem] font-bold tracking-[-0.01em] px-3 py-[5px] border-2 border-accent rounded-full z-[3] pointer-events-none
          opacity-0 translate-y-1 transition-[opacity,transform] duration-[350ms] delay-[50ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:opacity-100 group-hover:translate-y-0"
      >
        {client}
      </span>
    </Link>
  );
}

/* ============================================================
   FILTER BAR
   ============================================================ */
function FilterBar({ mode, setMode, value, setValue }) {
  const tabs = [
    { key: 'client', label: 'Client' },
    { key: 'all', label: 'All Projects' },
    { key: 'specialism', label: 'Specialism' },
  ];

  const uniqueClients = useMemo(
    () => [...new Set(PROJECTS.map((p) => p.client))].sort(),
    []
  );
  const uniqueSpecs = useMemo(
    () => [...new Set(PROJECTS.map((p) => p.spec))].sort(),
    []
  );

  const items =
    mode === 'client' ? uniqueClients : mode === 'specialism' ? uniqueSpecs : [];

  const onTab = (key) => {
    setMode(key);
    setValue(null);
  };

  const subOpen = mode !== 'all' && items.length > 0;

  return (
    <section className="max-w-site mx-auto pt-10 md:pt-[70px] px-5 md:px-6 text-center">
      {/* Top tabs */}
      <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
        {tabs.map((t) => {
          const active = mode === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => onTab(t.key)}
              className={`bg-transparent border-0 font-sans text-base font-normal cursor-pointer py-1.5 transition-colors duration-[250ms] ${
                active ? 'text-accent' : 'text-ink hover:text-accent'
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Sub-chips */}
      <div
        className="flex justify-center flex-wrap gap-2.5 overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          maxHeight: subOpen ? '200px' : '0px',
          opacity: subOpen ? 1 : 0,
          marginTop: subOpen ? '22px' : '0px',
        }}
        aria-live="polite"
      >
        {items.map((v) => {
          const active = value === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => setValue(active ? null : v)}
              className={`border-[1.5px] border-accent rounded-full font-sans text-[0.8rem] font-medium cursor-pointer px-4 py-1.5 transition-[background-color,color] duration-[250ms] ${
                active
                  ? 'bg-accent text-white'
                  : 'bg-transparent text-ink hover:bg-accent hover:text-white'
              }`}
            >
              {v}
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function OurWork() {
  const [mode, setMode] = useState('all'); // 'all' | 'client' | 'specialism'
  const [value, setValue] = useState(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (mode === 'client' && value) return p.client === value;
      if (mode === 'specialism' && value) return p.spec === value;
      return true;
    });
  }, [mode, value]);

  /* Split into 2 columns (odd → left, even → right) */
  const left = filtered.filter((_, i) => i % 2 === 0);
  const right = filtered.filter((_, i) => i % 2 === 1);

  /* Re-mount cards when filter changes so reveal re-triggers */
  const gridKey = `${mode}-${value ?? 'all'}`;

  return (
    <main>
      <FilterBar mode={mode} setMode={setMode} value={value} setValue={setValue} />

      <section className="max-w-site mx-auto px-5 md:px-6 pt-10 md:pt-[50px] pb-16 md:pb-[120px] min-h-[60vh]">
        {filtered.length === 0 ? (
          <p className="text-center py-20 text-muted">No projects found.</p>
        ) : (
          <div
            key={gridKey}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start"
          >
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4 md:gap-6">
              {left.map((p, i) => (
                <WorkCard
                  key={`L-${gridKey}-${i}`}
                  img={p.img}
                  client={p.client}
                  alt={`${p.client} project`}
                  delay={(i % 4) * 0.08}
                />
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4 md:gap-6 md:mt-[84px]">
              {right.map((p, i) => (
                <WorkCard
                  key={`R-${gridKey}-${i}`}
                  img={p.img}
                  client={p.client}
                  alt={`${p.client} project`}
                  delay={(i % 4) * 0.08}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}