import data from "@/assets/contents.json";
import Link from "next/link";

export default function ProjectsDeveloped() {
  return (
    <div className="mt-8 border-t-[1px] dark:border-neutral-500 border-white">
      <h1 className="my-4 text-2xl font-bold">Projects</h1>
      <ul>
        {data.Projects.WorkProjects.map((item) => (
          <li key={item.id}>
            <Link href={item.links}>
              <h2>{item.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
