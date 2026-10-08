import { motion } from 'framer-motion';
import TextReveal from '../shared/TextReveal';

export default function AboutIntro({ intro }) {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 xl:gap-24 items-start">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-[-0.04em] text-ink leading-[1.05]"
        >
          {intro.heading}
        </motion.h2>

        <div className="flex flex-col gap-6 md:gap-8">
          {intro.paragraphs.map((p, i) => (
            <TextReveal
              key={i}
              as="p"
              delay={0.2 + i * 0.15}
              stagger={0.012}
              className="text-base md:text-lg leading-relaxed text-ink"
            >
              {p}
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}