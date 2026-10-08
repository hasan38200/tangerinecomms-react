import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

/* ============================================================
   POST DATA
   ============================================================ */
const POSTS = [
  {
    date: '2026-09-14',
    tags: ['B2B', 'Corporate', 'Intel', 'Tangerine'],
    title: "How Andy Burnham Became the UK's First Influencer Prime Minister",
    img: 'images/blog-1.jpg',
    bg: 'linear-gradient(135deg,#e94b3c,#7a1d14)',
  },
  {
    date: '2026-09-01',
    tags: ['B2B', 'Corporate', 'Tangerine'],
    title: 'AI is changing PR. That should make good corporate counsel more valuable',
    img: 'images/blog-2.jpg',
    bg: 'linear-gradient(135deg,#2d4a3e,#9bc4a5)',
  },
  {
    date: '2026-06-24',
    tags: ['B2B', 'Tangerine'],
    title: 'How are real estate brands chosen in the AI era?',
    img: 'images/blog-3.jpg',
    bg: 'linear-gradient(135deg,#1c2b5a,#6b8cff)',
  },
  {
    date: '2026-07-15',
    tags: ['Intel', 'Tangerine'],
    title: 'What does the UK Social Media Ban mean for brands?',
    img: 'images/blog-4.jpg',
    bg: 'linear-gradient(135deg,#e94b3c,#7a1d14)',
  },
  {
    date: '2026-06-18',
    tags: ['Creative', 'Tangerine'],
    title: 'A creative POV in the Answer Economy',
    img: 'images/blog-5.jpg',
    bg: 'linear-gradient(135deg,#2d4a3e,#9bc4a5)',
  },
  {
    date: '2026-06-16',
    tags: ['Intel', 'Tangerine'],
    title: 'Introducing Retriva: Making brands visible again in an AI-led world',
    img: 'images/blog-6.jpg',
    bg: 'linear-gradient(135deg,#1c2b5a,#6b8cff)',
    href: '/retriva',
  },
  {
    date: '2026-05-20',
    tags: ['Awards', 'Tangerine'],
    title: 'Celebrating our award-winning culture',
    img: 'images/blog-7.jpg',
    bg: 'linear-gradient(135deg,#e94b3c,#7a1d14)',
  },
  {
    date: '2026-04-17',
    tags: ['B2B', 'Corporate'],
    title: 'Delivering game changing manufacturing campaigns',
    img: 'images/blog-8.jpg',
    bg: 'linear-gradient(135deg,#2d4a3e,#9bc4a5)',
  },
  {
    date: '2026-03-30',
    tags: ['B2B', 'Events'],
    title: 'The battle for capital: Investment readiness is now about story as much as strategy',
    img: 'images/blog-9.jpg',
    bg: 'linear-gradient(135deg,#1c2b5a,#6b8cff)',
  },
  {
    date: '2026-03-12',
    tags: ['Corporate'],
    title: 'A new crisis spells peril for manufacturers. They need more voices in their corner.',
    img: 'images/blog-10.jpg',
    bg: 'linear-gradient(135deg,#e94b3c,#7a1d14)',
  },
  {
    date: '2026-02-12',
    tags: ['B2B'],
    title: 'Why Futurism and Foresight Are Becoming Essential Tools for Brands',
    img: 'images/blog-11.jpg',
    bg: 'linear-gradient(135deg,#2d4a3e,#9bc4a5)',
  },
  {
    date: '2026-02-05',
    tags: ['B2B'],
    title: "2016 vs 2026: What's changed in construction PR?",
    img: 'images/blog-12.jpg',
    bg: 'linear-gradient(135deg,#1c2b5a,#6b8cff)',
  },
];

/* ============================================================
   DATE BADGE
   ============================================================ */
function DateBadge({ date }) {
  return (
    <span
      className="absolute top-4 left-4 z-[2] inline-flex items-center gap-2 bg-white rounded-full px-3.5 py-2 font-sans text-[0.85rem] text-ink"
    >
      <svg viewBox="0 0 24 24" width="16" height="16">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 7v5l3 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {date}
    </span>
  );
}

/* ============================================================
   POST CARD
   ============================================================ */
function PostCard({ post, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.08,
    rootMargin: '0px 0px -5% 0px',
  });

  const Wrapper = post.href ? Link : 'a';
  const wrapperProps = post.href ? { to: post.href } : { href: '#' };

  return (
    <Wrapper
      ref={ref}
      {...wrapperProps}
      className="block no-underline text-ink group"
      style={{
        transitionDelay: `${delay}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition:
          'opacity 0.7s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* IMAGE */}
      <div
        className="relative aspect-[4/3] rounded-[18px] overflow-hidden mb-3.5 group-hover:[&>img]:scale-105"
        style={{ background: post.bg }}
      >
        <DateBadge date={post.date} />
        <img
          src={post.img}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover block transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap">
        {post.tags.map((t) => (
          <span
            key={t}
            className="inline-block border-[1.5px] border-accent rounded-full px-2.5 py-[3px] font-sans text-[0.75rem] font-medium mr-1.5 mb-2"
          >
            {t}
          </span>
        ))}
      </div>

      {/* TITLE */}
      <h3 className="font-sans text-base font-semibold tracking-[-0.02em] leading-[1.25] mt-1">
        {post.title}
      </h3>
    </Wrapper>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Blog() {
  const { ref: headRef, inView: headIn } = useInView({
    threshold: 0.15,
    rootMargin: '-5% 0px -10% 0px',
  });

  return (
    <main>
      <section className="max-w-site mx-auto px-5 md:px-12">
        {/* HEADER */}
        <div ref={headRef} className="pt-10 md:pt-[70px]">
          <h1
            className="font-sans text-ink"
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              fontWeight: 600,
              letterSpacing: '-0.045em',
              lineHeight: 1.05,
              opacity: headIn ? 1 : 0,
              transform: headIn ? 'translateY(0)' : 'translateY(24px)',
              transition:
                'opacity 0.8s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            Attention Please!
          </h1>
        </div>

        {/* SUBTITLE */}
        <p
          className="max-w-[1000px] font-sans text-[0.85rem] md:text-base leading-[1.45] pt-10 md:pt-[70px] text-ink"
          style={{
            opacity: headIn ? 1 : 0,
            transform: headIn ? 'translateY(0)' : 'translateY(20px)',
            transition:
              'opacity 0.8s ease 0.15s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s',
          }}
        >
          Here you'll find everything from our latest Attention Labs insight
          reports, our latest news, blogs, general musings and all of our
          social feed content.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pt-9 pb-16 md:pb-[120px]">
          {POSTS.map((post, i) => (
            <PostCard key={i} post={post} delay={(i % 3) * 0.12} />
          ))}
        </div>
      </section>
    </main>
  );
}