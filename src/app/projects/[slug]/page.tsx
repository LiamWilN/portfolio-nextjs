import data from "@/assets/projects.json";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Project({ params }: any) {
  const { slug } = await params;

  const dataset = data.project.find((item) => item.title === slug);
  return (
    <section>
      <Link className="flex items-center gap-2" href="/projects">
        <ChevronLeft />
        <span className="hover:underline hover:underline-offset-8 font-semibold">
          Back
        </span>
      </Link>
      <section className="my-4">
        <h1 className="text-2xl font-semibold pt-2">{dataset?.name}</h1>
        <p className="text-sm">{dataset?.company}</p>
        <p className="p-2">{dataset?.description}</p>
      </section>
    </section>
  );
}
