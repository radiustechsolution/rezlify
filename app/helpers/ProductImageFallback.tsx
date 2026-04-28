import { BsImageAlt } from "react-icons/bs";

export const ProductImageFallback = ({ className }: { className?: string }) => (
  <div
    className={`flex flex-col items-center justify-center gap-1 text-gray-400 ${className}`}
  >
    <BsImageAlt size={40} />
    <span className="text-[11px]">No image</span>
  </div>
);
