"use client";

import { useEffect, useState } from "react";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
  };
}

const YoutubeVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [maxVideos, setMaxVideos] = useState<number>(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 2000) {
        setMaxVideos(6);
      } else {
        setMaxVideos(5);
      }
    };

    // Set initial maxVideos based on screen size
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_API_KEY}&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&part=snippet&order=date&maxResults=${maxVideos}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        if (Array.isArray(data.items)) {
          setVideos(data.items);
        } else {
          console.warn("Unexpected response format:", data);
          setVideos([]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setVideos([]);
      }
    };

    fetchData();
  }, [maxVideos]);

  return (
    <section className="w-full flex flex-col sm:flex-row flex-wrap items-center justify-evenly xl:justify-between gap-4">
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div
            key={index}
            className="flex flex-col items-center h-auto rounded-md overflow-hidden max-w-[280px]"
          >
            <FrameYoutube videoId={video.id.videoId} />
          </div>
        ))
      ) : (
        <p>Aucune vidéo disponible.</p>
      )}
    </section>
  );
};

export default YoutubeVideos;

const FrameYoutube = ({ videoId }: { videoId: string }) => {
  return (
    <iframe
      width="560"
      height="315"
      className="w-auto h-auto"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
