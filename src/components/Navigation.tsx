"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "@/assets/contents.json";

type NavigationItemProps = {
  id: number;
  title: string;
  links: string;
};

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main Navigation">
      <ul className="flex items-center justify-center gap-3">
        {Nav.NavigationLinks.map((item: NavigationItemProps) => {
          const isActiveLink = pathname.startsWith(item.links);

          return (
            <li
              className="hover:underline hover:underline-offset-8 rounded-lg"
              key={item.id}
            >
              <Link
                className={`${
                  isActiveLink ? "underline underline-offset-8" : ""
                }`}
                href={item.links}
                passHref
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
