import { motion } from 'framer-motion';
import TextReveal from '../components/shared/TextReveal';
import Tag from '../components/shared/Tag';
import CTACard from '../components/shared/CTACard';
import RetrivaCards from '../components/sections/RetrivaCards';
import RetrivaBanner from '../components/sections/RetrivaBanner';
import RetrivaSignals from '../components/sections/RetrivaSignals';
import RetrivaNote from '../components/sections/RetrivaNote';
import {
  RETRIVA_INTRO,
  RETRIVA_QUESTIONS,
  RETRIVA_FRAMEWORK,
  RETRIVA_SIGNALS,
  RETRIVA_CTA,
  RETRIVA_NOTE,
} from '../data/pages/retriva';

export default function Retriva() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f43d38] via-[#ee2d2b] to-[#240909] mx-3 md:mx-6 rounded-[24px] md:rounded-[32px] min-h-[400px] md:min-h-[500px] flex items-center justify-center px-6 py-24 md:py-32">
        <span className="absolute w-[420px] h-[420px] -left-24 -top-24 bg-[#ff5a4f] blur-[80px] rounded-full opacity-70" />
        <span className="absolute w-[480px] h-[480px] -right-24 -bottom-24 bg-[#4a0d0d] blur-[80px] rounded-full opacity-80" />

        <h1 className="relative z-10 flex text-white font-bold tracking-[-0.06em] leading-none text-[4.5rem] md:text-[8rem] xl:text-[12rem]">
          {'Retriva'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: '55%', rotate: 6 }}
              animate={{ opacity: 1, y: '0%', rotate: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.09 + 0.25,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </section>

      {/* Intro */}
      <section className="pt-20 md:pt-28 pb-14 md:pb-20 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <Tag>{RETRIVA_INTRO.tag}</Tag>
        </motion.div>

        <TextReveal
          as="h2"
          stagger={0.03}
          duration={0.6}
          className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight leading-tight text-ink max-w-3xl mb-6"
        >
          {RETRIVA_INTRO.heading}
        </TextReveal>

        <TextReveal
          as="p"
          delay={0.3}
          stagger={0.012}
          className="text-base leading-relaxed text-muted max-w-2xl"
        >
          {RETRIVA_INTRO.body}
        </TextReveal>

        <div className="mt-16 md:mt-20">
          <Tag>Retriva helps answer four critical questions</Tag>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8">
            {RETRIVA_QUESTIONS.map((q, i) => (
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
                  {q.num}
                </span>
                <h3 className="text-lg md:text-xl xl:text-2xl font-semibold tracking-tight leading-tight text-ink">
                  {q.text}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework cards */}
      <RetrivaCards framework={RETRIVA_FRAMEWORK} />

      {/* Banner */}
      <RetrivaBanner />

      {/* Signals */}
      <RetrivaSignals signals={RETRIVA_SIGNALS} />

      {/* CTA */}
      <section className="px-4 md:px-6 xl:px-header-pad max-w-site mx-auto pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <CTACard
            heading={RETRIVA_CTA.heading}
            buttonLabel={RETRIVA_CTA.buttonLabel}
            buttonTo="/contact"
            variant="red"
          />
        </motion.div>
      </section>

      {/* Note */}
      <RetrivaNote note={RETRIVA_NOTE} />
    </main>
  );
}