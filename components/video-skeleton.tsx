export default function VideoSkeleton() {
  return (
    <div className="relative aspect-video animate-pulse overflow-hidden bg-gray-200">
      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
        Loading...
      </div>
    </div>
  );
}
