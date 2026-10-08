import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TextReveal from '../shared/TextReveal';

export default function RetrivaNote({ note }) {
  return (
    <section className="px-4 md:px-6 xl:px-header-pad max-w-site mx-auto pb-24 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="ml-auto max-w-[520px]"
      >
        <TextReveal
          as="p"
          stagger={0.015}
          className="text-sm md:text-[0.85rem] font-bold leading-relaxed text-ink mb-6"
        >
          {note.text}
        </TextReveal>

        <Link
          to={note.buttonTo}
          className="flex items-center justify-center w-full max-w-[520px] px-8 py-4 md:py-5 bg-ink text-white rounded-full text-sm md:text-base font-bold transition-colors hover:bg-accent"
        >
          {note.buttonLabel}
        </Link>
      </motion.div>
    </section>
  );
}