import { useRef } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { TitleComp } from "./title-comp";
import { ProductCard } from "./product-card";
import { CategoryCard } from "./category-card";

export const BrowseCategory = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex px-3 xl:px-0 items-center flex-col gap-16  w-full">
      <div className="max-w-297.5 flex flex-col gap-4 w-full">
        {/* Title Comp */}
        <TitleComp title="Categories" />

        {/* Flash sales count down */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-20">
            <p className="text-[25px] md:flex md:text-[30px] font-bold">
              Browse By Category
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex self-end items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-[#ececec] flex items-center justify-center hover:bg-[#d9d9d9] transition-colors"
            >
              <IoArrowBackSharp size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-[#ececec] flex items-center justify-center hover:bg-[#d9d9d9] transition-colors"
            >
              <IoArrowForwardSharp size={20} />
            </button>
          </div>
        </div>

        {/* Carousel of categories */}
        <div
          ref={scrollRef}
          className="overflow-x-auto mt-5 justify-between flex items-start w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <CategoryCard />
        </div>
      </div>
    </div>
  );
};
