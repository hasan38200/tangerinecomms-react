import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV } from '../../data/nav';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMenuToggle = () => {
    setOpenMenu(true);
    window.dispatchEvent(new CustomEvent('open-mobile-menu'));
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        {/* LOGO */}
        <Link to="/" className="logo" aria-label="Tangerine home">
          <span className="logo-text">tangerine</span>
          <span className="logo-mark" aria-hidden="true" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="main-nav" aria-label="Primary">
          <ul className="nav-list">
            {NAV.map((item) => {
              const isDropdown = !!item.links;
              const isWide = item.links && item.links.length > 6;

              const labelNode = (
                <span>
                  {item.label.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < item.label.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              );

              return (
                <li
                  key={item.id}
                  className={`nav-item ${isDropdown ? 'has-dropdown' : ''}`}
                >
                  {isDropdown ? (
                    <>
                      <button className="nav-link" type="button">
                        {labelNode}
                        <svg
                          className="chev"
                          viewBox="0 0 24 24"
                          width="14"
                          height="14"
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <div className="mega-menu">
                        {isWide ? (
                          /* ---------- WIDE PANEL — Industries (Tailwind only) ---------- */
                          <div className="mx-auto max-w-[1200px] rounded-3xl bg-white px-8 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)]">
                            <div className="mb-5 flex items-baseline justify-between gap-6">
                              <h2 className="text-[1.5rem] font-semibold leading-none tracking-[-0.035em] text-ink">
                                {item.megaTitle}
                              </h2>
                              <span className="text-[0.7rem] font-medium uppercase tracking-[0.08em] text-accent">
                                {item.links.length} industries
                              </span>
                            </div>

                            <ul className="grid grid-cols-4 gap-x-5">
                              {item.links.map((link) => (
                                <li
                                  key={link.to}
                                  className="border-b border-divider/40"
                                >
                                  <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                      `block py-1.5 text-[0.8rem] font-medium leading-tight tracking-[-0.01em] transition-colors duration-200 ${
                                        isActive
                                          ? 'text-ink'
                                          : 'text-[#8a8a8a] hover:text-ink'
                                      }`
                                    }
                                  >
                                    {link.text}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          /* ---------- NARROW PANEL — default mega menu ---------- */
                          <div className="mega-inner">
                            <h2 className="mega-title">{item.megaTitle}</h2>

                            <ul className="mega-list">
                              {item.links.map((link, i) => (
                                <li
                                  key={link.to}
                                  style={
                                    i === 0
                                      ? {
                                          borderTop:
                                            '2px solid #1a1a1a',
                                        }
                                      : undefined
                                  }
                                >
                                  <NavLink to={link.to} className="mega-link">
                                    <span>{link.text}</span>
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <NavLink to={item.to} className="nav-link">
                      {labelNode}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CONTACT CTA */}
        <Link to="/contact" className="cta-button">
          <span className="cta-text">
            <span className="cta-text-inner">Contact Us</span>
            <span className="cta-text-inner cta-text-alt" aria-hidden="true">
              Contact Us
            </span>
          </span>
          <svg
            className="cta-arrow"
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

        {/* HAMBURGER */}
        <button
          className="menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={openMenu}
          aria-controls="mobileMenu"
          onClick={handleMenuToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}