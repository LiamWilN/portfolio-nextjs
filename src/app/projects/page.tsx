import Link from "next/link";
import data from "@/assets/contents.json";
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
      <ul>
        {data.Projects.WorkProjects.map((item: ProjectProps) => (
          <li key={item.id}>
            <Link href={item.links} passHref>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsPage;
