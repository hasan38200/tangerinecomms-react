import { motion } from 'framer-motion';
import PlaceCard from '../components/shared/PlaceCard';
import { PLACES } from '../data/places';

export default function Places() {
  return (
    <main className="pb-24 md:pb-32">
      {/* Hero */}
      <section className="px-4 md:px-6 xl:px-header-pad max-w-site mx-auto pt-20 md:pt-28 pb-14 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-[-0.04em] text-ink leading-[1.02] mb-5 md:mb-7"
        >
          Places
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-base md:text-lg leading-relaxed text-muted max-w-2xl"
        >
          Local knowledge, global reach. Meet the trusted voices shaping conversations across
          Pakistan, the UK and the United States.
        </motion.p>
      </section>

      {/* Cards */}
      <section className="px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
        <div className="flex flex-col gap-20 md:gap-32">
          {PLACES.map((place, i) => (
            <PlaceCard key={place.country} {...place} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
    </main>
  );
}