import { motion } from 'framer-motion';

export default function ContactTalk({ talk }) {
  return (
    <section className="px-4 md:px-6 xl:px-header-pad pb-6 md:pb-7 max-w-site mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#1a1a1a] text-white rounded-3xl px-6 md:px-10 xl:px-14 py-12 md:py-16 xl:py-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-3xl md:text-5xl xl:text-6xl font-semibold tracking-[-0.045em] mb-12 md:mb-20 xl:mb-28"
        >
          {talk.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {talk.columns.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <h3
                className="text-lg md:text-xl font-bold italic mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {col.title}
              </h3>

              {col.type === 'link' && (
                <div className="flex flex-col gap-3">
                  {col.links.map((link, li) => (
                    <a
                      key={li}
                      href={link.href}
                      className="text-lg md:text-2xl text-white underline underline-offset-4 decoration-1 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {col.type === 'address' && (
                <>
                  {col.addresses.map((addr, ai) => (
                    <div key={ai} className="mb-6">
                      <address className="not-italic text-base md:text-lg leading-relaxed text-white mb-3">
                        {addr.lines.map((line, li) => (
                          <span key={li} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                      {addr.phone && (
                        <a
                          href={`tel:${addr.phone.replace(/\s/g, '')}`}
                          className="text-base md:text-lg text-white underline underline-offset-4 hover:text-accent transition-colors"
                        >
                          {addr.phone}
                        </a>
                      )}
                    </div>
                  ))}

                  {col.socials && (
                    <div className="flex flex-wrap gap-4 mt-6">
                      {col.socials.map((s, si) => (
                        <a
                          key={si}
                          href={s.href}
                          aria-label={s.label}
                          className="w-12 h-12 rounded-full border border-[#777] flex items-center justify-center text-white transition-all hover:bg-accent hover:border-accent hover:rotate-[360deg] duration-500"
                        >
                          <SocialIcon name={s.label} />
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SocialIcon({ name }) {
  const icons = {
    Instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </>
    ),
    LinkedIn: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10v6M8 7v.01M12 16v-4a2 2 0 014 0v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    X: (
      <path d="M4 4l16 16M20 4L4 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    ),
    YouTube: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      {icons[name] || null}
    </svg>
  );
}