import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutCta({ cta }) {
  return (
    <section className="pb-24 md:pb-32 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-[-0.04em] text-ink leading-[1.05]">
          {cta.heading}
        </h2>
        <Link
          to={cta.buttonTo}
          className="self-start inline-flex items-center gap-3 px-6 py-4 border-2 border-accent rounded-full text-ink text-sm md:text-base font-medium transition-all hover:bg-accent hover:text-white hover:-translate-y-0.5 group"
        >
          <span>{cta.buttonLabel}</span>
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
        </Link>
      </motion.div>
    </section>
  );
}