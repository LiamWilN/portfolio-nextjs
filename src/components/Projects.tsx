import data from "@/assets/contents.json";
import Link from "next/link";

export default function ProjectsDeveloped({ isfromHome = false }) {
  const dataset = isfromHome
    ? data.Projects.WorkProjects.slice(0, 3)
    : data.Projects.WorkProjects;

  return (
    <div
      className={`${
        isfromHome ? "mt-8 border-t-[1px]" : ""
      } dark:border-neutral-500 border-white`}
    >
      <h1 className="my-4 text-2xl font-bold">Projects</h1>
      <ul>
        {dataset.map((item) => (
          <li
            className="hover:bg-neutral-800 hover:dark:bg-neutral-200 p-2 rounded-tl-lg rounded-br-lg"
            key={item.id}
          >
            <Link href={item.links}>
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
