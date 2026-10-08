import { motion } from 'framer-motion';
import TextReveal from '../shared/TextReveal';

export default function AboutJuice({ juice }) {
  return (
    <section className="pb-20 md:pb-24 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#f5f2ec] rounded-3xl px-6 md:px-12 xl:px-16 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-14 items-center"
      >
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#eee] aspect-square">
          <img
            src="/images/about-juice.jpg"
            alt="Juice Academy graduate presenting"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-xs font-medium uppercase tracking-[0.05em] border border-[#F78383] rounded-full px-5 py-1.5 mb-5"
          >
            {juice.badge}
          </motion.span>

          <TextReveal
            as="h2"
            stagger={0.03}
            duration={0.6}
            className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-[-0.03em] leading-tight text-ink mb-5"
          >
            {juice.heading}
          </TextReveal>

          <TextReveal
            as="p"
            delay={0.3}
            stagger={0.012}
            className="text-sm md:text-base leading-relaxed text-ink"
          >
            {juice.copy}
          </TextReveal>
        </div>
      </motion.div>
    </section>
  );
}