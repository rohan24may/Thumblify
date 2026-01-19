import { useSearchParams } from "react-router-dom";
import { yt_html } from "../assets/assets";

const YtPreview = () => {
  const [searchParams] = useSearchParams();

  const thumbnail_url = searchParams.get("thumbnail_url");
  const title = searchParams.get("title");

  console.log("YT PREVIEW PARAMS:", { thumbnail_url, title });

  if (!thumbnail_url || !title) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center text-white">
        Missing thumbnail_url or title in URL
      </div>
    );
  }

  const new_html = yt_html
    .replaceAll("%%THUMBNAIL_URL%%", thumbnail_url)
    .replaceAll("%%TITLE%%", title);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <iframe
        srcDoc={new_html}
        width="100%"
        height="100%"
        title="YouTube Preview"
        className="border-none"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default YtPreview;
