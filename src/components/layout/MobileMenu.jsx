import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV } from '../../data/nav';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState('main');

  /* Lock body scroll when open */
  useEffect(() => {
    if (open) document.body.classList.add('menu-open');
    else document.body.classList.remove('menu-open');
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  /* Listen for header's "open-mobile-menu" event */
  useEffect(() => {
    const onOpen = () => {
      setPanel('main');
      setOpen(true);
    };
    window.addEventListener('open-mobile-menu', onOpen);
    return () => window.removeEventListener('open-mobile-menu', onOpen);
  }, []);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  /* Close on resize > 1024 */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024 && open) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div
      className={`mobile-menu ${open ? 'is-open' : ''}`}
      id="mobileMenu"
      aria-hidden={!open}
    >
      <button
        className="mm-close"
        type="button"
        aria-label="Close menu"
        onClick={close}
      >
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path
            d="M6 6l12 12M18 6L6 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="mm-panels">
        {/* MAIN PANEL */}
        <nav
          className={`mm-panel ${panel === 'main' ? 'is-active' : ''}`}
          data-panel="main"
          aria-label="Mobile"
        >
          <ul className="mm-list">
            <li>
              <Link to="/" className="mm-link" onClick={close}>
                Homepage
              </Link>
            </li>

            {NAV.map((item) => {
              const isDropdown = !!item.links;
              if (!isDropdown) {
                return (
                  <li key={item.id}>
                    <Link to={item.to} className="mm-link" onClick={close}>
                      {item.label.join(' ')}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className="mm-link mm-more"
                    onClick={() => setPanel(item.id)}
                  >
                    {item.label.join(' ')}
                    <svg viewBox="0 0 24 24" width="28" height="28">
                      <path
                        d="M9 5l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* SUB PANELS (one per dropdown item) */}
        {NAV.filter((n) => n.links).map((item) => (
          <nav
            key={item.id}
            className={`mm-panel ${panel === item.id ? 'is-active' : ''}`}
            data-panel={item.id}
            style={{ overflowY: 'auto' }}
          >
            <button
              type="button"
              className="mm-link mm-back"
              onClick={() => setPanel('main')}
            >
              <svg viewBox="0 0 24 24" width="26" height="26">
                <path
                  d="M15 5l-7 7 7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{' '}
              Back
            </button>

            <ul
              className="mm-list"
              style={
                item.links.length > 6
                  ? {
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      columnGap: '1rem',
                    }
                  : undefined
              }
            >
              {item.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="mm-link"
                    onClick={close}
                    style={
                      item.links.length > 6
                        ? { fontSize: '1.1rem', padding: '8px 0' }
                        : undefined
                    }
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* FOOTER CTA */}
      <div className="mm-footer">
        <Link to="/contact" className="mm-contact" onClick={close}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}