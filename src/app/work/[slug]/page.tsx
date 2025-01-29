import { ChevronLeft } from "lucide-react";
import data from "@/assets/work.json";
import Link from "next/link";

export default async function Work({ params }: any) {
  const { slug } = await params;
  const dataset = data.work.find((item) => item.title === slug);
  return (
    <section>
      <Link className="flex items-center gap-2" href="/work">
        <ChevronLeft />
        <span className="hover:underline hover:underline-offset-8 font-semibold">
          Back
        </span>
      </Link>

      <section className="my-4">
        <h1 className="text-2xl font-semibold pt-2">{dataset?.position}</h1>
        <p className="text-sm">
          {dataset?.company} - {dataset?.location}
        </p>
        <p className="text-sm">{dataset?.date}</p>
        <ul className="py-4 pl-4 list-disc list-outside">
          {dataset?.responsibilities.map((item) => (
            <li className="py-2" key={item.id}>
              {item.content}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
