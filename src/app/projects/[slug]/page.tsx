import data from "@/assets/projects.json";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Project({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const dataset = data.project.find((item) => item.title === slug);

  if (!dataset) {
    return <p>Project not found</p>;
  }

  return (
    <section>
      <Link className="flex items-center gap-2" href="/projects" passHref>
        <ChevronLeft />
        <span className="hover:underline hover:underline-offset-8 font-semibold">
          Back
        </span>
      </Link>
      <section className="my-4">
        <h1 className="text-2xl font-semibold pt-2">{dataset.name}</h1>
        <p className="text-sm">{dataset.company}</p>
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
