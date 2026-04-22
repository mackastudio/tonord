export default function PlaceholderImage({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div className="w-full aspect-square bg-surface flex items-center justify-center">
      <span className="font-display text-6xl font-light text-ink-muted select-none">
        {initial}
      </span>
    </div>
  );
}
