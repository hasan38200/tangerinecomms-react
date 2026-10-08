import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'Linkedin', href: '#' },
  { label: 'X', href: '#' },
  { label: 'YouTube', href: '#' },
];

const COLS = [
  {
    heading: 'What We Do',
    links: [
      { to: '/pr', text: 'PR' },
      { to: '/socialmedia', text: 'Social' },
      { to: '/our-work', text: 'Our Work' },
    ],
  },
  {
    heading: 'Who We Help',
    links: [
      { to: '/b2b', text: 'B2B' },
      { to: '/ecommerce', text: 'Ecommerce' },
      { to: '#', text: 'Corporate' },
    ],
  },
  {
    heading: 'How We Do It',
    links: [{ to: '/strategy', text: 'Strategy' }],
  },
  {
    heading: 'Who We Are',
    links: [
      { to: '/about', text: 'About us' },
      { to: '/our-careers', text: 'Careers' },
      { to: '/our-blog', text: 'Latest' },
      { to: '/contact', text: 'Contact' },
    ],
  },
];

const LEGAL = [
  { to: '#', text: 'Privacy Policy' },
  { to: '#', text: 'Cookies Policy' },
  { to: '#', text: 'Terms of use' },
  { to: '#', text: 'Carbon Reduction Plan' },
];

export default function SiteFooter() {
  const footerRef = useRef(null);
  const boxRef = useRef(null);
  const [inView, setInView] = useState(false);

  /* ---- 1. Measure the box's natural height into --footer-h ---- */
  useEffect(() => {
    const footer = footerRef.current;
    const box = boxRef.current;
    if (!footer || !box) return;

    const measure = () => {
      box.style.transition = 'none';
      box.style.width = '100%';
      box.style.height = 'auto';
      const h = box.offsetHeight;
      box.style.width = '';
      box.style.height = '';
      void box.offsetWidth;
      box.style.transition = '';
      footer.style.setProperty('--footer-h', h + 'px');
    };

    measure();
    window.addEventListener('load', measure);
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('load', measure);
      window.removeEventListener('resize', measure);
    };
  }, []);

  /* ---- 2. Watch for intersection ---- */
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`site-footer ${inView ? 'in-view' : ''}`}
      id="siteFooter"
    >
      <div className="footer-box" ref={boxRef} id="footerBox">
        <div className="footer-content">
          <h2 className="footer-heading">Get in touch</h2>

          <Link to="/contact" className="footer-pill footer-contact">
            Contact Us
          </Link>

          <p className="footer-tagline">
            Born in PR.
            <br />
            Raised in Social.
            <br />
            Digitally Native.
          </p>

          <div className="footer-grid">
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="footer-pill">
                  {s.label}
                </a>
              ))}
            </div>

            {COLS.map((col) => (
              <div key={col.heading} className="footer-col">
                <h4>{col.heading}</h4>
                {col.links.map((l) => (
                  <Link key={l.text} to={l.to}>
                    {l.text}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p>
              © 2026 Tangerine Bespoke website by{' '}
              <a href="#">mwb-agency.com</a>
            </p>
            <div className="footer-legal">
              {LEGAL.map((l) => (
                <Link key={l.text} to={l.to}>
                  {l.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}