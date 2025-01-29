import Typescript from "@/assets/svg/typescript.svg";
import Javascript from "@/assets/svg/javascript.svg";
import TailwindCSS from "@/assets/svg/tailwindcss.svg";
import PowerApps from "@/assets/svg/powerapps.svg";
import PowerAutomate from "@/assets/svg/powerautomate.svg";
import NextJS from "@/assets/svg/nextjs.svg";
import ReactJS from "@/assets/svg/react.svg";
import Image from "next/image";

export default function TechStack() {
  const techstack = [
    { id: 0, icon: Typescript, title: "Typescript" },
    { id: 1, icon: Javascript, title: "Javascript" },
    { id: 2, icon: ReactJS, title: "React JS" },
    { id: 3, icon: NextJS, title: "Next JS" },
    { id: 4, icon: TailwindCSS, title: "Tailwind CSS" },
    { id: 5, icon: PowerApps, title: "Power Application" },
    { id: 6, icon: PowerAutomate, title: "Power Automate" },
  ];

  return (
    <div className="my-4 flex items-center gap-2">
      {techstack.map((item) => (
        <Image
          width={25}
          height={25}
          key={item.id}
          alt={item.title}
          title={item.title}
          src={item.icon}
        />
      ))}
    </div>
  );
}
