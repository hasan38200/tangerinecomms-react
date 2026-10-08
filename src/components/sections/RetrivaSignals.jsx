import { motion } from 'framer-motion';
import TextReveal from '../shared/TextReveal';
import Tag from '../shared/Tag';

export default function RetrivaSignals({ signals }) {
  return (
    <section className="pt-16 md:pt-20 pb-16 md:pb-24 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6"
      >
        <Tag>{signals.tag}</Tag>
      </motion.div>

      <TextReveal
        as="h2"
        stagger={0.03}
        duration={0.6}
        className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight leading-tight text-ink max-w-4xl mb-6"
      >
        {signals.heading}
      </TextReveal>

      <div className="flex flex-col gap-4 max-w-3xl">
        {signals.paragraphs.map((p, i) => (
          <TextReveal
            key={i}
            as="p"
            delay={0.2 + i * 0.15}
            stagger={0.012}
            className="text-base leading-relaxed text-muted"
          >
            {p}
          </TextReveal>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-14 md:mt-20 max-w-5xl">
        {signals.signals.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="flex items-baseline border-t border-[#e4e0da] pt-5"
          >
            <span
              className="text-2xl md:text-3xl text-accent mr-4 shrink-0"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 700 }}
            >
              {s.num}
            </span>
            <h3 className="text-lg md:text-xl xl:text-2xl font-semibold tracking-tight leading-tight text-ink">
              {s.text}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}