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
      } dark:border-neutral-500 border-neutral-400`}
    >
      <div className="flex items-center justify-between">
        <h1 className="my-4 text-2xl font-bold">Projects</h1>
        {isfromHome && (
          <Link className="text-sm" href="/projects">
            See all projects
          </Link>
        )}
      </div>
      <ul className={`${isfromHome ? "" : "divide-y-[1px] space-y-2"} `}>
        {dataset.map((item) => (
          <li
            className="p-2 hover:bg-neutral-800 hover:dark:bg-neutral-200 rounded-tl-lg rounded-br-lg"
            key={item.id}
          >
            <Link href={item.links}>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p
                className={`${
                  isfromHome ? "truncate" : ""
                } text-sm dark:text-neutral-700 text-neutral-300`}
              >
                {item.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
