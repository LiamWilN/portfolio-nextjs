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
import Sharepoint from "@/assets/svg/list.svg";
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
    { id: 9, icon: Sharepoint, title: "Sharepoint Lists" },
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
        <div className="flex items-center gap-2">
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
        <p className="text-sm">{dataset.company}</p>
        <div className="flex items-center py-2 gap-2 mb-2">
          {dataset.devices.map((item, index) => (
            <span
              key={index}
              className="outline outline-1 px-4 py-1 rounded-full text-sm"
            >
              {item.name}
            </span>
          ))}
        </div>

        <p className="p-2 border-t-[1px] pt-4">{dataset.description}</p>
        <ul className="list-outside list-disc pl-4 p-2">
          {dataset.contributions?.map((item, index) => (
            <li key={index}>{item.content}</li>
          ))}
        </ul>
        {dataset.longdescription && (
          <p className="p-2 text-sm">{dataset.longdescription}</p>
        )}
      </section>
      <br />
      <section className="p-2 pt-4">
        <p className="text-[8px] italic">
          *** Important Note: To protect project confidentiality and security, full project visuals are not publicly displayed.
          Sharing complete images may expose sensitive details related to project anonymity, functionality, and internal processes. 
          Only carefully selected snippets are shown to demonstrate credibility while maintaining compliance and protection. ***
        </p>
      </section>
    </section>
  );
}
