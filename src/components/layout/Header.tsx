import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import Nav from "@/components/layout/Nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite-line bg-graphite/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo />
        <Nav />
      </Container>
    </header>
  );
}
