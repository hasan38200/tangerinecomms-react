import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="mx-3 md:mx-6 xl:mx-7 rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#eee]">
      <motion.img
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        src="/images/about-hero.jpg"
        alt="Tangerine team standing outside the office"
        className="w-full h-auto max-h-[500px] object-cover"
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
    </section>
  );
}