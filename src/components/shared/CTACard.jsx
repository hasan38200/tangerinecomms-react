import { Link } from 'react-router-dom';

export default function CTACard({
  heading,
  buttonLabel,
  buttonTo = '/contact',
  variant = 'red',
}) {
  const styles =
    variant === 'red'
      ? 'bg-accent text-white'
      : 'bg-ink text-white';

  return (
    <div className={`${styles} rounded-3xl p-8 md:p-12 xl:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8`}>
      <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight max-w-xl">
        {heading}
      </h3>
      <Link
        to={buttonTo}
        className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-ink text-white rounded-full font-bold text-sm md:text-base whitespace-nowrap transition-transform duration-300 hover:-translate-y-1"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}