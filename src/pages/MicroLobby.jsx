import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

/* ============================================================
   Reveal wrapper — adds `.in` for reusable scroll animation
   ============================================================ */
function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(44px)',
        transition: `opacity 0.55s ease ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}

/* ============================================================
   WordReveal — matches extras.js [data-words]
   ============================================================ */
function WordReveal({ text, as: Tag = 'span', className = '', active = false }) {
  const words = String(text).split(/\s+/).filter(Boolean);
  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            '--w': i,
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(0.5em)',
            transition:
              'opacity 0.45s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1)',
            transitionDelay: `calc(var(--w) * 0.03s)`,
          }}
        >
          {w}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
}

/* ============================================================
   IMAGE with clip-path reveal + parallax
   ============================================================ */
function RevealImage({ src, alt, aspect = 'aspect-[4/3] md:aspect-[1500/840]' }) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });
  const imgRef = useRef(null);

  /* simple parallax: translateY between -6% and 6% based on scroll */
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    let ticking = false;

    const par = () => {
      ticking = false;
      const box = img.parentElement.getBoundingClientRect();
      if (box.bottom < 0 || box.top > window.innerHeight) return;
      const mid = box.top + box.height / 2 - window.innerHeight / 2;
      const max = box.height * 0.06;
      const y = Math.max(-max, Math.min(max, mid * -0.08));
      img.style.transform = `translateY(${y}px) scale(1.14)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(par);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    par();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full rounded-3xl overflow-hidden ${aspect} bg-gradient-to-br from-[#2a2a2a] via-[#0e0e0e] to-[#4a0d0d]`}
      style={{
        clipPath: inView
          ? 'inset(0 0 0 0 round 24px)'
          : 'inset(10% 6% round 24px)',
        transition: 'clip-path 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover block will-change-transform"
        style={{ transform: 'translateY(0) scale(1.14)' }}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function MicroLobby() {
  /* ---------- HERO — letter-track animation ---------- */
  const heroWords = 'Micro Lobby';

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative mx-3 md:mx-7 rounded-3xl overflow-hidden min-h-[300px] md:min-h-[460px] xl:min-h-[640px] grid place-items-center bg-white isolate">
        {/* Breathing radial glow */}
        <span
          className="absolute -inset-[20%] z-[-1] pointer-events-none"
          style={{
            background:
              'radial-gradient(48% 50% at 50% 50%, #ee2a29 0%, #f3625b 42%, rgba(247,150,143,0.55) 68%, rgba(255,255,255,0) 100%)',
            animation: 'npBreath 7s ease-in-out infinite alternate',
          }}
        />
        <h1
          className="font-sans font-bold uppercase text-white whitespace-nowrap"
          style={{
            fontSize: 'clamp(1.4rem, 3.6vw, 3.4rem)',
            letterSpacing: '0.62em',
            opacity: 0,
            animation: 'npTrack 2s cubic-bezier(0.22,1,0.36,1) 0.3s forwards',
          }}
        >
          {heroWords}
        </h1>
      </section>

      {/* ============ INTRO ============ */}
      <Reveal as="section" className="py-12 md:py-20">
        <div className="max-w-site mx-auto px-5 md:px-12">
          <span className="inline-block font-sans text-[0.72rem] font-medium border border-[#f78383] rounded-[30px] px-4 py-1.5 mb-6">
            Tangerine's Micro-Lobby
          </span>

          <IntroHeading
            text="The first agency to use influencers in corporate communications and public affairs"
          />

          <p
            className="font-sans text-[0.95rem] text-[#333] max-w-[560px] mt-6"
            style={{ lineHeight: 1.5 }}
          >
            <WordReveal text="We partner brands with respected industry influencers to reach policymakers, regulators, business leaders and B2B buyers." active />
          </p>
          <p
            className="font-sans text-[0.95rem] text-[#333] max-w-[560px] mt-4.5"
            style={{ lineHeight: 1.5 }}
          >
            <WordReveal text="Tangerine's senior corporate affairs advisors will craft compelling messages, map stakeholders and deliver content with laser precision to decision makers." active />
          </p>
          <p
            className="font-sans text-[0.95rem] text-[#333] max-w-[560px] mt-4.5"
            style={{ lineHeight: 1.5 }}
          >
            <WordReveal text="The Micro-Lobby is designed to deliver results – underpinned by Tangerine's award-winning influencer-marketing team." active />
          </p>
        </div>
      </Reveal>

      {/* ============ IMAGE 1 ============ */}
      <Reveal className="max-w-site mx-auto px-5 md:px-12">
        <RevealImage src="images/micro-camera.jpg" alt="Influencer filming on a camera" />
      </Reveal>

      {/* ============ FINDING A NEW WAY — split ============ */}
      <Reveal as="section" className="py-12 md:py-20">
        <div className="max-w-site mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-20 items-start">
            <div>
              <span className="inline-block font-sans text-[0.72rem] font-medium border border-[#f78383] rounded-[30px] px-4 py-1.5 mb-6">
                Finding a new way
              </span>
              <h2
                className="font-sans text-ink max-w-[720px]"
                style={{
                  fontSize: 'clamp(1.6rem, 2.7vw, 2.5rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.08,
                }}
              >
                Traditional methods such as media coverage, stakeholder
                meetings and events are still key parts of a campaign.
              </h2>
            </div>

            <div>
              <p
                className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
                style={{ lineHeight: 1.5, marginBottom: '18px' }}
              >
                However, there is a new way to get your message in front of
                decision makers.
              </p>
              <p
                className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
                style={{ lineHeight: 1.5, marginBottom: '18px' }}
              >
                Your message, told boldly and creatively, can appear directly
                on the social media feeds of the people that matter the most
                to your organisation.
              </p>
              <p
                className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
                style={{ lineHeight: 1.5, marginBottom: '18px' }}
              >
                We know decision makers can often scroll past posts from
                brands. But they will stop and listen to people.
              </p>
              <p
                className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
                style={{ lineHeight: 1.5 }}
              >
                We identify the trusted voices already shaping their thinking.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ============ BIG STATEMENT ============ */}
      <Reveal as="section" className="py-10 md:py-14 md:pb-24">
        <div className="max-w-site mx-auto px-5 md:px-12">
          <h2
            className="font-sans text-ink max-w-[1100px]"
            style={{
              fontSize: 'clamp(2rem, 4.6vw, 4.2rem)',
              fontWeight: 600,
              letterSpacing: '-0.045em',
              lineHeight: 1.04,
            }}
          >
            Then we help your message become part of the conversation.
          </h2>
        </div>
      </Reveal>

      {/* ============ IMAGE 2 ============ */}
      <Reveal className="max-w-site mx-auto px-5 md:px-12">
        <RevealImage src="images/micro-bigben.jpg" alt="Big Ben against a blue sky" />
      </Reveal>

      {/* ============ CREDIBILITY SPLIT ============ */}
      <Reveal as="section" className="py-12 md:py-20">
        <div className="max-w-site mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-20 items-start">
            <div>
              <span className="inline-block font-sans text-[0.72rem] font-medium border border-[#f78383] rounded-[30px] px-4 py-1.5 mb-6">
                Credibility you can't buy through advertising
              </span>
              <h2
                className="font-sans text-ink max-w-[720px]"
                style={{
                  fontSize: 'clamp(1.6rem, 2.7vw, 2.5rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.08,
                }}
              >
                People trust people.
              </h2>
            </div>

            <div>
              <p
                className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
                style={{ lineHeight: 1.5, marginBottom: '18px' }}
              >
                That's why the world's most effective influencers aren't
                always celebrities. They're experts.
              </p>
              <p
                className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
                style={{ lineHeight: 1.5, marginBottom: '18px' }}
              >
                We partner brands with credible intellectual influencers who
                command attention and trust among highly valuable professional
                audiences.
              </p>
              <p
                className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
                style={{ lineHeight: 1.5 }}
              >
                Because when complex decisions are made, credibility matters
                more than reach.
              </p>
            </div>
          </div>

          {/* nested split below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-20 items-start mt-10 md:mt-[60px]">
            <div>
              <span className="inline-block font-sans text-[0.72rem] font-medium border border-[#f78383] rounded-[30px] px-4 py-1.5 mb-6">
                From awareness to action
              </span>
              <h2
                className="font-sans text-ink max-w-[720px]"
                style={{
                  fontSize: 'clamp(1.6rem, 2.7vw, 2.5rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.08,
                }}
              >
                Built to influence the conversations that shape business
                outcomes.
              </h2>
            </div>

            <div>
              <p
                className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
                style={{ lineHeight: 1.5 }}
              >
                The Micro-Lobby combines influencer strategy, stakeholder
                mapping, reputation management, public affairs intelligence,
                B2B marketing and thought leadership.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ============ IMAGE 3 ============ */}
      <Reveal className="max-w-site mx-auto px-5 md:px-12">
        <RevealImage src="images/micro-heatmap.jpg" alt="Influencer videos with attention heatmaps" />
      </Reveal>

      {/* ============ HOW IT WORKS ============ */}
      <Reveal as="section" className="py-12 md:py-20">
        <div className="max-w-site mx-auto px-5 md:px-12">
          <span className="inline-block font-sans text-[0.72rem] font-medium border border-[#f78383] rounded-[30px] px-4 py-1.5 mb-6">
            How it works
          </span>
          <h2
            className="font-sans text-ink max-w-[720px]"
            style={{
              fontSize: 'clamp(1.6rem, 2.7vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              marginBottom: '22px',
            }}
          >
            Tangerine's senior consultants will work with in-house teams to
            design a bespoke campaign strategy.
          </h2>
          <p
            className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
            style={{ lineHeight: 1.5, marginBottom: '18px' }}
          >
            We will hone your key messaging and build stakeholder lists for
            those you want to influence.
          </p>
          <p
            className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
            style={{ lineHeight: 1.5, marginBottom: '18px' }}
          >
            Our digital experts manage the influencer process – from
            shortlisting to day-to-day management.
          </p>
          <p
            className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
            style={{ lineHeight: 1.5, marginBottom: '18px' }}
          >
            You will have the final say on scripts and content.
          </p>
          <p
            className="font-sans text-[0.95rem] text-[#333] max-w-[560px]"
            style={{ lineHeight: 1.5 }}
          >
            From there, it is all about serving creative content to the
            decision makers and delivering results.
          </p>
        </div>
      </Reveal>

      {/* ============ CTA CARD ============ */}
      <Reveal className="max-w-site mx-auto px-5 md:px-12 pb-16 md:pb-[120px]">
        <div
          className="relative overflow-hidden rounded-3xl bg-accent text-white grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-9 md:p-[60px] isolate"
          style={{ boxShadow: '0 20px 60px rgba(233, 75, 60, 0.2)' }}
        >
          {/* sheen overlay */}
          <span
            className="absolute inset-0 z-[-1] pointer-events-none"
            style={{
              background:
                'linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)',
              animation: 'npSheen 5s ease-in-out 1.5s infinite',
            }}
          />
          <h3
            className="font-sans max-w-[420px]"
            style={{
              fontSize: 'clamp(1.5rem, 2.4vw, 2.2rem)',
              fontWeight: 700,
              letterSpacing: '-0.035em',
              lineHeight: 1.1,
            }}
          >
            Want to hear more?
          </h3>
          <Link
            to="/contact"
            className="relative overflow-hidden inline-flex items-center justify-center gap-3 w-full px-8 py-5 md:py-[22px] bg-ink text-white rounded-full font-sans text-[0.95rem] font-bold no-underline isolate transition-colors duration-300 hover:bg-black"
          >
            <span>Get in touch today</span>
          </Link>
        </div>
      </Reveal>
    </main>
  );
}

/* ============================================================
   Intro heading — split word reveal on mount
   ============================================================ */
function IntroHeading({ text }) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  return (
    <h2
      ref={ref}
      className="font-sans text-ink max-w-[720px]"
      style={{
        fontSize: 'clamp(1.6rem, 2.7vw, 2.5rem)',
        fontWeight: 600,
        letterSpacing: '-0.035em',
        lineHeight: 1.08,
      }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(0.5em)',
            transition:
              'opacity 0.45s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1)',
            transitionDelay: `calc(${i} * 0.03s)`,
          }}
        >
          {w}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </h2>
  );
}