import { motion } from 'framer-motion';

const POSTS = [
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Artboard-1-1000x0-c-default.jpg', date: '2024-07-29', tags: ['B2B', 'Corporate', 'Intel', 'Tangerine'], title: "How Andy Burnham Became the UK's First Influencer Prime Minister" },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Roblox-1-1000x0-c-default.jpg', date: '2024-07-11', tags: ['B2B', 'Corporate'], title: 'AI is changing PR. That should make good corporate counsel more valuable' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Artboard-1-1000x0-c-default.jpg', date: '2024-06-26', tags: ['B2B'], title: 'How are real estate brands chosen in the AI era?' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Roblox-1-1000x0-c-default.jpg', date: '2024-06-12', tags: ['Insight'], title: 'How attention is shaping the future of brand building' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Artboard-1-1000x0-c-default.jpg', date: '2024-05-30', tags: ['News'], title: 'Tangerine named a Top 100 independent agency' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Roblox-1-1000x0-c-default.jpg', date: '2024-05-14', tags: ['Intel'], title: 'Why social-first PR is winning in 2024' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Artboard-1-1000x0-c-default.jpg', date: '2024-04-22', tags: ['Culture'], title: 'The role of earned media in building trust' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Roblox-1-1000x0-c-default.jpg', date: '2024-04-08', tags: ['News'], title: 'Tangerine expands Manchester HQ' },
  { img: 'https://www.tangerinecomms.com/wp-content/uploads/2024/09/Artboard-1-1000x0-c-default.jpg', date: '2024-03-25', tags: ['Insight'], title: 'What AI means for the future of brand strategy' },
];

export default function BlogGrid({ posts = POSTS }) {
  return (
    <section className="pb-24 md:pb-32 px-4 md:px-6 xl:px-header-pad max-w-site mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {posts.map((post, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
            className="group block"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#eee] mb-4">
              <img
                src={post.img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 text-xs">
                <svg viewBox="0 0 24 24" width="12" height="12">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {post.date}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((t, ti) => (
                <span key={ti} className="border-[1.5px] border-accent rounded-full px-2.5 py-0.5 text-xs font-medium text-ink">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="text-lg md:text-xl font-bold tracking-tight leading-snug text-ink">
              {post.title}
            </h3>
          </motion.a>
        ))}
      </div>
    </section>
  );
}