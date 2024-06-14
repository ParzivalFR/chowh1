import EmbedTwitch from "./components/EmbedTwitch";
import Spacing from "./components/Spacing";
import Title from "./components/Title";
import YoutubeVideos from "./components/YoutubeVideos";

export default function Home() {
  return (
    <main>
      <Spacing size={20} />
      <Title content="Accueil" />
      <Spacing size={50} />
      <EmbedTwitch />
      <Spacing size={50} />
      <YoutubeVideos />
    </main>
  );
}
