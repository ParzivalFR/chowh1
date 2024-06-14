const EmbedTwitch = () => {
  return (
    <section className="w-full md:w-4/5 flex flex-col md:flex-row m-auto">
      <iframe
        src="https://player.twitch.tv/?channel=chowh1&parent=localhost&muted=true"
        height="300"
        width="500"
        className="w-full md:h-96 xl:h-[500px]  md:max-w-[800px]"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://www.twitch.tv/embed/chowh1/chat?parent=localhost&darkpopout"
        height="300"
        width="250"
        className="w-full md:w-1/3 md:h-96 xl:h-[500px] max-w-1/3"
      ></iframe>
    </section>
  );
};

export default EmbedTwitch;
