import { useRef } from 'react';
import useInView from '../../hooks/useInView';

const AWARDS = ['prca', 'uksocial', 'b2b', 'sabre', 'prmoment', 'warc'];

function AwardLogo({ type, ariaHidden }) {
  const common = ariaHidden ? { 'aria-hidden': true } : {};

  if (type === 'prca') {
    return (
      <div className="flex items-center gap-[10px] h-20 min-w-[180px] shrink-0 opacity-90 hover:opacity-100 transition-opacity" {...common}>
        <span className="relative w-10 h-10 bg-[#1a5fa0] shrink-0 before:content-[''] before:absolute before:bottom-1 before:right-1 before:w-3 before:h-3 before:bg-[#f4c025]" />
        <span className="flex flex-col leading-[0.95] font-sans">
          <span className="text-[0.7rem] font-bold text-[#1a5fa0]">PRCA</span>
          <span className="text-[1.4rem] font-extrabold text-ink tracking-[-0.03em]">DARE</span>
          <span className="text-[0.6rem] font-bold text-ink">AWARDS 2024</span>
        </span>
      </div>
    );
  }

  if (type === 'uksocial') {
    return (
      <div className="flex items-center gap-3 h-20 min-w-[180px] shrink-0 opacity-90 hover:opacity-100 transition-opacity" {...common}>
        <span
          className="w-8 h-8 shrink-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #e91e63 2.5px, transparent 3px)',
            backgroundSize: '8px 8px',
          }}
        />
        <span className="font-sans text-[0.95rem] font-bold leading-[1.1] text-[#e91e63]">
          UK Social<br />Media Awards
        </span>
      </div>
    );
  }

  if (type === 'b2b') {
    return (
      <div className="flex items-center gap-[10px] h-20 min-w-[180px] shrink-0 opacity-90 hover:opacity-100 transition-opacity" {...common}>
        <span
          className="w-7 h-7 shrink-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #d97a1c 2px, transparent 2.5px)',
            backgroundSize: '7px 7px',
          }}
        />
        <span className="font-sans text-base font-semibold text-ink">B2B Marketing</span>
      </div>
    );
  }

  if (type === 'sabre') {
    return (
      <div className="flex flex-col items-start h-20 min-w-[180px] shrink-0 opacity-90 hover:opacity-100 transition-opacity" {...common}>
        <span className="flex flex-col leading-[0.95] font-sans">
          <span className="text-[1.25rem] font-extrabold text-ink tracking-[-0.03em]">SABRE</span>
          <span className="text-[1.25rem] font-normal text-ink tracking-[-0.03em]">Awards</span>
        </span>
      </div>
    );
  }

  if (type === 'prmoment') {
    return (
      <div className="flex flex-col items-start h-20 min-w-[180px] shrink-0 opacity-90 hover:opacity-100 transition-opacity" {...common}>
        <span className="font-sans text-[0.95rem] font-bold leading-[1.1] text-ink">
          PRmoment<br />Awards 2025
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center h-20 min-w-[180px] shrink-0 opacity-90 hover:opacity-100 transition-opacity" {...common}>
      <span className="relative w-11 h-11 rounded-full bg-accent shrink-0 before:content-['w'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:font-sans before:font-extrabold before:text-2xl before:text-white before:leading-none" />
    </div>
  );
}

export default function AwardsMarquee({ title = <>Our Recent<br />Awards</> }) {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-10 px-6 md:px-12 xl:pb-[120px] max-w-site mx-auto">
      <div
        className={`bg-soft rounded-[32px] overflow-hidden transition-[width,min-height,padding] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${inView ? 'w-full px-6 md:px-[72px] pt-12 md:pt-[72px] pb-10 md:pb-[56px]' : 'w-[40%] min-h-[180px] p-0'}`}
      >
        <h2 className="block overflow-hidden text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.035em] leading-[1.05] text-ink mb-12 md:mb-20">
          <span
            className={`block transition-transform duration-[1100ms] delay-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${inView ? 'translate-y-0' : 'translate-y-[110%]'}`}
          >
            {title}
          </span>
        </h2>

        <div
          className={`overflow-hidden relative transition-opacity duration-[900ms] delay-[900ms]
            ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="flex items-center gap-[60px] whitespace-nowrap w-max"
            style={{ animation: 'marquee33 30s linear infinite' }}
          >
            {AWARDS.map((t, i) => <AwardLogo key={`a${i}`} type={t} />)}
            {AWARDS.map((t, i) => <AwardLogo key={`b${i}`} type={t} ariaHidden />)}
            {AWARDS.map((t, i) => <AwardLogo key={`c${i}`} type={t} ariaHidden />)}
          </div>
        </div>
      </div>
    </section>
  );
}