import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PlaceCard({ country, image, cities, reverse = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      {/* Image */}
      <div
        className={`relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#f2eee9] ${
          reverse ? 'lg:order-2' : ''
        }`}
        style={{ aspectRatio: '5 / 4' }}
      >
        <img
          src={image}
          alt={country}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>

      {/* Info */}
      <div className={`${reverse ? 'lg:order-1' : ''}`}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-ink mb-6 md:mb-8"
        >
          {country}
        </motion.h2>

        <ul className="flex flex-wrap gap-3 md:gap-4">
          {cities.map((city, i) => (
            <motion.li
              key={city.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25 + i * 0.08,
              }}
            >
              <Link
                to={`/influencers/${city.slug}`}
                className="group inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 bg-white border-2 border-accent rounded-full text-accent text-sm md:text-base font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:-translate-y-0.5"
              >
                <span>{city.name}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
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
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}