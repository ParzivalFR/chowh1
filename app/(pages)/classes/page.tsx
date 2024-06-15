import ClassesCards from "@/app/components/ClassesCards";
import Spacing from "@/app/components/Spacing";
import Title from "@/app/components/Title";

const Classes = () => {
  return (
    <main>
      <Spacing size={20} />
      <Title content="Classes MWIII" />
      <Spacing size={50} />
      <ClassesCards />
    </main>
  );
};

export default Classes;
