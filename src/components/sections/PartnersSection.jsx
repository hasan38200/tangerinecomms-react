import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LOGOS = [
  {
    render: () => (
      <div className="flex flex-col items-center gap-1.5">
        <span className="w-8 h-8 border-2 border-white rotate-45" />
        <span className="text-xl md:text-2xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600 }}>
          Bodyform
        </span>
      </div>
    ),
  },
  {
    render: () => (
      <div className="flex items-center gap-3">
        <span className="relative w-8 h-8 border-[3px] border-white rounded-full">
          <span className="absolute inset-2 bg-white rounded-full" />
        </span>
        <span className="text-xl md:text-[1.6rem] font-semibold tracking-tight">Citation</span>
      </div>
    ),
  },
  {
    render: () => (
      <span className="text-xl md:text-[1.75rem] font-bold tracking-tight underline decoration-2 underline-offset-8">
        Dunelm
      </span>
    ),
  },
  {
    render: () => (
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xl md:text-[2.5rem] font-extrabold tracking-tight leading-none">ATG</span>
        <span className="text-[0.6rem] md:text-[0.65rem] font-medium tracking-[0.25em] uppercase opacity-85">Entertainment</span>
      </div>
    ),
  },
];

export default function PartnersSection() {
  const repeated = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="pb-24 md:pb-32 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div className="bg-[#141414] text-white rounded-[24px] md:rounded-[32px] px-6 md:px-12 xl:px-20 py-12 md:py-16 xl:pt-20 xl:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start mb-12 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.05] max-w-[700px]"
          >
            We Partner With
            <br />
            Progressive
            <br />
            Brand Leaders
          </motion.h2>
          <Link
            to="/about"
            className="justify-self-start inline-flex items-center gap-2.5 px-6 py-3 border-2 border-accent rounded-full text-white text-sm font-semibold transition-all hover:bg-accent hover:-translate-y-0.5 group"
          >
            <span>View Who We Are</span>
            <svg viewBox="0 0 24 24" width="18" height="18" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div
          className="overflow-hidden relative"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
          }}
        >
          <div className="flex items-center gap-14 md:gap-20 w-max animate-[marquee33_7s_linear_infinite] hover:[animation-play-state:paused]">
            {repeated.map((logo, i) => (
              <div key={i} className="flex items-center justify-center h-16 md:h-20 min-w-[160px] md:min-w-[200px] shrink-0 opacity-90 hover:opacity-100 text-white">
                {logo.render()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}