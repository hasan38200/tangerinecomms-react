import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AWARDS = [
  { name: 'PRCA DARE', sub: 'Awards 2024' },
  { name: 'UK Social', sub: 'Media Awards' },
  { name: 'B2B Marketing' },
  { name: 'SABRE Awards' },
  { name: 'PRmoment', sub: 'Awards 2025' },
  { name: 'WARC' },
];

export default function AwardsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const items = [...AWARDS, ...AWARDS, ...AWARDS];

  return (
    <section ref={ref} className="pb-24 md:pb-32 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div
        className={`bg-[#f5f2ec] rounded-[24px] md:rounded-[32px] overflow-hidden transition-[width,min-height,padding] duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? 'w-full py-10 md:py-16 px-6 md:px-12 xl:px-20' : 'w-full min-h-[100px] md:min-h-[140px] p-0'
        }`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: inView ? 0.3 : 0 }}
          className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight leading-tight text-ink mb-10 md:mb-16"
        >
          A Few Awards
          <br />
          We're Pretty
          <br />
          Proud Of
        </motion.h2>

        <div
          className={`overflow-hidden transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: inView ? '0.9s' : '0s' }}
        >
          <div className="flex items-center gap-14 w-max animate-[marquee33_30s_linear_infinite]">
            {items.map((award, i) => (
              <div key={i} className="flex flex-col items-start gap-1 shrink-0 min-w-[180px] opacity-90">
                <span className="text-xl md:text-2xl font-extrabold tracking-tight text-ink">{award.name}</span>
                {award.sub && <span className="text-xs font-semibold tracking-wide text-ink/70 uppercase">{award.sub}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}