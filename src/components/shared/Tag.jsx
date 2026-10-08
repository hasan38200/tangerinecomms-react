export default function Tag({ children }) {
  return (
    <span className="inline-block text-xs md:text-sm font-medium border border-[#f78383] text-ink rounded-full px-4 py-1.5">
      {children}
    </span>
  );
}