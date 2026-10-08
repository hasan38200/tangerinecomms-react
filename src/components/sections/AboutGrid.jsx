import { motion } from 'framer-motion';

export default function AboutGrid({ items }) {
  return (
    <section className="pb-20 md:pb-24 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#eee] aspect-[4/5]"
        >
          <img
            src={items[0].img}
            alt={items[0].alt}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </motion.div>

        <div className="flex flex-col gap-5">
          {items.slice(1).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.1 }}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#eee] aspect-[5/3.4]"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}