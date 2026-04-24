import {
  MdOutlineFavoriteBorder,
  MdOutlineStarPurple500,
} from "react-icons/md";
import { RxEyeOpen } from "react-icons/rx";
import { addToCart } from "../helpers/cart-helper";
import Link from "next/link";

type data = {
  id: number;
  title: string;
  price: number;
  slashed: number;
  discounted: string;
  image: string;
  rating: number;
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
        <div
          key={i}
          className={`${!settings?.grid && "w-47"} flex flex-col relative gap-1 group`}
        >
          <div
            className={`${settings?.grid ? "h-50" : "h-43"} relative flex items-center justify-center bg-[#e1e1e1] ${!settings?.grid && "w-47"}`}
          >
            <img
              role="presentation"
              src={v.image}
              className={`${settings?.grid ? "w-34" : " w-29"}`}
              alt=""
            />

            {/* Add to Cart */}
            <div
              role="presentation"
              onClick={() => addToCart({ item: v })}
              className="absolute cursor-pointer group-hover:opacity-100 opacity-100 md:opacity-0 bottom-0 bg-black text-center w-full py-2 transition-opacity duration-300"
            >
              <p className="text-white text-[12px]">Add To Cart</p>
            </div>
          </div>
          <p
            className={`${settings?.grid ? "text-[15x]" : "text-[13px]"} font-bold mt-2`}
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
        </div>
      ))}
    </>
  );
};
