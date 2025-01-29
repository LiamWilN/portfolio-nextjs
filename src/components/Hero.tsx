"use client";

import Section from "./Section";
import Link from "next/link";
import me from "@/assets/me.json";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <Section>
      <div className="my-4 pb-4 text-sm">
        <p>Hi, I&apos;m</p>
        <Link href="/about">
          <h1 data-aos="fade-right" className="text-3xl font-bold">
            {me.name}
          </h1>
        </Link>
        <p>and I enjoy</p>
        <h2 data-aos="fade-right" className="text-4xl font-bold mt-6">
          Building Sleek, Responsive and Intuitive Web Applications
        </h2>
      </div>
    </Section>
  );
}
