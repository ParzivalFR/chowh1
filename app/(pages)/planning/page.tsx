import Spacing from "@/app/components/Spacing";
import Title from "@/app/components/Title";
import planning from "@/app/images/planning.webp";
import Image from "next/image";

const Planning = () => {
  return (
    <section className="w-full h-auto m-auto px-4">
      <Title content={"Planning"} />
      <Spacing size={50} />
      <div className="flex justify-center items-center">
        <Image
          src={planning}
          alt="Planning"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <Spacing size={100} />
    </section>
  );
};

export default Planning;
