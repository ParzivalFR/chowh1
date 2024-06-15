"use client";

import { Classes } from "@/app/data/Classes";
import Image from "next/image";

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
  return (
    <section className=" justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Classes.map((weapon, index: number) => (
        <div
          key={index}
          className="w-11/12 flex flex-col justify-between bg-zinc-500/60 rounded-xl pt-1 pl-1 pr-1 transition"
        >
          <Image
            src={weapon.image}
            alt={weapon.title}
            width={1280}
            height={720}
            className="w-full h-full object-cover rounded-t-xl hover:rounded-b-xl hover:scale-[0.98] duration-500 ease-in-out"
          />
          <div className="relative flex items-center justify-center px-4 py-2 ">
            <h3 className="text-xl font-bold text-zinc-100">{weapon.title}</h3>
            <button
              onClick={() => downloadImage(weapon.image, `${weapon.title}.jpg`)}
            >
              <weapon.icon className="absolute top-[30%] right-4 text-xl text-zinc-200 transition hover:scale-[1.3] duration-500 ease-in-out" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ClassesCards;
