import { useRef } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { TitleComp } from "./title-comp";
import { ProductCard } from "./product-card";
import { ButtonComp } from "./button";

const bestSellingData = [
  {
    id: 1,
    title: "The north coat",
    price: 260,
    slashed: 360,
    discounted: "-35%",
    image: "./demo/top.png",
    rating: 65,
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    price: 960,
    slashed: 1160,
    discounted: "-40%",
    image: "./demo/bag.png",
    rating: 55,
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    price: 160,
    slashed: 170,
    discounted: "-30%",
    image: "./demo/speaker.png",
    rating: 99,
  },
  {
    id: 4,
    title: "Small BookSelf",
    price: 360,
    slashed: 450,
    discounted: "-25%",
    image: "./demo/desk.png",
    rating: 99,
  },
];

export const BestSelling = () => {
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
    <div className="flex px-3 xl:px-0 items-center flex-col gap-16 h-max w-full">
      <div className="max-w-297.5 flex flex-col gap-4 w-full">
        {/* Title Comp */}
        <TitleComp title="This Month" />

        {/* Best Selling Products */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-20">
            <p className="text-[25px] md:flex md:text-[30px] font-bold">
              Best Selling Products
            </p>
          </div>

          {/* Action */}
          <div className="flex self-end items-center gap-4">
            <ButtonComp title="View All" />
          </div>
        </div>

        {/* Carousel of products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3 md:gap-5">
          <ProductCard settings={{ grid: true }} data={bestSellingData} />
        </div>
      </div>
    </div>
  );
};
