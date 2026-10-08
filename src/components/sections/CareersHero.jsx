import { motion } from 'framer-motion';

export default function CareersHero({ slides }) {
  /* Duplicate the slides so the marquee has enough content to loop seamlessly */
  const doubled = [...slides, ...slides];

  return (
    <section className="px-4 md:px-6 xl:px-header-pad max-w-site mx-auto pt-16 md:pt-24 pb-14 md:pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-[-0.04em] text-ink leading-[1.02] mb-10 md:mb-14"
      >
        Our
        <br />
        Careers
      </motion.h1>

      <div className="overflow-hidden -mx-4 md:-mx-6 xl:mx-0">
        <div className="flex gap-4 md:gap-6 w-max animate-[scrollLeft_60s_linear_infinite]">
          {doubled.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] md:w-[320px] xl:w-[340px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#eee]"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}