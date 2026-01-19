import type {AspectRatio, IThumbnail } from "../assets/assets"
import { DownloadIcon, ImageIcon, Loader2Icon } from "lucide-react";


const PreviewPanel = ({thumbnail,isLoading,aspectRatio}:
    {thumbnail :IThumbnail | null,isLoading:boolean,aspectRatio:AspectRatio}
) => {
    const aspectClasses = {
        '16:9': 'aspect-video',
        '1:1': 'aspect-square',
        '9:16': 'aspect-[9/16]',
    } as Record<AspectRatio, string>;

    const onDownload = async () => {
        if(!thumbnail?.image_url) return;
        const link =document.createElement('a');
        link.href = thumbnail?.image_url.replace('/upload','/upload/fl_attachment')
        document.body.appendChild(link);
        link.click()
        link.remove()
        
        try {
            // Create an image element to load the image
            const img = new Image();
            img.crossOrigin = 'anonymous';
            
            img.onload = () => {
                // Create a canvas to convert the image to blob
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                
                if (ctx) {
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob((blob) => {
                        if (blob) {
                            const url = window.URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = url;
                            link.download = `${thumbnail.title || 'thumbnail'}.jpg`;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            window.URL.revokeObjectURL(url);
                        }
                    }, 'image/jpeg', 0.95);
                }
            };
            
            img.onerror = () => {
                if (!thumbnail?.image_url) return;
                // Fallback: try fetch method
                fetch(thumbnail.image_url)
                    .then(response => response.blob())
                    .then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `${thumbnail?.title || 'thumbnail'}.jpg`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                    })
                    .catch(() => {
                        // Final fallback: open in new tab
                        if (thumbnail?.image_url) {
                            window.open(thumbnail.image_url, '_blank');
                        }
                    });
            };
            
            if (thumbnail.image_url) {
                img.src = thumbnail.image_url;
            }
        } catch (error) {
            console.error('Download failed:', error);
            // Fallback to opening in new tab
            window.open(thumbnail.image_url, '_blank');
        }
    };
    
 return (
    <div className="relative mx-auto w-full max-w-2xl">
        <div className={`relative overflow-hidden rounded-lg bg-black/20 border border-white/10 ${aspectClasses[aspectRatio]}`}>
            {/* Loading state */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/25">
                    <Loader2Icon className='size-8 animate-spin text-zinc-400' />
                    <div className="text-center">
                        <p className="text-sm font-medium text-zinc-200">AI is creating your thumbnail...</p>
                        <p className="mt-1 text-xs text-zinc-400">This may take 10-20 seconds</p>
                    </div>
                </div>
            )}
            
            {/* Image preview */}
           {!isLoading && thumbnail?.image_url && (
            <div className="group relative h-full w-full">
                <img src={thumbnail?.image_url} alt={thumbnail.title}
                className="h-full w-full object-cover" />

              <div className="absolute inset-0 flex items-end justify-center pb-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <button 
                  onClick={onDownload} 
                  type="button" 
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-white/30 transition-all active:scale-95"
                >
                  <DownloadIcon className="size-4"/>
                  <span className="text-sm font-medium">Download Thumbnail</span>
                </button>
            </div>
            </div>
                
            )}

            {/* Empty state */}
            {!isLoading && !thumbnail?.image_url && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <ImageIcon className="size-12 text-zinc-400" />
                    <p className="text-sm text-zinc-400">Your thumbnail will appear here</p>
                    <p className="text-xs text-zinc-500">Fill the form above to generate your thumbnail</p>
                </div>
            )}
        
          
        </div>
    </div>
  )
}

export default PreviewPanel