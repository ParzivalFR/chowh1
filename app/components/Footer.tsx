import { socials, youtubeSocials } from "@/data/Socials";
import Link from "next/link";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="w-full m-auto flex flex-col gap-4 p-4 bg-black">
      <div className="flex flex-col justify-center items-center gap-2">
        <YoutubeSocial />
        <Social />
      </div>
      <div>
        <p className="text-center text-xs md:text-sm text-zinc-100">
          © {currentYear} CHOWH1 - Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

const YoutubeSocial = () => {
  return (
    <div className="flex gap-4">
      {youtubeSocials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          className="flex items-center gap-2"
        >
          <social.icon className={social.className} />
          <p className="text-sm md:text-xl text-zinc-400">{social.name}</p>
        </Link>
      ))}
    </div>
  );
};

const Social = () => {
  return (
    <div className="flex gap-4">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          className="flex items-center gap-2"
        >
          <social.icon className={social.className} />
          <p className="text-sm md:text-xl text-zinc-400">{social.name}</p>
        </Link>
      ))}
    </div>
  );
};
