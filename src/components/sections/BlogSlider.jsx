import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextReveal from '../shared/TextReveal';
import Reveal from '../shared/Reveal';

const POSTS = [
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Artboard-1-1000x0-c-default.jpg', date: '2024-07-29', tags: ['B2B', 'Corporate', 'Intel', 'Tangerine'], title: "How Andy Burnham Became the UK's First Influencer Prime Minister" },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Roblox-1-1000x0-c-default.jpg', date: '2024-07-11', tags: ['B2B', 'Corporate', 'Tangerine'], title: 'AI is changing PR. That should make good corporate counsel more valuable' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Artboard-1-1000x0-c-default.jpg', date: '2024-06-26', tags: ['B2B', 'Tangerine'], title: 'How are real estate brands chosen in the AI era?' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Roblox-1-1000x0-c-default.jpg', date: '2024-06-12', tags: ['Insight'], title: 'How attention is shaping the future of brand building' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Artboard-1-1000x0-c-default.jpg', date: '2024-05-30', tags: ['News'], title: 'Tangerine named a Top 100 independent agency' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Roblox-1-1000x0-c-default.jpg', date: '2024-05-14', tags: ['Intel'], title: 'Why social-first PR is winning in 2024' },
];

function BlogCard({ post }) {
  return (
    <a href="#" className="group block" style={{ flex: '0 0 calc((100% - 40px * 2) / 3)' }}>
      <div className="relative w-full aspect-[508/350] rounded-3xl overflow-hidden bg-[#eee] mb-5">
        <img src={post.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => (e.currentTarget.style.display = 'none')} />
        <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white rounded-full px-3.5 py-2 text-sm">
          <svg viewBox="0 0 24 24" width="14" height="14">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {post.date}
        </span>
      </div>
      <div className="flex flex-wrap gap-2.5 mb-3">
        {post.tags.map((t, i) => (
          <span key={i} className="border-[1.5px] border-accent rounded-full px-2.5 py-0.5 text-xs font-medium text-ink">{t}</span>
        ))}
      </div>
      <TextReveal as="h3" stagger={0.015} className="text-xl md:text-2xl font-bold tracking-tight leading-snug text-ink">
        {post.title}
      </TextReveal>
    </a>
  );
}

export default function BlogSlider() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(POSTS.length / perPage);
  const visible = POSTS.slice(page * perPage, page * perPage + perPage);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <Reveal>
      <section className="pb-24 md:pb-32 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="flex flex-col gap-6">
            <TextReveal as="h2" stagger={0.04} duration={0.6} className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-ink">
              Attention Please!
            </TextReveal>
            <Link
              to="/our-blog"
              className="self-start inline-flex items-center gap-3 px-5 py-3 border-2 border-accent rounded-full text-ink text-sm font-semibold transition-all hover:bg-accent hover:text-white group"
            >
              <span>View Our Blogs</span>
              <svg viewBox="0 0 24 24" width="14" height="14" className="transition-transform group-hover:translate-x-1">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="flex gap-4 md:gap-5">
            <button type="button" aria-label="Previous posts" onClick={prev} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-ink text-white flex items-center justify-center transition-transform hover:scale-105">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" aria-label="Next posts" onClick={next} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-ink text-white flex items-center justify-center transition-transform hover:scale-105">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>

        <div className="flex gap-5 md:gap-10 transition-transform duration-500">
          {visible.map((post, i) => (
            <BlogCard key={`${page}-${i}`} post={post} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}