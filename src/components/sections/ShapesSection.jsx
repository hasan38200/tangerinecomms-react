import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TextReveal from '../shared/TextReveal';

function ShapeTitle({ children, delay = 0 }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-[-0.04em] text-ink leading-[1.05] mb-5"
    >
      {children}
    </motion.h2>
  );
}

export default function ShapesSection() {
  return (
    <section className="pb-24 md:pb-32 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-7">
        <article className="flex flex-col">
          <ShapeTitle delay={0.1}>
            Shapes of
            <br />
            Attention
          </ShapeTitle>
          <TextReveal
            as="p"
            delay={0.2}
            stagger={0.015}
            className="text-sm md:text-base leading-relaxed text-ink mb-8"
          >
            Our research, The Shapes of Attention, discussed at Cannes Lions shows how brands can capture and hold attention and why this is important to build brand perceptions and support growth plans.
          </TextReveal>
          <Link to="/our-reports" className="group relative block aspect-square rounded-3xl overflow-hidden bg-[#f0f0f0]">
            <img
              src="/images/shapes.jpg"
              alt="Shapes of Attention"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center overflow-hidden">
              <div className="flex items-center gap-16 whitespace-nowrap animate-[marqueeScroll_14s_linear_infinite] group-hover:[animation-play-state:running]">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span key={i} className="flex items-center gap-16">
                    <span className="text-white text-3xl md:text-5xl xl:text-6xl leading-none" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600 }}>
                      View Report
                    </span>
                    <span className="inline-block shrink-0 w-[0.55em] h-[1.2em] border-[3px] border-white rounded-r-full border-l-0" />
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </article>

        <article className="flex flex-col lg:mt-20">
          <ShapeTitle delay={0.2}>Project 10</ShapeTitle>
          <TextReveal
            as="p"
            delay={0.3}
            stagger={0.015}
            className="text-sm md:text-base leading-relaxed text-ink mb-8"
          >
            Capturing and holding attention to drive tangible impact. Project 10 is a proprietary storytelling framework designed to not only capture attention, but hold it beyond the 10 second threshold proven to drive consideration and long term brand growth.
          </TextReveal>
          <Link to="/strategy" className="group relative block aspect-square rounded-3xl overflow-hidden bg-[#f0f0f0]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M 30 40 Q 30 10, 60 10 L 105 10 Q 130 10, 130 30 Q 130 55, 105 55 Q 90 55, 82 45 Q 70 30, 55 30 Q 45 30, 40 40 L 40 60 Q 40 75, 55 75 Q 75 75, 95 55 Q 130 25, 180 25 Q 240 25, 280 30 Q 320 38, 340 20 Q 355 5, 370 20 Q 400 60, 400 100 L 400 370 Q 400 395, 375 395 L 25 395 Q 0 395, 0 370 L 0 60 Q 0 40, 30 40 Z"
                fill="#e94b3c"
              />
            </svg>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-3xl xl:text-4xl font-extrabold tracking-tight z-10 inline-flex items-center">
              Project<span className="mx-0.5">›</span>10
            </span>
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center overflow-hidden z-20">
              <div className="flex items-center gap-16 whitespace-nowrap animate-[marqueeScroll_14s_linear_infinite] group-hover:[animation-play-state:running]">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span key={i} className="flex items-center gap-16">
                    <span className="text-white text-3xl md:text-5xl xl:text-6xl leading-none" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600 }}>
                      Find out more
                    </span>
                    <span className="inline-block shrink-0 w-[0.55em] h-[1.2em] border-[3px] border-white rounded-r-full border-l-0" />
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}