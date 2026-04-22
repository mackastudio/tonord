export default function PageHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight text-ink leading-none mb-12">
      {children}
    </h1>
  );
}
