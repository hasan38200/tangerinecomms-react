import { motion } from 'framer-motion';

function IntroLine({ children, delay = 0, italic = false }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={`block ${italic ? 'italic' : ''}`}
      style={
        italic
          ? {
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }
          : undefined
      }
    >
      {children}
    </motion.span>
  );
}

function IntroCopy({ children, delay = 0, className = '' }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={`text-base leading-relaxed text-ink ${className}`}
    >
      {children}
    </motion.p>
  );
}

export default function IntroSection() {
  return (
    <section className="bg-white py-16 md:py-24 xl:py-28 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 xl:gap-24 items-start">
        <h2 className="flex flex-col text-3xl md:text-4xl xl:text-5xl font-bold tracking-[-0.04em] text-ink leading-[1.05]">
          <IntroLine delay={0.1}>We build Superbrands</IntroLine>
          <IntroLine delay={0.25} >
            by making Attention pay
          </IntroLine>
        </h2>

        <div className="flex flex-col gap-6 md:gap-8 lg:pt-2">
          <IntroCopy delay={0.3}>
            Tangerine is a fiercely independent PR and Social agency.{' '}
            <strong className="font-bold underline">PR Week's Best Agency</strong> Outside of London
            2025,{' '}
            <strong className="font-bold underline">The Drum's Top 100 Indie Agencies 2025</strong>{' '}
            and{' '}
            <strong className="font-bold underline">
              Campaign's Global Agency of the Year 2024
            </strong>
            .
          </IntroCopy>

          <IntroCopy delay={0.5}>
            We turn great brands into superbrands for our consumer, B2B and corporate clients. How?
            Attention.
          </IntroCopy>

          <IntroCopy delay={0.7}>
            Our approach is simple. We capture attention, we convert it and we prove it. That's why our
            clients stick with us, because we deliver results that matter.
          </IntroCopy>
        </div>
      </div>
    </section>
  );
}