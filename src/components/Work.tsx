import data from "@/assets/contents.json";
import additional from "@/assets/work.json";
import Link from "next/link";

export default function WorkExperience({ isfromHome = false }) {
  return (
    <div
      className={`${
        isfromHome ? "mt-8 border-t-[1px]" : ""
      }  dark:border-neutral-500 border-neutral-400`}
    >
      <h1 className="my-4 text-2xl font-bold">Work Experience</h1>
      <ul
        className={`${
          isfromHome ? "border-l-[1px] pl-2" : ""
        } dark:border-neutral-500 border-neutral-400 list-inside `}
      >
        {data.Work.WorkExperience.map((item) => (
          <li
            className="hover:bg-neutral-800 hover:dark:bg-neutral-200 p-2 rounded-tr-lg rounded-bl-lg"
            key={item.id}
          >
            <Link href={item.links}>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              {item.details.map((item) => (
                <h3 className="text-sm" key={item.id}>
                  {item.content}
                </h3>
              ))}
              {isfromHome || (
                <ul className="py-2 p-4 list-disc list-outside">
                  {additional.work
                    .find((work) => work.position === item.title)
                    ?.responsibilities.slice(0, 2)
                    .map((listitem) => (
                      <li className="text-sm" key={listitem.id}>
                        {listitem.content}
                      </li>
                    ))}
                </ul>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
