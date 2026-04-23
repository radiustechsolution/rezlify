import { useRef } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { TitleComp } from "./title-comp";
import { ProductCard } from "./product-card";

const todaysProductData = [
  {
    id: 1,
    title: "AK-900 Wired Keyboard",
    price: 960,
    slashed: 1160,
    discounted: "-35%",
    image: "./demo/keyboard.png",
    rating: 75,
  },
  {
    id: 2,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    slashed: 160,
    discounted: "-40%",
    image: "./demo/game-pad.png",
    rating: 88,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    slashed: 400,
    discounted: "-30%",
    image: "./demo/lg-tv.png",
    rating: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair ",
    price: 375,
    slashed: 400,
    discounted: "-25%",
    image: "./demo/chair.png",
    rating: 99,
  },
  {
    id: 1,
    title: "AK-900 Wired Keyboard",
    price: 960,
    slashed: 1160,
    discounted: "-35%",
    image: "./demo/keyboard.png",
    rating: 75,
  },
  {
    id: 2,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    slashed: 160,
    discounted: "-40%",
    image: "./demo/game-pad.png",
    rating: 88,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    slashed: 400,
    discounted: "-30%",
    image: "./demo/lg-tv.png",
    rating: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair ",
    price: 375,
    slashed: 400,
    discounted: "-25%",
    image: "./demo/chair.png",
    rating: 99,
  },
  {
    id: 1,
    title: "AK-900 Wired Keyboard",
    price: 960,
    slashed: 1160,
    discounted: "-35%",
    image: "./demo/keyboard.png",
    rating: 75,
  },
  {
    id: 2,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    slashed: 160,
    discounted: "-40%",
    image: "./demo/game-pad.png",
    rating: 88,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    slashed: 400,
    discounted: "-30%",
    image: "./demo/lg-tv.png",
    rating: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair ",
    price: 375,
    slashed: 400,
    discounted: "-25%",
    image: "./demo/chair.png",
    rating: 99,
  },
];
export const TodaysSales = () => {
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
        <TitleComp title="Today's" />

        {/* Flash sales count down */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-20">
            <p className="text-[25px] md:flex md:text-[30px] font-bold">
              Flash Sales
            </p>
            {/* CountDown */}
            <div className="flex items-center gap-4">
              <div className="">
                <p className="text-[11px] font-medium">Days</p>
                <p className="text-[30px] font-bold -mt-2.5">03</p>
              </div>
              <p>:</p>
              <div className="">
                <p className="text-[11px] font-medium">Hours</p>
                <p className="text-[30px] font-bold -mt-2.5">23</p>
              </div>
              <p>:</p>
              <div className="">
                <p className="text-[11px] font-medium">Minutes</p>
                <p className="text-[30px] font-bold -mt-2.5">19</p>
              </div>
              <p>:</p>
              <div className="">
                <p className="text-[11px] font-medium">Seconds</p>
                <p className="text-[30px] font-bold -mt-2.5">56</p>
              </div>
            </div>
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

        {/* Carousel of products */}
        <div
          ref={scrollRef}
          className="overflow-x-auto flex mt-2 items-start gap-5 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <ProductCard data={todaysProductData} />
        </div>
      </div>

      <button className="bg-accent text-white text-[14px] cursor-pointer px-12 py-3 rounded-md">
        View All Products
      </button>
    </div>
  );
};
