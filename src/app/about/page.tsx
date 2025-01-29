import { Metadata } from "next";
import me from "@/assets/me.json";
import About from "@/components/About";

export const metadata: Metadata = {
  title: `About | ${me.name}`,
  description: "Know more about me.",
  keywords: "william calda, software developer, philippines, web developer",
};

const AboutPage = () => {
  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
