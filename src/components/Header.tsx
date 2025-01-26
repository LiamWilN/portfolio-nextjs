import Navigation from "./Navigation";
import Section from "./Section";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-24">
      <Section>
        <div className="h-full flex items-center justify-between">
          <Link href="/">
            <h1>williamC</h1>
          </Link>
          <div>
            <Navigation />
          </div>
        </div>
      </Section>
    </header>
  );
};

export default Header;
