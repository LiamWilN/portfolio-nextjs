import Link from "next/link";
import data from "@/assets/contents.json";
import { Metadata } from "next";

type WorkProps = {
  id: number;
  title: string;
  links: string;
};

export const metadata: Metadata = {
  title: data.Work.PageTitle,
  description: data.Work.PageDescription,
  keywords: data.Work.PageKeywords,
};

const WorksPage = () => {
  return (
    <>
      <ul>
        {data.Work.WorkExperience.map((item: WorkProps) => (
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

export default WorksPage;
