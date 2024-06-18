type YouTubeEmbedProps = {
  videoUrl: string;
  width?: string;
  height?: string;
};

function YouTubeEmbed({
  videoUrl,
  width, 
  height 
}: YouTubeEmbedProps) {
  const embedUrl = videoUrl.replace("watch?v=", "embed/");

  return (
    <div className="relative aspect-video overflow-hidden bg-black ">
      <iframe
        src={embedUrl}
        className="absolute left-0 top-0 size-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      />
    </div>
  );
}

export default YouTubeEmbed;
