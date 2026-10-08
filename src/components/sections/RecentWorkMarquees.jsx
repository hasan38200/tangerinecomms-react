import Reveal from '../shared/Reveal';

export default function RecentWorkMarquees() {
  const items = Array.from({ length: 6 });

  return (
    <Reveal variant="up">
      <section className="pt-24 md:pt-28 pb-10 md:pb-12 overflow-hidden bg-white">
        <div className="overflow-hidden whitespace-nowrap py-3">
          <div className="inline-flex items-baseline gap-16 animate-[scrollLeft_30s_linear_infinite]">
            {items.map((_, i) => (
              <span
                key={i}
                className="text-ink leading-none tracking-tight text-[4rem] md:text-[7rem] xl:text-[10rem]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                Recent Work.
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap py-3">
          <div className="inline-flex items-baseline gap-16 animate-[scrollRight_30s_linear_infinite]">
            {items.map((_, i) => (
              <span
                key={i}
                className="text-ink leading-none tracking-tight text-[4rem] md:text-[7rem] xl:text-[10rem]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                Recent Work.
              </span>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}