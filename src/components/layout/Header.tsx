import Logo from "@/components/ui/Logo";
import Nav from "@/components/layout/Nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
