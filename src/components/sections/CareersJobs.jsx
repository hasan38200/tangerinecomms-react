import { motion } from 'framer-motion';
import TextReveal from '../shared/TextReveal';

export default function CareersJobs({ jobs }) {
  return (
    <section className="pb-24 md:pb-32 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div className="max-w-[1200px] mx-auto">
        <TextReveal
          as="h2"
          stagger={0.04}
          duration={0.6}
          className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-[-0.04em] text-ink leading-tight mb-10 md:mb-14"
        >
          Fancy Coming Onboard
        </TextReveal>

        <ul className="flex flex-col">
          {jobs.map((job, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-[2.4fr_1fr_auto] items-center gap-4 md:gap-8 py-5 md:py-7 border-b border-[#ddd]"
            >
              <span className="text-lg md:text-xl xl:text-2xl font-semibold text-ink leading-tight">
                {job.title}
              </span>
              <span className="text-sm md:text-base text-muted">{job.location}</span>
              <a
                href="#"
                className="justify-self-start md:justify-self-end inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 border-[1.5px] border-accent rounded-full text-ink text-xs md:text-sm font-medium transition-all hover:bg-accent hover:text-white group"
              >
                <span>View Job Post</span>
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
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}