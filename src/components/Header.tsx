import Navigation from "./Navigation";
import Section from "./Section";
import Link from "next/link";
import ThemeToggle from "./Theme";

const Header = () => {
  return (
    <header className="h-24 sticky top-0 bg-gradient-to-b dark:from-neutral-50 dark:from-60% dark:to-transparent from-neutral-900 from-70% to-transparent z-50">
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
