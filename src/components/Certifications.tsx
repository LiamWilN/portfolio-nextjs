import data from "@/assets/me.json";
import Image, { StaticImageData } from "next/image";
import CSSCert from "@/assets/certifications/CSS Bootstrap and Javascript Certificate.jpg";
import PowerCert from "@/assets/certifications/Fundamental Course of Microsoft Power Platform.jpg";

type CertificationProps = {
  "CSS Bootstrap and Javascript": StaticImageData;
  "Fundamental Course of Microsoft Power Platform": StaticImageData;
};

export default function Certifications() {
  const certs: CertificationProps = {
    "CSS Bootstrap and Javascript": CSSCert,
    "Fundamental Course of Microsoft Power Platform": PowerCert,
  };
  return (
    <div className="mt-8">
      <h1 className="font-semibold text-2xl">Certifications</h1>
      <ul className={`space-y-4" `}>
        {data.certifications.map((item) => (
          <li
            data-aos="fade-right"
            className="p-2 space-y-2 hover:bg-neutral-800 hover:dark:bg-neutral-200 rounded-tl-lg rounded-br-lg"
            key={item.id}
          >
            <a href={item.link} target="_blank">
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
