"use client";

import data from "@/assets/contents.json";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import HRWeb from "@/assets/images/application/hr-recruitment.png";
import Apprv from "@/assets/images/application/approval-hub.png";
import RFP from "@/assets/images/application/request-payment.png";
import Leave from "@/assets/images/application/leave-application.png";
import Ticket from "@/assets/images/application/ticket-system.png";
import OB from "@/assets/images/application/ob-trip.png";
import Docket from "@/assets/images/application/docket.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type ImagesProps = {
  "HR Recruitment Website": StaticImageData;
  "Approval Hub": StaticImageData;
  "Request For Payment": StaticImageData;
  "Leave Application": StaticImageData;
  "Ticket System": StaticImageData;
  "Official Business Trip & QR Scanner": StaticImageData;
  "Docket System": StaticImageData;
};

export default function ProjectsDeveloped({ isfromHome = false }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const dataset = isfromHome
    ? data.Projects.WorkProjects.slice(0, 3)
    : data.Projects.WorkProjects;

  const images: ImagesProps = {
    "HR Recruitment Website": HRWeb,
    "Approval Hub": Apprv,
    "Request For Payment": RFP,
    "Leave Application": Leave,
    "Ticket System": Ticket,
    "Official Business Trip & QR Scanner": OB,
    "Docket System": Docket,
  };

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
      <ul className={`${isfromHome ? "space-y-2" : "grid grid-cols-2"} `}>
        {dataset.map((item) => (
          <li
            data-aos="fade-right"
            className="p-2 space-y-2 hover:bg-neutral-800 hover:dark:bg-neutral-200 rounded-tl-lg rounded-br-lg"
            key={item.id}
          >
            {isfromHome ||
              (images[item.title as keyof typeof images] && (
                <Image
                  src={images[item.title as keyof typeof images]}
                  alt={item.title}
                  className="w-full h-auto"
                />
              ))}
            <Link href={item.links}>
              <h2
                className={`${isfromHome ? "" : "py-2"}  text-lg font-semibold`}
              >
                {item.title}
              </h2>
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
