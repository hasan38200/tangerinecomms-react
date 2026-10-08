import { motion } from 'framer-motion';
import TextReveal from '../shared/TextReveal';

export default function AboutValues({ values }) {
  return (
    <section className="pb-20 md:pb-24 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#f5f2ec] rounded-3xl px-6 md:px-12 xl:px-20 py-12 md:py-20"
      >
        <TextReveal
          as="h2"
          stagger={0.03}
          duration={0.6}
          className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-[-0.035em] leading-tight text-ink max-w-3xl mb-10 md:mb-16"
        >
          {values.heading}
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {values.values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-ink mb-4">
                {v.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-ink">{v.copy}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}