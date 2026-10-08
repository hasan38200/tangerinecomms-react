import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TextReveal from '../shared/TextReveal';

function ServiceTitle({ children, delay = 0 }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-[-0.04em] text-ink leading-[0.95] mb-6"
    >
      {children}
    </motion.h2>
  );
}

function MarqueeStrip({ label }) {
  const items = Array.from({ length: 6 });
  return (
    <div className="flex items-center gap-8 whitespace-nowrap animate-[marqueeScroll_14s_linear_infinite] group-hover:[animation-play-state:running]">
      {items.map((_, i) => (
        <span key={i} className="flex items-center gap-8">
          <span
            className="text-white leading-none tracking-tight text-3xl md:text-5xl xl:text-6xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontWeight: 600,
            }}
          >
            {label}
          </span>
          <span className="inline-block shrink-0 w-[0.55em] h-[0.85em] border-[2.5px] border-white rounded-r-full border-l-0 -translate-y-[0.05em]" />
        </span>
      ))}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="pt-16 md:pt-20 pb-10 md:pb-12 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-7">
        {/* PR */}
        <article className="flex flex-col">
          <ServiceTitle delay={0.1}>PR</ServiceTitle>
          <TextReveal
            as="p"
            delay={0.2}
            stagger={0.012}
            className="text-base leading-relaxed text-ink mb-8 max-w-full"
          >
            Born in PR over 20 years ago, we're the world's leading independent agency, driven by our unwavering commitment to attention. Attention delivers real impact, and our track record proves it. Campaign after campaign, across every sector, we deliver award-winning, game changing results.
          </TextReveal>
          <Link
            to="/pr"
            className="group relative block aspect-square rounded-[20px] overflow-hidden bg-[#eee] max-w-full"
          >
            <img
              src="/images/pr.jpg"
              alt="PR campaign"
              className="w-full h-full object-cover transition-transform duration-[0.8s] group-hover:scale-105"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center overflow-hidden">
              <MarqueeStrip label="Discover PR" />
            </div>
          </Link>
        </article>

        {/* Social */}
        <article className="flex flex-col lg:mt-20">
          <ServiceTitle delay={0.2}>Social</ServiceTitle>
          <TextReveal
            as="p"
            delay={0.3}
            stagger={0.012}
            className="text-base leading-relaxed text-ink mb-8 max-w-full"
          >
            Raised in social, we're digital natives building superbrands through the power of attention, because we know that when brands invest in attention, they see an 84% increase in consideration and 40% uplift in brand recall. Our award-winning work earns global recognition not just for strategic thinking and creativity, but because we deliver real, tangible outcomes for brands.
          </TextReveal>
          <Link
            to="/socialmedia"
            className="group relative block aspect-square rounded-[20px] overflow-hidden bg-[#eee] max-w-full"
          >
            <img
              src="/images/social.jpg"
              alt="Social campaign"
              className="w-full h-full object-cover transition-transform duration-[0.8s] group-hover:scale-105"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center overflow-hidden">
              <MarqueeStrip label="Discover Social" />
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}