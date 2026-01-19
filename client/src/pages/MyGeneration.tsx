import SoftBackdrop from "../components/SoftBackdrop";
import { useEffect, useState } from "react";
import type { IThumbnail } from "../assets/assets";
import { Download, ExternalLink, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../configs/api";
import { useAuth } from "../context/authContext";

const MyGeneration = () => {
  const [loading, setLoading] = useState(true);
  const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const fetchMyThumbnails = async () => {
    try {
      const { data } = await api.get("/api/thumbnail/my");
      setThumbnails(data.thumbnails || []);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to load thumbnails");
      setThumbnails([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setThumbnails([]);
      setLoading(false);
      return;
    }

    fetchMyThumbnails();
  }, [isLoggedIn]);

  const handleDirectDownload = (url: string, title: string) => {
    if (!url) return;

    const link = document.createElement("a");
    link.href = url.includes("/upload/")
      ? url.replace("/upload/", "/upload/fl_attachment/")
      : url;

    link.download = `${title || "thumbnail"}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (id: string) => {
    const ok = confirm("Are you sure you want to delete this thumbnail?");
    if (!ok) return;

    try {
      const { data } = await api.delete(`/api/thumbnail/delete/${id}`);
      setThumbnails((prev) => prev.filter((t) => t._id !== id));
      toast.success(data?.message || "Thumbnail deleted");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Delete failed");
    }
  };

  return (
    <>
      <SoftBackdrop />

      <div className="mt-32 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-center mt-4">
            My Generation
          </h1>
          <p className="text-slate-300 text-center mt-2 max-w-xl mx-auto">
            Your generated images are stored here. You can view, download, and
            manage them here.
          </p>
        </div>

        {!isLoggedIn && (
          <div className="max-w-xl mx-auto mt-20 text-center bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-white">Login required</h2>
            <p className="text-sm text-zinc-300 mt-2">
              Please login to view your thumbnails.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="mt-6 px-6 py-2.5 rounded-full bg-pink-600 hover:bg-pink-700 transition"
            >
              Go to Login
            </button>
          </div>
        )}

        {isLoggedIn && loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 border border-white/10 animate-pulse h-[320px]"
              />
            ))}
          </div>
        )}

        {isLoggedIn && !loading && thumbnails.length === 0 && (
          <div className="max-w-xl mx-auto mt-20 text-center bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-white">
              No thumbnails yet
            </h2>
            <p className="text-sm text-zinc-300 mt-2">
              Generate your first thumbnail and it will appear here.
            </p>
            <button
              onClick={() => navigate("/generate")}
              className="mt-6 px-6 py-2.5 rounded-full bg-pink-600 hover:bg-pink-700 transition"
            >
              Generate Thumbnail
            </button>
          </div>
        )}

        {isLoggedIn && !loading && thumbnails.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {thumbnails.map((thumb) => (
              <div
                key={thumb._id}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-pink-500/40 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={thumb.image_url}
                    alt={thumb.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() =>
                        handleDirectDownload(thumb.image_url || "", thumb.title)
                      }
                      className="p-2 rounded-md bg-black/70 hover:bg-black/90 transition"
                      title="Download"
                    >
                      <Download size={16} />
                    </button>

                    <button
                      onClick={() =>
                        navigate(
                          `/yt-preview?thumbnail_url=${encodeURIComponent(
                            thumb.image_url || ""
                          )}&title=${encodeURIComponent(thumb.title)}`
                        )
                      }
                      className="p-2 rounded-md bg-black/70 hover:bg-black/90 transition"
                      title="Preview"
                    >
                      <ExternalLink size={16} />
                    </button>

                    <button
                      onClick={() => handleDelete(thumb._id)}
                      className="p-2 rounded-md bg-red-600/80 hover:bg-red-700 transition"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-white line-clamp-2">
                    {thumb.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyGeneration;
