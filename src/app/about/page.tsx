import Section from "@/components/Section";
import Image from "next/image";
import { Metadata } from "next";
import React from "react";
import pic from "@/assets/images/profile.png";
import me from "@/assets/me.json";

export const metadata: Metadata = {
  title: `About | ${me.name}`,
  description: "Know more about me.",
  keywords: "william calda, software developer, philippines, web developer",
};

const AboutPage = () => {
  return (
    <>
      <Section>
        <div className="my-4 flex items-center justify-between">
          <div>
            <p>Hi, I'm</p>
            <h1 className="font-bold text-2xl">{me.name}</h1>
          </div>
          <Image
            className="rounded-full"
            src={pic}
            width={80}
            height={80}
            alt="William Calda"
          />
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
