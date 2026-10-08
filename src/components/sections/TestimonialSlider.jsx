import { useState } from 'react';

export default function TestimonialSlider({ slides = [] }) {
  const [idx, setIdx] = useState(0);
  const total = slides.length;
  const go = (n) => setIdx(((n % total) + total) % total);

  if (!total) return null;

  return (
    <section className="py-16 px-6 xl:py-24 xl:pb-[120px] max-w-site mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_2.4fr] gap-10 xl:gap-[60px] items-start">

        <div className="flex flex-col gap-10 xl:pt-4">
          <p className="text-[1.15rem] font-medium text-ink tracking-[-0.01em] leading-[1.35] max-w-[260px]">
            What our partners say about us
          </p>

          <div className="flex gap-[18px]">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(idx - 1)}
              className="w-14 h-14 xl:w-[76px] xl:h-[76px] rounded-full bg-ink text-white border-0 cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(idx + 1)}
              className="w-14 h-14 xl:w-[76px] xl:h-[76px] rounded-full bg-ink text-white border-0 cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid">
          <div className="grid grid-cols-1 grid-rows-1">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`col-start-1 row-start-1 flex flex-col gap-8 xl:gap-12 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${i === idx
                    ? 'opacity-100 translate-x-0 z-[2] pointer-events-auto'
                    : 'opacity-0 translate-x-[30px] pointer-events-none'}`}
              >
                <blockquote className="text-[clamp(1.35rem,2.8vw,2.4rem)] font-normal leading-[1.2] tracking-[-0.025em] text-ink m-0">
                  {s.quote}
                </blockquote>

                <div className="flex flex-col gap-1">
                  {s.logo ? (
                    <img
                      src={s.logo}
                      alt={s.company}
                      className="h-14 w-auto object-contain self-start mb-4"
                    />
                  ) : null}
                  <p className="text-base font-bold text-ink tracking-[-0.01em] leading-[1.4]">
                    {s.name}
                  </p>
                  <p className="text-base font-normal text-ink tracking-[-0.01em] leading-[1.4]">
                    {s.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}