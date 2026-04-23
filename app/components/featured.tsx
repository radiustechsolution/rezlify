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
  {
    id: 5,
    title: "AK-900 Wired Keyboard",
    price: 960,
    slashed: 1160,
    discounted: "-35%",
    image: "./demo/keyboard.png",
    rating: 75,
  },
  {
    id: 6,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    slashed: 160,
    discounted: "-40%",
    image: "./demo/game-pad.png",
    rating: 88,
  },
  {
    id: 7,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    slashed: 400,
    discounted: "-30%",
    image: "./demo/lg-tv.png",
    rating: 99,
  },
  {
    id: 8,
    title: "S-Series Comfort Chair ",
    price: 375,
    slashed: 400,
    discounted: "-25%",
    image: "./demo/chair.png",
    rating: 99,
  },
];

export const Featured = () => {
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
    <section className="flex px-3 xl:px-0 items-center flex-col gap-16 h-max w-full">
      <div className="max-w-297.5 flex flex-col gap-4 w-full">
        {/* Title Comp */}
        <TitleComp title="Featured" />

        {/* Best Selling Products */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-20">
            <p className="text-[25px] md:flex md:text-[30px] font-bold">
              New Arrival
            </p>
          </div>
        </div>

        {/* New Arrival */}
        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="h-150 relative basis-[50%] flex items-end justify-center w-full bg-black">
            <img src="./demo/ps5.png" className="w-130" alt="" />
            <div className="absolute bottom-5 md:bottom-10 z-10 left-5 md:left-10 flex flex-col gap-1">
              <p className="text-[24px] font-bold text-white">PlayStation 5</p>
              <p className="leading-5 opacity-85 text-[13px] text-white">
                Black and White version of the PS5 coming <br /> out on sale.
              </p>
              <p className="underline cursor-pointer font-bold text-[14px] text-white">
                Shop Now
              </p>
            </div>
          </div>
          <div className="h-150 basis-[50%] flex flex-col gap-3 md:gap-5 w-full">
            <div className="w-full relative flex items-end justify-end h-[50%] bg-black">
              <img src="./demo/woman.png" className="w-55 mr-7" alt="" />
              <div className="absolute bottom-5 md:bottom-10 z-10 left-5 md:left-10 flex flex-col gap-1">
                <p className="text-[24px] font-bold text-white">
                  Women Collections
                </p>
                <p className="leading-5 opacity-85 text-[13px] text-white">
                  Featured woman collections that give <br /> you another vibe.
                </p>
                <p className="underline cursor-pointer font-bold text-[14px] text-white">
                  Shop Now
                </p>
              </div>
            </div>
            <div className="w-full h-[50%] flex items-center gap-3 md:gap-5">
              <div className="bg-black flex items-end justify-center relative w-full h-50 md:h-full">
                <img src="./demo/gucci.png" className="w-30 mb-7" alt="" />
                <div className="absolute bottom-5 z-10 left-5 flex flex-col gap-0">
                  <p className="text-[24px] font-bold text-white">Speakers</p>
                  <p className="leading-5 opacity-85 text-[13px] text-white">
                    Amazon wireless speakers
                  </p>
                  <p className="underline cursor-pointer font-bold text-[14px] text-white">
                    Shop Now
                  </p>
                </div>
              </div>
              <div className="bg-black flex items-end justify-center relative w-full h-50 md:h-full">
                <img src="./demo/amazon.png" className="w-30 mb-7" alt="" />
                <div className="absolute bottom-5 z-10 left-5 flex flex-col gap-0">
                  <p className="text-[24px] font-bold text-white">Perfume</p>
                  <p className="leading-5 opacity-85 text-[13px] text-white">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <p className="underline cursor-pointer font-bold text-[14px] text-white">
                    Shop Now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
