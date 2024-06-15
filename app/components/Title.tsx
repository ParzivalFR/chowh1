const Title = ({ content }: { content: string }) => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-4xl sm:text-6xl md:text-8xl text-zinc-200">
        {content}
      </h1>
    </div>
  );
};

export default Title;
