import { motion } from 'framer-motion';
import TextReveal from '../shared/TextReveal';

function Icon({ name }) {
  const paths = {
    family: 'M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c3.3 0 6 2 6 4.5V20H6v-1.5C6 16 8.7 14 12 14z',
    fuel: 'M8 3h8l-1 2h3v15H6V5h3l-1-2zm-1 4v1h10V7H7zm0 3v9h10v-9H7z',
    wellbeing: 'M12 21s-7-4.5-9.5-9C0 8 2 4 6 4c2.5 0 4 1.5 6 3.5C14 5.5 15.5 4 18 4c4 0 6 4 3.5 8C19 16.5 12 21 12 21z',
    clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
    money: 'M12 2v20M2 12h20M4 4l16 16M20 4L4 20',
    social: 'M8 12h8m-4-4v8M4 6h16v12H4z',
  };
  const isStroke = name === 'money' || name === 'social';
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill={isStroke ? 'none' : 'currentColor'} stroke={isStroke ? 'currentColor' : 'none'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}

export default function CareersBenefits({ benefits }) {
  return (
    <section className="pb-20 md:pb-24 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <TextReveal
          as="h2"
          stagger={0.035}
          duration={0.6}
          className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-[-0.04em] text-ink leading-tight mb-5"
        >
          {benefits.heading}
        </TextReveal>

        <TextReveal
          as="p"
          delay={0.25}
          stagger={0.012}
          className="text-sm md:text-base leading-relaxed text-muted"
        >
          {benefits.sub}
        </TextReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {benefits.cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
            className="bg-[#f5f2ec] rounded-2xl md:rounded-3xl p-7 md:p-8 xl:p-9 flex flex-col"
          >
            <span className="inline-flex items-center justify-center w-11 h-11 bg-accent text-white rounded-lg mb-5">
              <Icon name={card.icon} />
            </span>
            <h3 className="text-lg md:text-xl xl:text-2xl font-bold tracking-tight text-ink mb-4">
              {card.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-ink mb-4">{card.copy}</p>
            <ul className="flex flex-col gap-2 mt-auto">
              {card.list.map((item, li) => (
                <li key={li} className="text-sm leading-relaxed text-ink pl-4 relative">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}