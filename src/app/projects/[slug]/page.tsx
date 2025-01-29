import data from "@/assets/projects.json";
import Typescript from "@/assets/svg/typescript.svg";
import Javascript from "@/assets/svg/javascript.svg";
import TailwindCSS from "@/assets/svg/tailwindcss.svg";
import PowerApps from "@/assets/svg/powerapps.svg";
import PowerAutomate from "@/assets/svg/powerautomate.svg";
import NextJS from "@/assets/svg/nextjs.svg";
import ReactJS from "@/assets/svg/react.svg";
import ReactQuery from "@/assets/svg/reactquery.svg";
import ReactRouter from "@/assets/svg/reactrouter.svg";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type Params = Promise<{ slug: string }>;

export default async function Project({ params }: { params: Params }) {
  const { slug } = await params;
  const dataset = data.project.find((item) => item.title === slug);

  const techs = [
    { id: 0, icon: Typescript, title: "Typescript" },
    { id: 1, icon: Javascript, title: "Javascript" },
    { id: 2, icon: ReactJS, title: "React JS" },
    { id: 3, icon: NextJS, title: "Next JS" },
    { id: 4, icon: TailwindCSS, title: "Tailwind CSS" },
    { id: 5, icon: PowerApps, title: "Power Application" },
    { id: 6, icon: PowerAutomate, title: "Power Automate" },
    { id: 7, icon: ReactQuery, title: "React Query" },
    { id: 8, icon: ReactRouter, title: "React Router" },
  ];

  if (!dataset) {
    return <p>Project not found</p>;
  }

  return (
    <section>
      <Link className="flex items-center gap-2" href="/projects">
        <ChevronLeft />
        <span className="hover:underline hover:underline-offset-8 font-semibold">
          Back
        </span>
      </Link>
      <section className="my-4">
        <h1 className="text-2xl font-semibold pt-2">{dataset.name}</h1>
        <p className="text-sm">{dataset.company}</p>
        <div className="flex items-center py-2 gap-2">
          <span className="text-sm">Technologies / Framework used: </span>
          {dataset.techs
            .filter((item) => techs.some((tech) => tech.title === item.name))
            .map((filteredItem) => {
              const tech = techs.find(
                (tech) => tech.title === filteredItem.name
              );
              return (
                <div key={filteredItem.name}>
                  <Image
                    src={tech?.icon}
                    alt={tech?.title || "Language"}
                    width={20}
                    height={20}
                  />
                </div>
              );
            })}
        </div>

        <p className="p-2">{dataset.description}</p>
        <ul className="list-outside list-disc pl-4 p-2">
          {dataset.contributions?.map((item, index) => (
            <li key={index}>{item.content}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
