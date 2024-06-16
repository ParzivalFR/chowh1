import "@vidstack/react/player/styles/default/layouts/video.css";
import "@vidstack/react/player/styles/default/theme.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { VideosType } from "../types/VideosType";

const Videos = ({ src, thumbnails }: VideosType) => {
  return (
    <section className="max-w-[1100px] m-auto rounded-xl">
      <MediaPlayer title="Settings Warzone" src={src}>
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails={thumbnails}
          icons={defaultLayoutIcons}
          hideQualityBitrate={true}
        />
      </MediaPlayer>
    </section>
  );
};

export default Videos;
