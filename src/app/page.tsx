import React from "react";
import TechStack from "@/components/Stack";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/Work";
import ProjectsDeveloped from "@/components/Projects";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <WorkExperience />
      <ProjectsDeveloped />
    </>
  );
};

export default HomePage;
