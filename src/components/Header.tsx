import Navigation from "./Navigation";
import Section from "./Section";
import Link from "next/link";
import ThemeToggle from "./Theme";

const Header = () => {
  return (
    <header className="h-24">
      <Section>
        <div className="h-full flex items-center justify-between">
          <Link href="/">
            <h1>williamC</h1>
          </Link>
          <div className="flex items-center justify-center gap-4">
            <Navigation />
            <ThemeToggle />
          </div>
        </div>
      </Section>
    </header>
  );
};

export default Header;
