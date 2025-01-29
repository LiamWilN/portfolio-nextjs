import {
  faFacebookMessenger,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "./Section";
import me from "@/assets/me.json";
import Link from "next/link";

const Footer = () => {
  const socialicons: { [key: number]: any } = {
    0: faLinkedin,
    1: faFacebookMessenger,
    2: faGithub,
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-h-96 min-h-72 mt-12 mb-2 flex flex-col justify-between">
      <Section>
        <h1 className="font-bold text-2xl">Let's Connect</h1>
        <h3 className="text-sm">Get in touch / reach out to me via:</h3>
        <div className="mt-3 flex items-center gap-2">
          {me.socialmedia.map((item) => (
            <Link
              href={item.link}
              target="_blank"
              key={item.id}
              title={item.title}
            >
              <FontAwesomeIcon
                width={25}
                height={25}
                icon={socialicons[item.id]}
              />
            </Link>
          ))}
        </div>
        <a
          className="mt-4 gap-2 flex items-center"
          href="mailto:williamncalda@gmail.com."
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope} width={25} height={25} />
          <p>{me.email}</p>
        </a>
      </Section>
      <Section>
        <p className="text-sm">
          &copy; {currentYear} | {me.name}
        </p>
      </Section>
    </footer>
  );
};

export default Footer;
