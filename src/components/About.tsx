"use client";
import Section from "@/components/Section";
import Image from "next/image";
import pic from "@/assets/images/profile.png";
import Skills from "@/components/Skills";
import me from "@/assets/me.json";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Section>
        <div className="my-4 flex items-center justify-between mx-0 md:mx-8">
          <div>
            <h1 data-aos="fade-right" className="font-bold text-3xl">
              {me.name}
            </h1>
            <h3 data-aos="fade-right" className="text-sm">
              {me.aspiretobe}
            </h3>
          </div>
          <Image
            className="rounded-full"
            src={pic}
            width={80}
            height={80}
            alt={`Picture of ${me.name}`}
            priority
          />
        </div>
        <div className="mt-8 space-y-4 text-left">
          {me.hero.map((item, index) => (
            <p
              data-aos="fade-right"
              data-aos-duration={index * 500}
              key={item.id}
            >
              {item.content}
            </p>
          ))}
        </div>
      </Section>
      <Skills />
    </>
  );
}
