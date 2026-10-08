import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import AwardsMarquee from '../components/sections/AwardsMarquee';
import TestimonialSlider from '../components/sections/TestimonialSlider';
import WorkGrid from '../components/sections/WorkGrid';

/* ============================================================
   SplitWords — staggered word reveal (matches pr-intro CSS)
   ============================================================ */
function SplitWords({ text, step = 0.5, active = false, baseDelay = 0 }) {
  const words = String(text).split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            '--d': i * step,
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(15px)',
            transition:
              'opacity 0.5s cubic-bezier(0.2,0.8,0.2,1), transform 0.5s cubic-bezier(0.2,0.8,0.2,1)',
            transitionDelay: `calc(${baseDelay}s + var(--d) * 0.015s)`,
            willChange: 'opacity, transform',
          }}
        >
          {w}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </>
  );
}

/* ============================================================
   PR INTRO
   ============================================================ */
function PrIntro() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  const titleLines = [
    ['We', 'think', 'big,', 'we', 'act', 'fast,'],
    ['we', 'make', 'attention', 'pay'],
  ];

  const paragraph1 =
    "Born in PR over 20 years ago, raised in social and digitally native, we are proudly the world's leading independent PR agency because we deliver award winning, game changing results for our clients. Our campaigns and bold thinking capture attention and deliver real business impact for client partners, helping them build superbrands.";

  const paragraph2 =
    "Just look at our recent WARC award-winning work for Bodyform. In celebration of the brand's 40th birthday, we uncensored women's health in the media to achieve a 10% sales increase and change the media landscape permanently.";

  return (
    <section ref={ref} className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 py-16 md:px-[35px] md:py-20 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-[60px] items-start">

        {/* LEFT — tag + title */}
        <div>
          <span
            className="inline-block font-sans text-[0.8rem] font-medium uppercase border border-[#F78383] mb-5 px-5 py-1.5 rounded-[30px] tracking-[0.05em]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(15px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            PR
          </span>

          <h1
            className="font-sans block text-[#111]"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            {titleLines.map((line, li) => (
              <span key={li} className="block">
                {line.map((w, wi) => {
                  const d = li === 0 ? wi : 6 + wi;
                  return (
                    <span
                      key={wi}
                      className="inline-block"
                      style={{
                        '--d': d,
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(15px)',
                        transition:
                          'opacity 0.4s cubic-bezier(0.2,0.8,0.2,1), transform 0.4s cubic-bezier(0.2,0.8,0.2,1)',
                        transitionDelay: 'calc(var(--d) * 0.04s)',
                        willChange: 'opacity, transform',
                      }}
                    >
                      {w}{wi < line.length - 1 ? '\u00A0' : ''}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
        </div>

        {/* RIGHT — paragraphs */}
        <div>
          <p
            className="font-sans text-base text-[#333] font-normal"
            style={{
              lineHeight: 1.3,
              marginTop: '50px',
              marginBottom: '30px',
            }}
          >
            <SplitWords text={paragraph1} step={1} active={inView} baseDelay={0} />
          </p>
          <p
            className="font-sans text-base text-[#333] font-normal"
            style={{
              lineHeight: 1.3,
              marginTop: '28px',
              marginBottom: '30px',
            }}
          >
            <SplitWords text={paragraph2} step={1} active={inView} baseDelay={0} />
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PR MOMENTS
   ============================================================ */
function PrMoments() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  const titleLines = [
    ['Moments'],
    ['that', 'matter'],
  ];

  const body =
    'Our award-winning team of ex-journalists, experienced creators, and media experts use newsjacking to react quickest to the news agenda, trending topics and cultural moments happening right now, producing story-enhancing, on-brand responses and high-profile comment opportunities that influence the conversation.';

  return (
    <section ref={ref}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-[25px] py-5 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-start">

        {/* LEFT — title */}
        <div>
          <h2
            className="font-sans block"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 4.5rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            {titleLines.map((line, li) => (
              <span key={li} className="block">
                {line.map((w, wi) => {
                  const d = li === 0 ? wi : 1 + wi;
                  return (
                    <span
                      key={wi}
                      className="inline-block"
                      style={{
                        '--d': d,
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(15px)',
                        transition:
                          'opacity 0.6s cubic-bezier(0.2,0.8,0.2,1), transform 0.6s cubic-bezier(0.2,0.8,0.2,1)',
                        transitionDelay: 'calc(var(--d) * 0.04s)',
                      }}
                    >
                      {w}{wi < line.length - 1 ? '\u00A0' : ''}
                    </span>
                  );
                })}
              </span>
            ))}
          </h2>
        </div>

        {/* RIGHT — body */}
        <div>
          <p
            className="font-sans text-base text-[#444]"
            style={{ lineHeight: 1.7 }}
          >
            <SplitWords text={body} step={1} active={inView} baseDelay={0} />
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RECENT WORK CARDS (horizontal infinite marquee)
   ============================================================ */
function SpecsaversSocialCard() {
  return (
    <div className="shrink-0 block w-[220px] md:w-[260px] h-[290px] md:h-[340px] xl:w-80 xl:h-[400px] rounded-2xl xl:rounded-[20px] overflow-hidden relative bg-[#d6e5d0] p-5 flex items-center justify-center">
      <div className="bg-white border-[1.5px] border-[#111] rounded-2xl p-5 w-full max-w-[280px] shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-2.5 mb-3.5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Specsavers_Logo.svg/320px-Specsavers_Logo.svg.png"
            alt="Specsavers"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col leading-[1.2]">
            <strong className="text-[0.95rem] font-bold">Specsavers</strong>
            <span className="text-[0.8rem] text-[#666]">@Specsavers</span>
          </div>
        </div>
        <p className="text-[1.05rem] font-semibold leading-[1.35] text-[#111] m-0">
          Free eye tests in Blackpool tomorrow.
        </p>
      </div>
    </div>
  );
}

function RedTypographyCard() {
  return (
    <div className="shrink-0 block w-[220px] md:w-[260px] h-[290px] md:h-[340px] xl:w-80 xl:h-[400px] rounded-2xl xl:rounded-[20px] overflow-hidden relative bg-[#e84a3b] flex items-center justify-center p-[30px]">
      <div className="border-2 border-white rounded-xl p-6 w-full max-w-[220px]">
        <h3 className="font-sans text-[1.15rem] md:text-[1.35rem] xl:text-[1.65rem] font-extrabold text-white leading-[1.05] tracking-[-0.03em] m-0">
          If @
          <br />
          cor
          <br />
          sto
          <br />
          wel
          <br />
          Gril
        </h3>
      </div>
    </div>
  );
}

function PeldonRoseCard() {
  return (
    <div className="shrink-0 block w-[220px] md:w-[260px] h-[290px] md:h-[340px] xl:w-80 xl:h-[400px] rounded-2xl xl:rounded-[20px] overflow-hidden relative bg-[#f2a3a3] p-4 flex items-center justify-center">
      <div className="bg-white border-[1.5px] border-[#111] rounded-2xl p-3.5 w-full max-w-[260px] shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-[0.85rem] font-bold">
            PR
          </span>
          <div className="flex flex-col leading-[1.2]">
            <strong className="text-[0.95rem] font-bold">Peldon Rose</strong>
            <span className="text-[0.8rem] text-[#666]">@PeldonRose</span>
          </div>
        </div>
        <img
          src="images/work-1.jpg"
          alt=""
          className="w-full h-[130px] object-cover rounded-lg mb-2.5"
        />
        <div className="flex items-center gap-3.5 text-[#111] mt-1">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path
              d="M12 21s-7-4.5-9.5-9C0 8 2 4 6 4c2.5 0 4 1.5 6 3.5C14 5.5 15.5 4 18 4c4 0 6 4 3.5 8C19 16.5 12 21 12 21z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
          <svg viewBox="0 0 24 24" width="22" height="22">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M21 12l-4 4-5-5-5 5-4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path
              d="M22 2L11 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2l-7 20-4-9-9-4 20-7z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg viewBox="0 0 24 24" width="22" height="22" className="ml-auto">
            <path
              d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ImageCard({ img, alt }) {
  return (
    <div className="shrink-0 block w-[220px] md:w-[260px] h-[290px] md:h-[340px] xl:w-80 xl:h-[400px] rounded-2xl xl:rounded-[20px] overflow-hidden relative bg-[#f0f0f0]">
      <img src={img} alt={alt} className="w-full h-full object-cover block" />
    </div>
  );
}

function RecentWorkCards() {
  const cards = (
    <>
      <ImageCard img="images/work-1.jpg" alt="Project 1" />
      <SpecsaversSocialCard />
      <ImageCard img="images/work-2.jpg" alt="Project 2" />
      <RedTypographyCard />
      <ImageCard img="images/work-3.jpg" alt="Project 3" />
      <PeldonRoseCard />
      <ImageCard img="images/work-4.jpg" alt="Project 4" />
    </>
  );

  return (
    <section className="py-6 md:py-10 overflow-hidden relative">
      <div
        className="flex items-center gap-3 md:gap-4 xl:gap-6 w-max will-change-transform"
        style={{ animation: 'marqueeScroll 15s linear infinite' }}
      >
        {cards}
        {/* Duplicate set for seamless loop */}
        {cards}
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
const PR_TESTIMONIALS = [
  {
    quote:
      'I trust Tangerine completely. They get our business and they approach PR and Social in a genuinely progressive way. The results speak for themselves.',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Specsavers_Logo.svg/320px-Specsavers_Logo.svg.png',
    name: 'Lisa Hale, Head of Brand Activation, Social and PR',
    company: 'Specsavers',
  },
  {
    quote:
      "Tangerine's strategic approach and creative solutions have significantly boosted our global presence and market leadership.",
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Specsavers_Logo.svg/320px-Specsavers_Logo.svg.png',
    name: 'Joe Glenon, Communications Marketing Manager',
    company: 'Topcon',
  },
  {
    quote:
      'Working with Tangerine has transformed how we think about PR and social. They bring strategic rigour combined with genuine creative bravery — a rare combination.',
    name: 'James Anderson, Marketing Director',
    company: 'TENA Men',
  },
];

const PR_LEFT_CARDS = [
  { img: 'images/work-1.jpg', alt: 'Project', badge: 'Specsavers' },
  { img: 'images/work-3.jpg', alt: 'Project', badge: 'Specsavers' },
];
const PR_RIGHT_CARDS = [
  { img: 'images/work-2.jpg', alt: 'Project', badge: 'Specsavers' },
  { img: 'images/work-4.jpg', alt: 'Project', badge: 'Specsavers' },
];

export default function PR() {
  return (
    <main>
      {/* HERO */}
      <section className="w-full h-[50vh] md:h-[70vh] overflow-hidden relative">
        <img
          src="images/pr-hero.jpg"
          alt="Woman shopping in supermarket"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
      </section>

      <PrIntro />
      <RecentWorkCards />
      <PrMoments />

      <WorkGrid
        leftCards={PR_LEFT_CARDS}
        rightCards={PR_RIGHT_CARDS}
        viewAllHref="/our-work"
        showViewAll
      />

      <AwardsMarquee
        title={
          <>
            Recent
            <br />
            Award Wins
          </>
        }
      />

      <TestimonialSlider slides={PR_TESTIMONIALS} />
    </main>
  );
}