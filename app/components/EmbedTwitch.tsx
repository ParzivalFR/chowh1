const EmbedTwitch = () => {
  return (
    <section className="w-full md:w-4/5 flex  md:flex-row m-auto">
      <iframe
        src="https://player.twitch.tv/?channel=chowh1&parent=chowh1.vercel.app&muted=true"
        height="300"
        width="500"
        className="w-full md:h-96 xl:h-[500px]  md:max-w-[800px]"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://www.twitch.tv/embed/chowh1/chat?parent=chowh1.vercel.app&darkpopout"
        height="300"
        width="150"
        className="w-2/6 md:w-1/3 md:h-96 xl:h-[500px] max-w-1/3"
      ></iframe>
    </section>
  );
};

export default EmbedTwitch;
