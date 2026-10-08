import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FairPlaySlider({ fair }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const total = fair.cards.length;
  const maxIndex = Math.max(0, total - perView);

  /* Update perView + cardWidth on mount and resize */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const per = w < 768 ? 1 : w < 1024 ? 2 : 3;
      setPerView(per);

      const track = trackRef.current;
      if (!track) return;
      const firstCard = track.querySelector('[data-card]');
      if (firstCard) {
        const style = getComputedStyle(track);
        const gap = parseFloat(style.gap) || 16;
        setCardWidth(firstCard.offsetWidth + gap);
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  /* Clamp index when perView changes */
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const isFirst = index === 0;
  const isLast = index >= maxIndex;

  return (
    <section className="pb-20 md:pb-24 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-[-0.04em] text-ink leading-[1.05] mb-3"
      >
        {fair.heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="text-sm md:text-base text-muted mb-8 md:mb-10"
      >
        {fair.sub}
      </motion.p>

      {/* Track wrapper */}
      <div className="overflow-hidden -mx-4 md:-mx-6 xl:mx-0">
        <motion.div
          ref={trackRef}
          animate={{ x: -index * cardWidth }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-4 md:gap-5 px-4 md:px-6 xl:px-0"
        >
          {fair.cards.map((card, i) => (
            <div
              key={i}
              data-card
              className="flex-shrink-0 w-[calc(100%-32px)] md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-[#f5f2ec] rounded-2xl md:rounded-3xl p-7 md:p-8 xl:p-10"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-accent text-white rounded-xl text-2xl font-extrabold mb-5">
                {card.number}
              </span>
              <h3 className="text-lg md:text-xl xl:text-2xl font-bold tracking-tight text-ink mb-3">
                {card.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-ink">{card.copy}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          type="button"
          aria-label="Previous card"
          onClick={prev}
          disabled={isFirst}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-[1.5px] flex items-center justify-center transition-all ${
            isFirst
              ? 'border-ink/20 text-ink/20 cursor-not-allowed opacity-40'
              : 'border-ink text-ink hover:bg-ink hover:text-white cursor-pointer'
          }`}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              d="M15 5l-7 7 7 7"
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
          aria-label="Next card"
          onClick={next}
          disabled={isLast}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-[1.5px] flex items-center justify-center transition-all ${
            isLast
              ? 'border-ink/20 text-ink/20 cursor-not-allowed opacity-40'
              : 'border-ink text-ink hover:bg-ink hover:text-white cursor-pointer'
          }`}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              d="M9 5l7 7-7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}