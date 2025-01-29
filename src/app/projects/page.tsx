import Link from "next/link";
import data from "@/assets/contents.json";
import ProjectsDeveloped from "@/components/Projects";
import { Metadata } from "next";

type ProjectProps = {
  id: number;
  title: string;
  links: string;
};

export const metadata: Metadata = {
  title: data.Projects.PageTitle,
  description: data.Projects.PageDescription,
  keywords: data.Projects.PageKeywords,
};

const ProjectsPage = () => {
  return (
    <>
      <ProjectsDeveloped />
    </>
  );
};

export default ProjectsPage;
