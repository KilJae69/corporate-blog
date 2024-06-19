"use client";

import { useState } from "react";
import Image from "next/image";

type YouTubeEmbedProps = {
  videoUrl: string;
};

function YouTubeEmbed({ videoUrl }: YouTubeEmbedProps) {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const embedUrl = videoUrl.replace("watch?v=", "embed/");
  const videoId = videoUrl.split("v=")[1];

  const handlePlayClick = () => {
    setIsPlayerVisible(true);
  };

  return (
    <div className="relative aspect-video overflow-hidden bg-black">
      {!isPlayerVisible ? (
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center"
          onClick={handlePlayClick}
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video thumbnail"
            priority
            className="object-cover"
            fill
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <button className="rounded-2xl bg-red-600 px-8 py-2 text-white">
              ▶
            </button>
          </div>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          className="absolute left-0 top-0 size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        />
      )}
    </div>
  );
}

export default YouTubeEmbed;
