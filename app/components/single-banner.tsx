import { ButtonComp } from "./button";

export const SingleBanner = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-col gap-15 md:gap-0 md:flex-row p-10 md:p-10 lg:p-20 bg-black max-w-297.5 w-full items-center justify-between">
        <div className="flex flex-col gap-7">
          <p className="text-[#3ffc67]">Categories</p>
          <p className="text-white md:hidden text-[35px] lg:text-[45px] font-bold leading-10 lg:leading-16">
            Enhance Your Music Experience
          </p>
          <p className="text-white hidden md:flex text-[35px] lg:text-[45px] font-bold leading-10 lg:leading-16">
            Enhance Your <br /> Music Experience
          </p>
          <div className="flex items-center gap-5">
            <div className="flex flex-col leading-3 items-center justify-center w-13 h-13 bg-white rounded-full">
              <p className="text-[13px]">23</p>
              <p className="text-[10px]">Hours</p>
            </div>
            <div className="flex flex-col leading-3 items-center justify-center w-13 h-13 bg-white rounded-full">
              <p className="text-[13px]">05</p>
              <p className="text-[10px]">Days</p>
            </div>
            <div className="flex flex-col leading-3 items-center justify-center w-13 h-13 bg-white rounded-full">
              <p className="text-[13px]">59</p>
              <p className="text-[10px]">Minutes</p>
            </div>
            <div className="flex flex-col leading-3 items-center justify-center w-13 h-13 bg-white rounded-full">
              <p className="text-[12px]">35</p>
              <p className="text-[10px]">Seconds</p>
            </div>
          </div>
          <div className="hidden md:flex">
            <ButtonComp title="Buy Now!" bgColor="bg-[#3ffc67]" />
          </div>
        </div>
        <img src="./jbl.png" className="w-100 md:w-90 lg:w-110 " alt="" />
        <div className="w-[60%] text-center md:hidden">
          <ButtonComp fullWidth title="Buy Now!" bgColor="bg-[#3ffc67]" />
        </div>
      </section>
    </div>
  );
};
