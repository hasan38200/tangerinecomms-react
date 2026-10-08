import { motion } from 'framer-motion';
import TextReveal from '../shared/TextReveal';
import Tag from '../shared/Tag';

function CardIcon({ name }) {
  const paths = {
    score: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
      </>
    ),
    audit: <path d="M5 12l5 5L20 7" />,
    roadmap: (
      <>
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4z" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

export default function RetrivaCards({ framework }) {
  return (
    <section className="pt-16 md:pt-20 pb-16 md:pb-24 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div className="mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <Tag>{framework.tag}</Tag>
        </motion.div>
        <TextReveal
          as="h2"
          stagger={0.035}
          duration={0.6}
          className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight leading-tight text-ink max-w-3xl"
        >
          {framework.heading}
        </TextReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {framework.cards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="bg-[#f5f2ec] rounded-3xl p-7 md:p-8 xl:p-10 flex flex-col"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent text-white flex items-center justify-center mb-6">
              <CardIcon name={card.icon} />
            </div>

            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-ink mb-2">
              {card.title}
            </h3>
            <p className="text-sm font-semibold text-[#666] mb-5">{card.sub}</p>
            <p className="text-sm md:text-base leading-relaxed text-ink mb-4">{card.copy}</p>
            <p className="text-sm md:text-base leading-relaxed text-ink mb-3 font-semibold">
              {card.listLabel}
            </p>
            <ul className="flex flex-col gap-2">
              {card.list.map((item, li) => (
                <li
                  key={li}
                  className="text-sm md:text-base leading-relaxed text-ink pl-5 relative"
                >
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}