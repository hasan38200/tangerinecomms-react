import { motion } from 'framer-motion';
import {
  fadeUp,
  fadeIn,
  scaleIn,
  slideFromLeft,
  slideFromRight,
  viewportOnce,
} from '../../lib/motionVariants';

const variantMap = {
  up: fadeUp,
  fade: fadeIn,
  scale: scaleIn,
  left: slideFromLeft,
  right: slideFromRight,
};

/**
 * Reveal — wraps any content and animates it in when scrolled into view.
 *
 * Props:
 *   variant   "up" | "fade" | "scale" | "left" | "right"   (default: "up")
 *   delay     seconds before animation starts              (default: 0)
 *   className Tailwind classes passed through to the wrapper
 *   as        HTML element to render                        (default: "div")
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div;
  const variants = variantMap[variant] || fadeUp;

  const finalVariants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        ...variants.visible.transition,
        delay,
      },
    },
  };

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={finalVariants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}