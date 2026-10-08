import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';

function WorkCard({ img, alt, badge, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: '-5% 0px -10% 0px' });

  return (
    <Link
      ref={ref}
      to="#"
      style={{ transitionDelay: `${delay}s` }}
      className={`group relative block overflow-hidden rounded-3xl bg-[#eee] no-underline
        aspect-[506/283] transition-[transform,opacity] duration-[500ms]
        hover:-translate-y-2 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] flex items-center overflow-hidden">
        <div
          className="flex items-center gap-16 whitespace-nowrap [animation-play-state:paused] group-hover:[animation-play-state:running]"
          style={{ animation: 'marqueeScroll 14s linear infinite' }}
        >
          {[0, 1, 2].map((k) => (
            <span key={k} className="contents">
              <span className="font-display italic font-semibold text-[clamp(3rem,6vw,5rem)] text-white tracking-[-0.02em] leading-none">
                View Project
              </span>
              <span className="inline-block shrink-0 w-[0.55em] h-[1.2em] border-[3px] border-white border-l-0 rounded-r-full -translate-y-[0.05em] text-[clamp(3rem,6vw,5rem)]" />
            </span>
          ))}
        </div>
      </div>
      <span className="absolute left-4 bottom-4 text-white font-sans text-[0.75rem] font-bold tracking-[-0.01em] px-3 py-[5px] border-2 border-accent rounded-full z-[3] pointer-events-none opacity-0 translate-y-1 transition-[opacity,transform] duration-[350ms] delay-[50ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0">
        {badge}
      </span>
    </Link>
  );
}

export default function WorkGrid({
  leftCards = [],
  rightCards = [],
  showViewAll = true,
  viewAllHref = '/our-work',
}) {
  return (
    <section className="py-12 px-6 max-w-site mx-auto">
      {showViewAll && (
        <div className="flex justify-end pb-6">
          <Link
            to={viewAllHref}
            className="inline-flex items-center gap-3 px-5 py-[10px] border-2 border-accent rounded-full text-ink bg-transparent text-[0.9rem] font-medium tracking-[-0.01em] no-underline transition-[transform,background,color] duration-300 hover:bg-accent hover:text-white hover:-translate-y-0.5 group"
          >
            <span>View All Work</span>
            <svg viewBox="0 0 24 24" width="16" height="16" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
        <div className="flex flex-col gap-4 md:gap-6">
          {leftCards.map((c, i) => <WorkCard key={i} {...c} delay={i * 0.08} />)}
        </div>
        <div className="flex flex-col gap-4 md:gap-6 md:mt-[84px]">
          {rightCards.map((c, i) => <WorkCard key={i} {...c} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}