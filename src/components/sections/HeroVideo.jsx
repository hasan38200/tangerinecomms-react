import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* Video sources + overlay text per category */
const CLIPS = [
  {
    category: 'consumer',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    overlay: { line1: "PR Week's", line2: 'Best Agency', line3: 'Outside of London' },
  },
  {
    category: 'b2b',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    overlay: { line1: "The Drum's", line2: 'Top 100 Indie', line3: 'Agencies 2025' },
  },
  {
    category: 'corporate',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    overlay: { line1: "Campaign's", line2: 'Global Agency', line3: 'of the Year 2024' },
  },
];

const PILL_LABELS = {
  consumer: 'Consumer',
  b2b: 'B2B',
  corporate: 'Corporate',
};

export default function HeroVideo() {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef([]);

  /* When index or muted changes, play the active video */
  useEffect(() => {
    const vid = videoRefs.current[index];
    if (!vid) return;
    vid.muted = muted;
    vid.currentTime = 0;
    vid.play().catch(() => {});
  }, [index, muted]);

  /* Pause all inactive videos when switching */
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (vid && i !== index) {
        vid.pause();
      }
    });
  }, [index]);

  const active = CLIPS[index];

  return (
    <section className="px-3 md:px-6 xl:px-12 pt-3 md:pt-6 pb-10 md:pb-12 max-w-site mx-auto">
      {/* Video container */}
      <div className="relative w-full aspect-[4/5] md:aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black">
        {/* Videos — all rendered, only active one visible */}
        {CLIPS.map((clip, i) => (
          <video
            key={clip.category}
            ref={(el) => (videoRefs.current[i] = el)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            playsInline
            preload="metadata"
            onEnded={() => setIndex((i + 1) % CLIPS.length)}
          >
            <source src={clip.src} type="video/mp4" />
          </video>
        ))}

        {/* Award images floating at the top */}
        <div
          className="absolute top-[5%] left-0 right-0 grid grid-cols-5 gap-x-[3%] gap-y-[5%] w-[min(760px,90%)] mx-auto px-0 pointer-events-none z-10"
          aria-hidden="true"
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <img
              key={i}
              src={`/images/award-${i + 1}.png`}
              alt=""
              className="w-full max-w-[90px] justify-self-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] animate-[awardFloat_6s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.3}s` }}
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          ))}
        </div>

        {/* Headline overlay */}
        <div className="absolute inset-0 flex items-end justify-center pb-[5%] md:pb-[8%] z-20 pointer-events-none">
          <h1 className="flex flex-col items-center text-white text-center leading-[0.95] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.35)]">
            <AnimatePresence mode="wait">
              <motion.span
                key={`l1-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="block font-extrabold uppercase text-2xl md:text-5xl xl:text-6xl"
              >
                {active.overlay.line1}
              </motion.span>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.span
                key={`l2-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="block text-4xl md:text-7xl xl:text-8xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                {active.overlay.line2}
              </motion.span>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.span
                key={`l3-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="block font-extrabold text-3xl md:text-6xl xl:text-7xl"
              >
                {active.overlay.line3}
              </motion.span>
            </AnimatePresence>
          </h1>
        </div>

        {/* Mute toggle */}
        <button
          type="button"
          aria-label="Toggle sound"
          onClick={() => setMuted((m) => !m)}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-30 w-11 h-11 md:w-[52px] md:h-[52px] rounded-full bg-black text-white flex items-center justify-center transition-transform hover:scale-105"
        >
          {muted ? (
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" />
              <line x1="16" y1="9" x2="22" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="22" y1="9" x2="16" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" />
              <path d="M15.5 8.5a5 5 0 010 7M18 6a9 9 0 010 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-7 md:mt-10">
        {CLIPS.map((clip, i) => (
          <button
            key={clip.category}
            type="button"
            onClick={() => setIndex(i)}
            className={`group inline-flex items-center gap-3 px-5 md:px-9 py-3.5 md:py-5 rounded-full border-2 border-accent font-semibold text-base md:text-lg transition-all ${
              i === index
                ? 'bg-accent text-white'
                : 'bg-transparent text-ink hover:bg-accent hover:text-white'
            }`}
          >
            <span>{PILL_LABELS[clip.category]}</span>
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
          </button>
        ))}
      </div>
    </section>
  );
}