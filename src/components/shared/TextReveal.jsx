import { motion } from 'framer-motion';

export default function TextReveal({
  children,
  as = 'p',
  delay = 0,
  stagger = 0.03,
  duration = 0.5,
  className = '',
}) {
  const MotionTag = motion[as] || motion.p;
  const text = typeof children === 'string' ? children : String(children ?? '');
  const words = text.split(/(\s+)/).filter((w) => w.length > 0);

  return (
    <MotionTag className={className}>
      {words.map((w, i) =>
        /^\s+$/.test(w) ? (
          <span key={i}>{w}</span>
        ) : (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block will-change-transform"
          >
            {w}
          </motion.span>
        )
      )}
    </MotionTag>
  );
}