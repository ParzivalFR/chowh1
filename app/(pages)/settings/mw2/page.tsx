import Spacing from "@/app/components/Spacing";
import Title from "@/app/components/Title";
import Videos from "@/app/components/Videos";

const SettingsMW2 = () => {
  return (
    <section>
      <Spacing size={20} />
      <Title content="Paramètres Warzone" />
      <Spacing size={50} />
      <Videos src={"/videos/setting-mw2.mp4"} thumbnails={""} />
      <Spacing size={100} />
    </section>
  );
};

export default SettingsMW2;
