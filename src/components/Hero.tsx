import Section from "./Section";
import Link from "next/link";
import me from "@/assets/me.json";

export default function Hero() {
  return (
    <Section>
      <div className="my-4 pb-4 text-sm">
        <p>Hi, I'm</p>
        <Link href="/about">
          <h1 className="text-3xl font-bold">{me.name}</h1>
        </Link>
        <p>and I enjoy </p>
        <h2 className="text-4xl font-bold mt-6">
          Building Sleek, Responsive and Intuitive Web Applications
        </h2>
      </div>
    </Section>
  );
}
