import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function RetrivaBanner() {
  const [typed, setTyped] = useState('');
  const fullText = 'earned, social and digital communications';

  useEffect(() => {
    let i = 0;
    let dir = 1;
    let timer;

    const tick = () => {
      i += dir;
      setTyped(fullText.slice(0, i));
      let wait = dir > 0 ? 70 : 28;
      if (i === fullText.length) {
        dir = -1;
        wait = 2200;
      } else if (i === 0) {
        dir = 1;
        wait = 700;
      }
      timer = setTimeout(tick, wait);
    };

    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-4 md:px-6 xl:px-header-pad max-w-site mx-auto pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f43d38] via-[#ee2d2b] to-[#a3140f] text-white text-center px-6 md:px-12 py-20 md:py-32 xl:py-40"
      >
        {/* Blurred blobs */}
        <span className="absolute w-[420px] h-[420px] -left-20 -top-20 bg-[#ff7b6e] opacity-70 blur-[80px] rounded-full" />
        <span className="absolute w-[460px] h-[460px] -right-20 -bottom-24 bg-[#7a0f0f] opacity-90 blur-[80px] rounded-full" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative z-10 text-4xl md:text-6xl xl:text-7xl font-light tracking-[-0.05em] leading-[0.98] mb-8 md:mb-12"
        >
          <strong className="font-semibold">Retrievability</strong>
          <br />
          sits at the
          <br />
          intersection of
        </motion.h2>

        {/* Search pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative z-10 inline-flex items-center justify-between gap-4 w-full max-w-2xl mx-auto bg-white text-ink rounded-full px-6 md:px-8 py-4 md:py-5 shadow-[0_20px_50px_rgba(80,0,0,0.3)]"
          style={{ rotate: '-2deg' }}
        >
          <span className="text-base md:text-lg xl:text-xl italic text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
            {typed}
            <span className="inline-block w-[2px] h-[1.1em] bg-accent align-[-0.15em] ml-0.5 animate-pulse" />
          </span>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#111" strokeWidth="1.6" className="shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-5-5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}