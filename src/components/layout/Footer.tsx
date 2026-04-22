export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <p className="text-xs text-ink-muted tracking-wide">
          © {year} ToNord
        </p>
        <p className="text-xs text-ink-muted tracking-wide">
          Föreningen ToNord
        </p>
      </div>
    </footer>
  );
}
