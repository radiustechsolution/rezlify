import { HiArrowRight } from "react-icons/hi";

export const Hero = () => {
  const HeroListObject = [
    {
      title: "Woman's Fashion",
    },
    {
      title: "Men's Fashion",
    },
    {
      title: "Electronics",
    },
    {
      title: "Home & Lifestyle",
    },
    {
      title: "Medicine",
    },
    {
      title: "Sports & Outdoor",
    },
    {
      title: "Baby's & Toys",
    },
    {
      title: "Groceries & Pets",
    },
    {
      title: "health & Beauty",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex w-full px-0 md:px-3 xl:px-0 max-w-297.5">
        <div className="border-r hidden lg:flex border-[#b3b3b37b] w-full basis-[17%]">
          <div className="flex flex-col gap-2 mt-5">
            {HeroListObject.map((v, i) => (
              <p className="text-[14px] cursor-pointer" key={i}>
                {v.title}
              </p>
            ))}
          </div>
        </div>
        <div className="basis-full py-10 sm:py-0 gap-15 sm:gap-0 px-10 md:px-20 flex flex-col sm:flex-row items-center justify-between lg:basis-[83%] h-max sm:h-63 mt-3 lg:mt-5 lg:ml-5 bg-black">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="./apple.png" alt="" className="w-8" />
              <p className="text-gray-200 text-[14px]">iPhone 14 Series</p>
            </div>
            <p className="text-white leading-10 font-bold text-[30px] md:text-[35px] lg:text-[40px]">
              Up to 10% off Voucher
            </p>

            <div className="flex items-center gap-3 text-white">
              <p className="text-[13px] underline">Shop Now</p>
              <HiArrowRight />
            </div>
          </div>
          <div>
            <img src="./iphone.png" alt="" className="w-60" />
          </div>
        </div>
      </div>
    </div>
  );
};
