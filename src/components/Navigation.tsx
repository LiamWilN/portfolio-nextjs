import Link from "next/link";
import Nav from "@/assets/contents.json";

type NavigationItemProps = {
  id: number;
  title: string;
  links: string;
};

const Navigation = () => {
  return (
    <nav aria-label="Main Navigation">
      <ul className="flex items-center justify-center gap-2">
        {Nav.NavigationLinks.map((item: NavigationItemProps) => (
          <li key={item.id}>
            <Link href={item.links} passHref>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
