import data from "@/assets/me.json";
import Image, { StaticImageData } from "next/image";
import NCIIJavaProgramming from "@/assets/certifications/NCII Java Programming.png";
import AWSCloudPractitioner from "@/assets/certifications/AWS Cloud Practitioner.png";
import CSSCert from "@/assets/certifications/CSS Bootstrap and Javascript Certificate.jpg";
import PowerCert from "@/assets/certifications/Fundamental Course of Microsoft Power Platform.jpg";
import ReactCert from "@/assets/certifications/React JS Crash Course.jpg";
import Web5Cert from "@/assets/certifications/Web5 Fundamentals.jpg";

type CertificationProps = {
  "NCII Java Programming": StaticImageData;
  "CSS Bootstrap and Javascript": StaticImageData;
  "Fundamental Course of Microsoft Power Platform": StaticImageData;
  "React JS Course": StaticImageData;
  "Web5 Fundamentals": StaticImageData;
  "AWS Cloud Practitioner": StaticImageData;
};

export default function Certifications() {
  const certs: CertificationProps = {
    "NCII Java Programming": NCIIJavaProgramming,
    "CSS Bootstrap and Javascript": CSSCert,
    "Fundamental Course of Microsoft Power Platform": PowerCert,
    "React JS Course": ReactCert,
    "Web5 Fundamentals": Web5Cert,
    "AWS Cloud Practitioner": AWSCloudPractitioner
  };
  return (
    <div className="mt-10 border-t-[1px] py-4">
      <h1 className="font-semibold text-2xl">Certifications</h1>
      <ul className={`grid grid-cols-2 mt-2`}>
        <li className="col-span-2 p-2 hover:bg-neutral-800 hover:dark:bg-neutral-200 rounded-tl-lg rounded-br-lg">
          {
            data.certifications.filter((item: any) => item.id === 0).map((item: any) => (
              <>
                <img src={item.link} rel="noopener noreferrer" aria-disabled="true" key={item.id}/>
                  <Image
                    src={certs[item.title as keyof typeof certs]}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <h2 className={`py-2 text-lg font-semibold`}>{item.title}</h2>
              </>
            ))
          }
        </li>
        {data.certifications
          .filter((item: any) => item.id !== 0)
          .map((item: any) => (
            <li
              data-aos="fade-right"
              className="p-2 hover:bg-neutral-800 hover:dark:bg-neutral-200 rounded-tl-lg rounded-br-lg"
              key={item.id}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={certs[item.title as keyof typeof certs]}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <h2 className={`py-2 text-lg font-semibold`}>{item.title}</h2>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
