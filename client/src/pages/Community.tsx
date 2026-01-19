import SoftBackdrop from "../components/SoftBackdrop";
import { useEffect, useState } from "react";
import { dummyThumbnails, type IThumbnail } from "../assets/assets";

const Community = () => {
  const [loading, setLoading] = useState(true);
  const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);

  useEffect(() => {
    setThumbnails(dummyThumbnails as unknown as IThumbnail[]);
    setLoading(false);
  }, []);

  return (
    <>
      <SoftBackdrop />

      <div className="pt-28 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold">Community</h1>
          <p className="text-zinc-400 mt-2 max-w-xl">
            Browse AI-generated thumbnails created by the community and share your own
          </p>
        </div>

        {loading && (
          <div className="max-w-6xl mx-auto mt-10 text-white">
            Loading...
          </div>
        )}

        {!loading && (
          <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {thumbnails.map((thumb) => (
              <div
                key={thumb._id}
                className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
              >
                {/* IMPORTANT: prevent crash if image_url is missing */}
                {thumb.image_url ? (
                  <img
                    src={thumb.image_url}
                    alt={thumb.title}
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <div className="w-full aspect-video bg-white/10 flex items-center justify-center text-zinc-400 text-sm">
                    No Image
                  </div>
                )}

                <div className="p-4">
                  <p className="text-white font-semibold line-clamp-1">
                    {thumb.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Community;
