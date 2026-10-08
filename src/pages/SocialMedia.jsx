import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import AwardsMarquee from '../components/sections/AwardsMarquee';
import WorkGrid from '../components/sections/WorkGrid';

/* ============================================================
   SplitWords — staggered word reveal
   ============================================================ */
function SplitWords({ text, step = 0.5, active = false }) {
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
            transitionDelay: 'calc(var(--d) * 0.015s)',
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
   SOCIAL INTRO
   ============================================================ */
function SocialIntro() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  const titleLines = [
    ['We', 'think', 'big,', 'we', 'act', 'fast,'],
    ['we', 'make', 'attention', 'pay'],
  ];

  const paragraphs = [
    "Born in PR and raised in social, we're digital natives building superbrands through the power of attention.",
    'When brands invest in attention they see an 84% increase in purchase intent and a 40% lift in brand recall so we combine the thinking of a big creative agency with the speed and agility of a PR machine to capture attention and convert it, delivering real, tangible results for brands.',
    "Our award-winning work earns global recognition not just for strategic thinking and creativity, but also for its effectiveness. Social activation of the Cannes-Award-winning Misheard Lyrics campaign for Specsavers saw a 66% increase in hearing test bookings, whilst the more recent Best Worst Team campaign resulted in a 70% spike in brand consideration.",
  ];

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
            Social
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
          {paragraphs.map((text, pIdx) => (
            <p
              key={pIdx}
              className="font-sans text-base text-[#333] font-normal"
              style={{
                lineHeight: 1.3,
                marginTop: pIdx === 0 ? '50px' : '28px',
                marginBottom: '30px',
              }}
            >
              <SplitWords text={text} step={0.5} active={inView} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RECENT WORK CARDS — same visual set as PR page
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
            <path d="M22 2L11 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2l-7 20-4-9-9-4 20-7z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" width="22" height="22" className="ml-auto">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeWidth="1.8" />
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
        {cards}
      </div>
    </section>
  );
}

/* ============================================================
   SOCIAL MOMENTS
   ============================================================ */
function SocialMoments() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  const paragraph1 =
    'Our award-winning team of untamed minds, experienced creators, and concise communicators react quickest to moments happening right now, producing story-enhancing, on-brand responses that people want to talk about and share.';

  const paragraph2 =
    "Our work gets you trending, lands you in the group chat. Whether it's a four-word 'xeet' grabbing 20 pieces of coverage or a pitch-perfect TikTok, we place your brand firmly at the centre of attention, whilst others are still chasing their tails.";

  const titleLines = [
    ['We', 'put', 'brands', 'at', 'the', 'centre', 'of', 'attention'],
    ['in', 'the', 'moments', 'that', 'matter'],
  ];

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
                  const d = li === 0 ? wi : 8 + wi;
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
            style={{ lineHeight: 1.7, marginBottom: '28px' }}
          >
            <SplitWords text={paragraph1} step={1} active={inView} />
          </p>
          <p
            className="font-sans text-base text-[#444]"
            style={{ lineHeight: 1.7 }}
          >
            <SplitWords text={paragraph2} step={1} active={inView} />
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROUD PARTNERS WITH — Meta + TikTok tiles
   ============================================================ */
function ProudPartners() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: '0px',
  });

  return (
    <section
      ref={ref}
      className="max-w-site mx-auto px-5 py-12 md:px-12 md:py-20 md:pb-[140px] text-center"
    >
      <h2
        className="font-sans text-[1.25rem] md:text-[1.6rem] font-semibold tracking-[-0.03em] mb-10"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition:
            'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        Proud partners with
      </h2>

      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        <div
          className="flex items-center justify-center gap-3 w-full max-w-[320px] md:w-[280px] h-[110px] md:h-[140px] rounded-2xl text-white font-bold text-[1.6rem] md:text-[2rem] tracking-[-0.03em]"
          style={{
            background: '#0a0a5c',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition:
              'opacity 0.8s ease 0.15s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s',
          }}
        >
          <svg viewBox="0 0 64 32" width="52" height="26">
            <path
              d="M8 26c-4 0-6-4-6-10S5 4 10 4c6 0 10 8 14 14s6 8 10 8c5 0 8-5 8-10S39 4 34 4c-6 0-9 6-13 12S12 26 8 26z"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Meta</span>
        </div>

        <div
          className="flex items-center justify-center gap-3 w-full max-w-[320px] md:w-[280px] h-[110px] md:h-[140px] rounded-2xl text-white font-bold text-[1.6rem] md:text-[2rem] tracking-[-0.03em]"
          style={{
            background: '#000',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition:
              'opacity 0.8s ease 0.3s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s',
          }}
        >
          <svg viewBox="0 0 24 24" width="40" height="40">
            <path
              d="M16 3c.3 2.4 1.8 4 4 4.2v3.1c-1.5 0-2.9-.5-4-1.3v6.2c0 3.2-2.5 5.8-5.7 5.8S4.6 20.4 4.6 17.2 7.1 11.5 10.3 11.5c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.6 2.5 2.6 2.6-1.2 2.6-2.6V3H16z"
              fill="#fff"
            />
          </svg>
          <span>TikTok</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
const SOCIAL_LEFT_CARDS = [
  { img: 'images/work-1.jpg', alt: 'Specsavers project', badge: 'Specsavers' },
  { img: 'images/work-3.jpg', alt: 'Specsavers project', badge: 'Specsavers' },
];
const SOCIAL_RIGHT_CARDS = [
  { img: 'images/work-2.jpg', alt: 'Specsavers project', badge: 'Specsavers' },
  { img: 'images/work-4.jpg', alt: 'Specsavers project', badge: 'Specsavers' },
];

export default function SocialMedia() {
  return (
    <main>
      {/* HERO */}
      <section className="w-full h-[50vh] md:h-screen overflow-hidden relative">
        <img
          src="images/social-hero.jpg"
          alt="Specsavers football team"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
      </section>

      <SocialIntro />
      <RecentWorkCards />
      <SocialMoments />

      <AwardsMarquee
        title={
          <>
            Our Recent
            <br />
            Awards
          </>
        }
      />

      <ProudPartners />

      <WorkGrid
        leftCards={SOCIAL_LEFT_CARDS}
        rightCards={SOCIAL_RIGHT_CARDS}
        viewAllHref="/our-work"
        showViewAll
      />
    </main>
  );
}