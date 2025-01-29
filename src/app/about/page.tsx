import Section from "@/components/Section";
import Image from "next/image";
import { Metadata } from "next";
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
        <div className="my-4 flex items-center justify-between mx-0 md:mx-8">
          <div>
            <h1 className="font-bold text-3xl">{me.name}</h1>
            <h3 className="text-sm">{me.aspiretobe}</h3>
          </div>
          <Image
            className="rounded-full"
            src={pic}
            width={80}
            height={80}
            alt={`Picture of ${me.name}`}
          />
        </div>
        <div className="mt-8 space-y-4 text-left">
          {me.hero.map((item) => (
            <p key={item.id}>{item.content}</p>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
