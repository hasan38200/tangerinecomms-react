import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

/* ============================================================
   CITY → INFLUENCERS
   ============================================================ */
const CITIES = {
  karachi: {
    country: 'Pakistan',
    city: 'Karachi',
    blurb:
      'Local voices, national reach. Meet the trusted creators shaping conversations in Karachi.',
    influencers: [
      { name: 'Ayesha Khan', handle: '@ayesha.k', img: 'images/influencer-1.jpg' },
      { name: 'Bilal Raza', handle: '@bilalraza', img: 'images/influencer-2.jpg' },
      { name: 'Hina Siddiqui', handle: '@hinasid', img: 'images/influencer-3.jpg' },
      { name: 'Usman Iqbal', handle: '@usmaniqbal', img: 'images/influencer-4.jpg' },
      { name: 'Sana Malik', handle: '@sanamalik', img: 'images/influencer-5.jpg' },
      { name: 'Zara Ahmed', handle: '@zara.a', img: 'images/influencer-6.jpg' },
    ],
  },
  islamabad: {
    country: 'Pakistan',
    city: 'Islamabad',
    blurb:
      'Thought leaders and creators based in the capital, driving conversations across Pakistan.',
    influencers: [
      { name: 'Hamza Sheikh', handle: '@hamzas', img: 'images/influencer-7.jpg' },
      { name: 'Mariam Nawaz', handle: '@mariamn', img: 'images/influencer-8.jpg' },
      { name: 'Farhan Ali', handle: '@farhanali', img: 'images/influencer-9.jpg' },
      { name: 'Nida Rehman', handle: '@nidar', img: 'images/influencer-10.jpg' },
      { name: 'Kiran Bukhari', handle: '@kiran.b', img: 'images/influencer-11.jpg' },
      { name: 'Omar Javed', handle: '@omarj', img: 'images/influencer-12.jpg' },
    ],
  },
  lahore: {
    country: 'Pakistan',
    city: 'Lahore',
    blurb:
      "From culture to commerce, Lahore's creators shape the stories that matter.",
    influencers: [
      { name: 'Sadia Hussain', handle: '@sadiah', img: 'images/influencer-13.jpg' },
      { name: 'Ali Zafar', handle: '@aliz', img: 'images/influencer-14.jpg' },
      { name: 'Mahira Saeed', handle: '@mahiras', img: 'images/influencer-15.jpg' },
      { name: 'Faisal Qureshi', handle: '@faisalq', img: 'images/influencer-16.jpg' },
      { name: 'Areeba Naeem', handle: '@areeban', img: 'images/influencer-17.jpg' },
      { name: 'Talha Rehman', handle: '@talhar', img: 'images/influencer-18.jpg' },
    ],
  },
  london: {
    country: 'United Kingdom',
    city: 'London',
    blurb:
      "Meet London's most influential voices across business, culture and consumer brands.",
    influencers: [
      { name: 'Sophie Turner', handle: '@sophiet', img: 'images/influencer-19.jpg' },
      { name: 'James Whitfield', handle: '@jwhitfield', img: 'images/influencer-20.jpg' },
      { name: 'Olivia Hart', handle: '@oliviah', img: 'images/influencer-21.jpg' },
      { name: 'Daniel Okoye', handle: '@danokoye', img: 'images/influencer-22.jpg' },
      { name: 'Amelia Rhodes', handle: '@ameliar', img: 'images/influencer-23.jpg' },
      { name: 'Noah Bennett', handle: '@noahb', img: 'images/influencer-24.jpg' },
    ],
  },
  manchester: {
    country: 'United Kingdom',
    city: 'Manchester',
    blurb:
      "The North's most connected creators — trusted voices driving regional and national impact.",
    influencers: [
      { name: 'Grace Whitaker', handle: '@gracew', img: 'images/influencer-25.jpg' },
      { name: 'Liam Pearson', handle: '@liamp', img: 'images/influencer-26.jpg' },
      { name: 'Emma Sutcliffe', handle: '@emmas', img: 'images/influencer-27.jpg' },
      { name: 'Ryan Hollis', handle: '@ryanh', img: 'images/influencer-28.jpg' },
      { name: 'Freya Mills', handle: '@freyam', img: 'images/influencer-29.jpg' },
      { name: 'Callum Reid', handle: '@callumr', img: 'images/influencer-30.jpg' },
    ],
  },
  birmingham: {
    country: 'United Kingdom',
    city: 'Birmingham',
    blurb:
      "Birmingham's trusted voices — from business and tech to culture and consumer.",
    influencers: [
      { name: 'Hannah Patel', handle: '@hannahp', img: 'images/influencer-31.jpg' },
      { name: 'Adam Khan', handle: '@adamk', img: 'images/influencer-32.jpg' },
      { name: 'Zara Begum', handle: '@zarab', img: 'images/influencer-33.jpg' },
      { name: 'Tom Ashworth', handle: '@toma', img: 'images/influencer-34.jpg' },
      { name: 'Priya Sharma', handle: '@priyas', img: 'images/influencer-35.jpg' },
      { name: 'Jack Whitmore', handle: '@jackw', img: 'images/influencer-36.jpg' },
    ],
  },
  'los-angeles': {
    country: 'United States',
    city: 'Los Angeles, CA',
    blurb:
      'West Coast storytellers and creators driving influence across entertainment and lifestyle.',
    influencers: [
      { name: 'Maya Rodriguez', handle: '@mayar', img: 'images/influencer-37.jpg' },
      { name: 'Ethan Cole', handle: '@ethanc', img: 'images/influencer-38.jpg' },
      { name: 'Chloe Bennett', handle: '@chloeb', img: 'images/influencer-39.jpg' },
      { name: 'Marcus Lane', handle: '@marcusl', img: 'images/influencer-40.jpg' },
      { name: 'Ava James', handle: '@avaj', img: 'images/influencer-41.jpg' },
      { name: 'Lucas Ford', handle: '@lucasf', img: 'images/influencer-42.jpg' },
    ],
  },
  'new-york': {
    country: 'United States',
    city: 'New York City',
    blurb:
      "The East Coast's sharpest voices across business, media and culture.",
    influencers: [
      { name: 'Isabella Cruz', handle: '@isabellac', img: 'images/influencer-43.jpg' },
      { name: 'Nathan Brooks', handle: '@nathanb', img: 'images/influencer-44.jpg' },
      { name: 'Sofia Reyes', handle: '@sofiar', img: 'images/influencer-45.jpg' },
      { name: 'Julian Hart', handle: '@julianh', img: 'images/influencer-46.jpg' },
      { name: 'Mia Delgado', handle: '@miad', img: 'images/influencer-47.jpg' },
      { name: 'Oliver Grant', handle: '@oliverg', img: 'images/influencer-48.jpg' },
    ],
  },
  miami: {
    country: 'United States',
    city: 'Miami, Florida',
    blurb:
      "Miami's most influential creators — from lifestyle and travel to business and culture.",
    influencers: [
      { name: 'Camila Vega', handle: '@camilav', img: 'images/influencer-49.jpg' },
      { name: 'Diego Morales', handle: '@diegom', img: 'images/influencer-50.jpg' },
      { name: 'Valeria Ortiz', handle: '@valeriao', img: 'images/influencer-51.jpg' },
      { name: 'Sebastian Cruz', handle: '@sebastianc', img: 'images/influencer-52.jpg' },
      { name: 'Isabel Navarro', handle: '@isabeln', img: 'images/influencer-53.jpg' },
      { name: 'Andres Rios', handle: '@andresr', img: 'images/influencer-54.jpg' },
    ],
  },
};

/* ============================================================
   INDUSTRY → DISPLAY METADATA
   ============================================================ */
const INDUSTRIES = {
  fashion: { label: 'Fashion', blurb: 'Style-forward creators shaping trends across Fashion.' },
  'beauty-makeup': { label: 'Beauty & Makeup', blurb: 'Artists, MUAs and creators redefining Beauty & Makeup.' },
  skincare: { label: 'Skincare', blurb: 'Trusted voices in Skincare routines and product reviews.' },
  'food-restaurant': { label: 'Food & Restaurant', blurb: 'Foodies, chefs and reviewers covering the best tables.' },
  fitness: { label: 'Fitness', blurb: 'Trainers, athletes and coaches driving the Fitness conversation.' },
  'health-wellness': { label: 'Health & Wellness', blurb: 'Credible voices in Health & Wellness.' },
  lifestyle: { label: 'Lifestyle', blurb: 'Everyday creators building Lifestyle narratives.' },
  travel: { label: 'Travel', blurb: 'Explorers and guides putting places on the map.' },
  comedy: { label: 'Comedy', blurb: "Comedy creators driving the internet's laughs." },
  dance: { label: 'Dance', blurb: 'Dancers and choreographers setting the rhythm.' },
  music: { label: 'Music', blurb: 'Artists, producers and music tastemakers.' },
  'education-study': { label: 'Education & Study', blurb: 'Educators and study creators making learning click.' },
  'tech-gadgets': { label: 'Tech & Gadgets', blurb: 'Reviewers and analysts covering Tech & Gadgets.' },
  gaming: { label: 'Gaming', blurb: 'Streamers, pros and creators shaping Gaming culture.' },
  'finance-business': { label: 'Finance & Business', blurb: 'Analysts and operators covering Finance & Business.' },
  'motivation-self-help': { label: 'Motivation & Self-Help', blurb: 'Coaches and creators driving Motivation & Self-Help.' },
  'family-mom': { label: 'Family & Mom', blurb: 'Family and mom creators sharing real life.' },
  parenting: { label: 'Parenting', blurb: 'Parenting voices families trust.' },
  'home-decor': { label: 'Home Decor', blurb: 'Interior stylists and decorators reshaping Home Decor.' },
  automotive: { label: 'Automotive (Cars & Bikes)', blurb: 'Petrolheads covering Cars & Bikes.' },
  pets: { label: 'Pets', blurb: 'Pet parents and vets driving the conversation.' },
  books: { label: 'Books', blurb: 'Readers, authors and booktok voices.' },
  'art-calligraphy': { label: 'Art & Calligraphy', blurb: 'Artists and calligraphers sharing the craft.' },
  'wedding-events': { label: 'Wedding & Events', blurb: 'Planners and creators covering Wedding & Events.' },
  sports: { label: 'Sports', blurb: 'Athletes and analysts across Sports.' },
  photography: { label: 'Photography', blurb: 'Photographers and creators shooting the world.' },
};

/* ============================================================
   GRID COMPONENTS
   ============================================================ */
function InfluencerGrid({ influencers, label }) {
  const [shown, setShown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setShown(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!influencers.length) {
    return (
      <p className="text-center py-16 text-muted">
        No influencers listed yet.
      </p>
    );
  }

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
    >
      {influencers.map((inf, i) => (
        <InfluencerCard
          key={i}
          inf={inf}
          label={label}
          shown={shown}
          delay={(i % 3) * 0.1}
        />
      ))}
    </div>
  );
}

function InfluencerCard({ inf, label, shown, delay = 0 }) {
  return (
    <a
      href="#"
      aria-label={inf.name}
      className="block no-underline text-ink group"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#eee] mb-4">
        <img
          src={inf.img}
          alt={inf.name}
          loading="lazy"
          className="w-full h-full object-cover block transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          onError={(e) => {
            e.currentTarget.style.background = '#eee';
            e.currentTarget.style.display = 'none';
          }}
        />

        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/75 to-transparent text-white opacity-0 translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">
          <div className="font-sans text-[1.05rem] font-semibold tracking-[-0.01em]">
            {inf.name}
            <span className="block text-[0.8rem] font-medium text-[#ffd7d2] mt-1 tracking-normal">
              {inf.handle}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-baseline gap-3">
        <h3 className="font-sans text-[1.05rem] font-semibold tracking-[-0.02em] leading-[1.25] text-ink">
          {inf.name}
        </h3>
        <span className="text-[0.85rem] font-medium text-[#888] whitespace-nowrap">
          {label}
        </span>
      </div>
    </a>
  );
}

/* ============================================================
   HELPERS
   ============================================================ */
function titleCase(s) {
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Influencers() {
  const [params] = useSearchParams();
  const cityKey = (params.get('city') || '').toLowerCase();
  const industryKey = (params.get('industry') || '').toLowerCase();

  /* -------- INDUSTRY VIEW -------- */
  if (industryKey) {
    const meta = INDUSTRIES[industryKey] || {
      label: titleCase(industryKey.replace(/-/g, ' ')),
      blurb: `Meet the trusted creators shaping conversations in ${titleCase(
        industryKey.replace(/-/g, ' ')
      )}.`,
    };

    /* Placeholder influencers — replace with per-industry data later */
    const influencers = CITIES.karachi.influencers;

    return (
      <main>
        <section className="max-w-site mx-auto px-5 py-16 md:px-12 md:py-20 flex justify-between items-end gap-10 flex-wrap">
          <div>
            <span className="inline-block font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-accent mb-3.5">
              Industries · {meta.label}
            </span>
            <h1
              className="font-sans font-bold text-ink mb-3.5"
              style={{
                fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.02,
              }}
            >
              {meta.label}
            </h1>
            <p className="font-sans text-base leading-[1.55] text-[#444] max-w-[620px]">
              {meta.blurb}
            </p>
          </div>

          {/* Contact Us CTA — same style as the header's .cta-button */}
          <Link to="/contact" className="cta-button">
            <span className="cta-text">
              <span className="cta-text-inner">Contact Us</span>
              <span
                className="cta-text-inner cta-text-alt"
                aria-hidden="true"
              >
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
        </section>

        <section className="max-w-site mx-auto px-5 pb-20 md:px-12 md:pb-[120px]">
          <InfluencerGrid influencers={influencers} label={meta.label} />
        </section>
      </main>
    );
  }

  /* -------- CITY VIEW (unchanged) -------- */
  const data = CITIES[cityKey] || CITIES.karachi;

  return (
    <main>
      <section className="max-w-site mx-auto px-5 py-16 md:px-12 md:py-20 flex justify-between items-end gap-10 flex-wrap">
        <div>
          <span className="inline-block font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-accent mb-3.5">
            Places · {data.country}
          </span>
          <h1
            className="font-sans font-bold text-ink mb-3.5"
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.02,
            }}
          >
            {data.city}
          </h1>
          <p className="font-sans text-base leading-[1.55] text-[#444] max-w-[620px]">
            {data.blurb}
          </p>
        </div>

        <Link
          to="/places"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-ink rounded-full text-ink text-[0.9rem] font-semibold no-underline transition-all duration-300 hover:bg-ink hover:text-white hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path
              d="M15 5l-7 7 7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to Places</span>
        </Link>
      </section>

      <section className="max-w-site mx-auto px-5 pb-20 md:px-12 md:pb-[120px]">
        <InfluencerGrid influencers={data.influencers} label={data.city} />
      </section>
    </main>
  );
}