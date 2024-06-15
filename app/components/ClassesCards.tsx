"use client";

import DEAMON_9MM from "@/app/images/weapons/9mm_daemon.webp";
import AMR9 from "@/app/images/weapons/amr9.webp";
import ARBALETE from "@/app/images/weapons/arbalete.webp";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";

const downloadImage = (url: string, filename: string) => {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch(() => alert("Failed to download image"));
};

const ClassesCards = () => {
  const Weapons = [
    {
      img: DEAMON_9MM,
      name: "DEAMON 9MM",
    },
    {
      img: AMR9,
      name: "AMR9",
    },
    {
      img: ARBALETE,
      name: "ARBALETE",
    },
  ];

  return (
    <section className=" justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Weapons.map((weapon, index) => (
        <div
          key={index}
          className="w-11/12 flex flex-col justify-between bg-zinc-500/60 rounded-xl pt-1 pl-1 pr-1 transition"
        >
          <Image
            src={weapon.img}
            alt={"Image de l'arme numéro " + weapon.name + " de Warzone"}
            width={1280}
            height={720}
            className="w-full h-full object-cover rounded-t-xl hover:rounded-b-xl hover:scale-[0.98] duration-500 ease-in-out"
          />
          <div className="relative flex items-center justify-center px-4 py-2 ">
            <h3 className="text-xl font-bold text-zinc-100">{weapon.name}</h3>
            <button
              onClick={() =>
                downloadImage(weapon.img.src, weapon.name + ".png")
              }
            >
              <IoMdDownload className="absolute top-[30%] right-4 text-xl text-zinc-200 transition hover:scale-[1.1] duration-500 ease-in-out" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ClassesCards;
