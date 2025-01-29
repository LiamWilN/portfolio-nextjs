import Link from "next/link";
import data from "@/assets/contents.json";
import WorkExperience from "@/components/Work";
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
      <WorkExperience />
    </>
  );
};

export default WorksPage;
