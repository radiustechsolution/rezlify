"use client";

import {
  MdOutlineFavoriteBorder,
  MdOutlineStarPurple500,
} from "react-icons/md";
import { RxEyeOpen } from "react-icons/rx";
import { addToCart } from "../helpers/cart-helper";
import Link from "next/link";
import { Skeleton } from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import { ProductImageFallback } from "../helpers/ProductImageFallback";

type data = {
  id: number;
  title: string;
  price: number;
  slashed: number;
  discounted: string;
  image: any;
  rating: number;
};

const ProductImage = ({ src, isGrid }: { src: string; isGrid: boolean }) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      if (imgRef.current.naturalWidth === 0) {
        setStatus("error");
      } else {
        setStatus("loaded");
      }
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton: only shown while loading */}
      {status === "loading" && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-none z-10" />
      )}

      {/* Fallback: shown on error, sits above the hidden img */}
      {status === "error" && (
        <ProductImageFallback className="absolute inset-0 w-full h-full z-10" />
      )}

      {/* Image: always mounted so onLoad/onError always fire, hidden until loaded */}
      {status !== "error" && (
        <img
          ref={imgRef}
          role="presentation"
          src={src}
          alt=""
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};

export const ProductCard = ({
  data,
  settings,
}: {
  data: data[];
  settings?: { grid?: boolean };
}) => {
  return (
    <>
      {data.map((v, i) => (
        <Link
          prefetch
          href={`/${v.id}`}
          key={i}
          className={`${!settings?.grid && "w-47"} flex flex-col relative gap-1 group`}
        >
          <div
            className={`${settings?.grid ? "h-50" : "h-43"} relative flex items-center justify-center bg-[#e1e1e1] overflow-hidden ${!settings?.grid && "w-47"}`}
          >
            <ProductImage src={v.image.img1} isGrid={!!settings?.grid} />
          </div>

          <p
            className={`${settings?.grid ? "text-[15px]" : "text-[13px]"} font-bold mt-2`}
          >
            {v.title}
          </p>
          <div className={`flex items-center gap-4`}>
            <p className={`text-[13px] text-accent`}>${v.price}</p>
            <p className={`text-[13px] line-through text-gray-400`}>
              ${v.slashed}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center">
              <MdOutlineStarPurple500 className="text-warning" />
              <MdOutlineStarPurple500 className="text-warning" />
              <MdOutlineStarPurple500 className="text-warning" />
              <MdOutlineStarPurple500 className="text-warning" />
              <MdOutlineStarPurple500 className="text-warning" />
            </div>
            <p className="text-[13px] text-gray-400">({v.rating})</p>
          </div>

          <div className="left-2 z-10 top-2 bg-accent absolute">
            <p className="text-white text-[11px] font-bold px-2 py-0.3 rounded-sm">
              {v.discounted}
            </p>
          </div>
          <div className="flex flex-col absolute top-2 right-2 gap-2">
            <div className="rounded-full cursor-pointer z-10 flex items-center justify-center p-1 bg-white">
              <MdOutlineFavoriteBorder size={15} />
            </div>
            <div className="rounded-full cursor-pointer z-10 flex items-center justify-center p-1 bg-white">
              <RxEyeOpen size={15} />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
