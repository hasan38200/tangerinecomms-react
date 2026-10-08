import { motion } from 'framer-motion';

export default function InfluencerCard({ name, handle, img, city, delay = 0 }) {
  return (
    <motion.a
      href="#"
      aria-label={name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="group block"
    >
      {/* Image + overlay */}
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-[#f2eee9] mb-4 shadow-[0_24px_48px_-26px_rgba(0,0,0,0.22)]"
        style={{ aspectRatio: '4 / 5' }}
      >
        <img
          src={img}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[0.9s] group-hover:scale-105"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />

        {/* Name overlay — fades in on hover */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white opacity-0 translate-y-3 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">
          <p className="text-base md:text-lg font-semibold tracking-tight">{name}</p>
          <p className="text-xs md:text-sm text-[#ffd7d2] mt-0.5">{handle}</p>
        </div>
      </div>

      {/* Meta row always visible */}
      <div className="flex items-baseline justify-between gap-3 px-1">
        <h3 className="text-base md:text-lg font-semibold tracking-tight text-ink leading-snug">
          {name}
        </h3>
        <span className="text-xs md:text-sm text-muted whitespace-nowrap">{city}</span>
      </div>
    </motion.a>
  );
}