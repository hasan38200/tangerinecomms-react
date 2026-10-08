import { motion } from 'framer-motion';

export default function CareersTeamPhoto() {
  return (
    <section className="pb-20 md:pb-24 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl overflow-hidden bg-[#eee] aspect-[1500/760]"
      >
        <img
          src="/images/team-photo.jpg"
          alt="Tangerine team group photo in a theatre"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </motion.div>
    </section>
  );
}