import Typescript from "@/assets/svg/typescript.svg";
import PowerApps from "@/assets/svg/powerapps.svg";
import PowerAutomate from "@/assets/svg/powerautomate.svg";
import NextJS from "@/assets/svg/nextjs.svg";
import List from "@/assets/svg/list.svg";
import Image from "next/image";
import CPlusPlus from "@/assets/svg/c-plusplus.svg";
import Java from "@/assets/svg/java.svg";
import CSharp from "@/assets/svg/csharp.svg";

export default function TechStack() {
  const techstack = [
    { id: 0, icon: PowerApps, title: "Power Application" },
    { id: 1, icon: PowerAutomate, title: "Power Automate" },
    { id: 2, icon: List, title: "Sharepoint List" },
    { id: 3, icon: Typescript, title: "Typescript" },
    { id: 4, icon: NextJS, title: "Next JS" }, 
    { id: 5, icon: CPlusPlus, title: "C++" },
    { id: 6, icon: CSharp, title: "C#" },
    { id: 7, icon: Java, title: "Java" },
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
