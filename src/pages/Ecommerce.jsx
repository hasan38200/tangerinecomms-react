import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import AwardsMarquee from '../components/sections/AwardsMarquee';
import TestimonialSlider from '../components/sections/TestimonialSlider';
import WorkGrid from '../components/sections/WorkGrid';

/* ============================================================
   SplitWords — staggered word reveal (identical to B2B)
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
              'opacity 0.4s cubic-bezier(0.2,0.8,0.2,1), transform 0.4s cubic-bezier(0.2,0.8,0.2,1)',
            transitionDelay: 'calc(var(--d) * 0.04s)',
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
   ECOMMERCE INTRO
   ============================================================ */
function EcommerceIntro() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  const titleLines = [
    ['Making', 'attention', 'pay'],
    ['for', 'B2B', 'brands'],
  ];

  const paragraphs = [
    "We work with B2B brands that want to shake things up in their industry and take the fight for attention beyond their sector.",
    "We help them to cut through the mainstream noise with amazing stories and award-winning campaigns that capture the attention of the right audiences at the right time.",
    "Our work builds emotional connections and long-term relationships to make our client's brands the go-to option when it's time to buy. We balance brand building with sales activation to deliver tangible results that have real business impact.",
    "The brands we work with are more trusted, more respected, and more influential.",
  ];

  return (
    <section ref={ref} className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 py-[60px] md:px-[35px] md:py-20 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-[60px] items-start">

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
            B2B
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
                  const d = li * 3 + wi;
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
              className="font-sans text-[1rem] text-[#333] font-normal"
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
   CRISIS LAB (identical to B2B)
   ============================================================ */
function CrisisLab() {
  const ref = useRef(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;

    const play = () => {
      if (done) return;
      done = true;
      setPlayed(true);
    };

    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.75 && r.bottom > vh * 0.15) play();
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            play();
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -12% 0px' }
    );
    io.observe(el);

    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    window.addEventListener('load', check);

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      window.removeEventListener('load', check);
    };
  }, []);

  const crisisParagraphs = [
    "The Crisis Lab by Tangerine is a premium, half-day simulation for senior decision-makers who want to strengthen their crisis comms, reputation management and internal decision-making under pressure.",
    "It combines live consultancy from our B2B and Corporate team, with bespoke AI-generated scenarios and newsroom-style reactive planning. It is designed to reflect real reputational threats and test a team's ability to protect attention, respond to scrutiny and lead recovery.",
    "The new simulator has been developed as part of our £1.2m AI investment and is fully integrated into Tangerine's Corporate Newsroom.",
    "Contact us for a live demonstration or to find out more.",
  ];

  const crisisTitleWords = ['An', 'AI-powered', 'crisis', 'communications', 'lab'];

  const chips = [
    { text: 'Breaking: story picked up', pos: 'top-[14%] left-[8%]', delay: 2.2 },
    { text: 'Holding statement drafted', pos: 'top-[26%] right-[6%]', delay: 4.45 },
    { text: '12 press enquiries', pos: 'bottom-[26%] left-[7%]', delay: 6.7 },
    { text: 'Sentiment stabilising', pos: 'bottom-[14%] right-[8%]', delay: 8.95 },
  ];

  return (
    <section
      ref={ref}
      id="crisis"
      className="max-w-site mx-auto px-6 py-6 xl:px-12 xl:py-10 xl:pb-[100px]"
    >
      <div className="bg-soft rounded-3xl xl:rounded-[32px] p-6 xl:p-[60px] grid grid-cols-1 xl:grid-cols-[0.95fr_1fr] gap-9 xl:gap-[70px] items-center">

        {/* ---------- VISUAL ---------- */}
        <div
          aria-hidden="true"
          className="relative overflow-hidden rounded-3xl aspect-square xl:aspect-[4/5] bg-[#e4180f] isolate"
          style={{
            clipPath: played
              ? 'inset(0 0 0 0 round 24px)'
              : 'inset(100% 0 0 0 round 24px)',
            transition: 'clip-path 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Blobs */}
          <span
            className="absolute rounded-full blur-[50px] will-change-transform z-[1] w-[70%] h-[55%] -top-[10%] -left-[10%] bg-[#ff2a1a]"
            style={{ animation: played ? 'cvDrift1 9s ease-in-out infinite alternate' : 'none' }}
          />
          <span
            className="absolute rounded-full blur-[50px] will-change-transform z-[1] w-[60%] h-[50%] top-[30%] -right-[15%] bg-[#b80a05]"
            style={{ animation: played ? 'cvDrift2 11s ease-in-out infinite alternate' : 'none' }}
          />
          <span
            className="absolute rounded-full blur-[50px] will-change-transform z-[1] w-[75%] h-[55%] -bottom-[20%] left-[5%] bg-[#ff6a4d]"
            style={{ animation: played ? 'cvDrift3 13s ease-in-out infinite alternate' : 'none' }}
          />
          <span
            className="absolute -right-[25%] -bottom-[20%] w-[90%] h-[70%] z-[2]"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 65%)',
              animation: played ? 'cvGlow 6s ease-in-out infinite alternate' : 'none',
            }}
          />

          {/* Rings */}
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className="absolute left-1/2 top-1/2 w-[32%] aspect-square border border-white/65 rounded-full z-[3]"
              style={{
                transform: 'translate(-50%, -50%) scale(0.4)',
                opacity: 0,
                animation: played
                  ? `cvRipple 4.5s cubic-bezier(0.22, 1, 0.36, 1) ${1.6 + (n - 1) * 1.5}s infinite`
                  : 'none',
              }}
            />
          ))}

          {/* Logo */}
          <div
            className="absolute left-1/2 top-1/2 flex items-center gap-5 z-[6]"
            style={{
              transform: 'translate(-50%, -50%)',
              opacity: played ? 1 : 0,
              transition: 'opacity 0.8s ease 1.3s',
            }}
          >
            <span className="grid grid-cols-2 grid-rows-3 gap-[10px] shrink-0">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <i
                  key={i}
                  className="block w-[22px] h-[22px] rounded-full bg-white"
                  style={{
                    opacity: played ? 1 : 0,
                    transform: played ? 'scale(1)' : 'scale(0)',
                    animation: played
                      ? `cvDotPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${1.4 + i * 0.1}s forwards, cvLogoPulse 2.6s ease-in-out ${2.6 + i * 0.1}s infinite`
                      : 'none',
                  }}
                />
              ))}
            </span>

            <span
              className="font-sans font-bold text-white text-left"
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                opacity: played ? 1 : 0,
                transform: played ? 'translateX(0)' : 'translateX(-16px)',
                transition:
                  'opacity 0.8s ease 1.8s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 1.8s',
              }}
            >
              The
              <br />
              Crisis Lab
            </span>
          </div>

          {/* Chips */}
          {chips.map((chip, i) => (
            <span
              key={i}
              className={`absolute z-[7] inline-flex items-center gap-2 px-4 py-[9px] bg-white/95 text-[#111] rounded-full text-[0.75rem] font-semibold tracking-[-0.01em] whitespace-nowrap shadow-[0_10px_30px_rgba(90,0,0,0.25)] ${chip.pos}`}
              style={{
                opacity: 0,
                animation: played
                  ? `cvChip 9s ease-in-out ${chip.delay}s infinite`
                  : 'none',
              }}
            >
              <i className="w-2 h-2 rounded-full bg-[#e4180f] shrink-0" />
              {chip.text}
            </span>
          ))}

          {/* Bouncing dots */}
          <div
            className="absolute left-1/2 top-1/2 flex gap-[14px] z-[3]"
            style={{
              transform: 'translate(-50%, -50%)',
              opacity: played ? 0 : 0.4,
              transition: 'opacity 0.6s ease 1.2s',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-5 h-5 rounded-full bg-white shadow-[0_6px_20px_rgba(120,0,0,0.35)]"
                style={{
                  animation: `cvBounce 1.3s cubic-bezier(0.45, 0, 0.55, 1) ${i * 0.16}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* ---------- COPY ---------- */}
        <div>
          <span
            className="inline-block font-sans text-[0.8rem] font-medium uppercase border border-[#F78383] mb-5 px-5 py-1.5 rounded-[30px] tracking-[0.05em]"
            style={{
              opacity: played ? 1 : 0,
              transform: played ? 'translateY(0)' : 'translateY(15px)',
              transition:
                'opacity 0.7s ease 0.5s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s',
            }}
          >
            The Crisis Lab
          </span>

          <h2
            className="font-sans text-ink"
            style={{
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              marginBottom: '28px',
            }}
          >
            {crisisTitleWords.map((w, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  '--d': i,
                  opacity: played ? 1 : 0,
                  transform: played ? 'translateY(0)' : 'translateY(24px)',
                  transition:
                    'opacity 0.7s cubic-bezier(0.2,0.8,0.2,1), transform 0.7s cubic-bezier(0.2,0.8,0.2,1)',
                  transitionDelay: 'calc(0.7s + var(--d) * 0.07s)',
                }}
              >
                {w}{i < crisisTitleWords.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h2>

          {crisisParagraphs.map((text, i) => (
            <p
              key={i}
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.55,
                color: '#333',
                marginBottom: '20px',
                opacity: played ? 1 : 0,
                transform: played ? 'translateY(0)' : 'translateY(24px)',
                transition:
                  'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: `${1.3 + i * 0.2}s`,
              }}
            >
              {text}
            </p>
          ))}

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 px-7 py-[18px] bg-ink text-white no-underline rounded-full text-[0.9rem] font-bold tracking-[-0.01em] whitespace-nowrap overflow-hidden"
            style={{
              marginTop: '10px',
              opacity: played ? 1 : 0,
              transform: played ? 'translateY(0)' : 'translateY(24px)',
              transition:
                'opacity 0.8s ease 2.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 2.1s',
            }}
          >
            <span className="relative z-[1] inline-block h-[1.2em] overflow-hidden leading-[1.2em] align-middle">
              <span className="block h-[1.2em] leading-[1.2em] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
                Contact Us
              </span>
              <span
                aria-hidden="true"
                className="block h-[1.2em] leading-[1.2em] font-display italic font-semibold tracking-normal transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full"
              >
                Contact Us
              </span>
            </span>
            <svg
              className="relative z-[1] transition-transform duration-[350ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-1"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HERO VIDEO
   ============================================================ */
function EcommerceHeroVideo() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (!next) v.play().catch(() => {});
  };

  return (
    <section className="max-w-site mx-auto px-6 pt-6 xl:px-12">
      <div className="relative w-full aspect-video max-h-[78vh] rounded-2xl xl:rounded-3xl overflow-hidden bg-gradient-to-br from-[#cfe2ff] to-[#a9c9ff]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="images/b2b-hero.jpg"
          className="w-full h-full object-cover block"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            type="video/mp4"
          />
        </video>

        <button
          type="button"
          aria-label="Toggle sound"
          onClick={toggleMute}
          className="absolute bottom-6 right-6 w-11 h-11 xl:w-[52px] xl:h-[52px] rounded-full bg-black text-white border-0 cursor-pointer flex items-center justify-center z-[3] transition-transform duration-200 hover:scale-[1.08] hover:bg-[#222]"
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" />
            {muted ? (
              <g>
                <line
                  x1="16"
                  y1="9"
                  x2="22"
                  y2="15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="22"
                  y1="9"
                  x2="16"
                  y2="15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            ) : (
              <g>
                <path
                  d="M15.5 8.5a5 5 0 0 1 0 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18.5 5.5a9 9 0 0 1 0 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            )}
          </svg>
        </button>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
const ECOM_TESTIMONIALS = [
  {
    quote:
      "We enlisted Tangerine as our retained PR agency in order to help improve our share of voice against competitors. When we started working together our brand awareness amongst media was non-existent, but with Tangerine's support over four years, we were able to gain a significant share of column inches. We've had coverage in all of our key trade press as well as frequent national hits.",
    name: 'Danielle Emery, Head of Marketing',
    company: 'Peldon Rose',
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

const ECOM_LEFT_CARDS = [
  { img: 'images/work-1.jpg', alt: 'Topcon project', badge: 'Topcon' },
  { img: 'images/work-3.jpg', alt: 'Topcon project', badge: 'Topcon' },
  { img: 'images/work-5.jpg', alt: 'Topcon project', badge: 'Topcon' },
];
const ECOM_RIGHT_CARDS = [
  { img: 'images/work-2.jpg', alt: 'Topcon project', badge: 'Topcon' },
  { img: 'images/work-4.jpg', alt: 'Peldon Rose project', badge: 'Peldon Rose' },
  { img: 'images/work-6.jpg', alt: 'Topcon project', badge: 'Topcon' },
];

export default function Ecommerce() {
  return (
    <>
      <EcommerceHeroVideo />
      <EcommerceIntro />
      <CrisisLab />
      <TestimonialSlider slides={ECOM_TESTIMONIALS} />
      <AwardsMarquee
        title={
          <>
            Our Recent
            <br />
            Awards
          </>
        }
      />
      <WorkGrid
        leftCards={ECOM_LEFT_CARDS}
        rightCards={ECOM_RIGHT_CARDS}
        viewAllHref="/our-work"
        showViewAll
      />
    </>
  );
}