import { TbTruckDelivery } from "react-icons/tb";

export const TrustComp = () => {
  return (
    <div className="flex flex-col pt-30 pb-10 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-17 max-w-297.5 items-start ">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="bg-[#c1c0c1] rounded-full w-15 flex items-center justify-center h-15 ">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-black">
              <TbTruckDelivery size={30} className="text-white" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold text-[14px]">FREE AND FAST DELIVERY</p>
            <p className="text-[13px]">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="bg-[#c1c0c1] rounded-full w-15 flex items-center justify-center h-15 ">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-black">
              <TbTruckDelivery size={30} className="text-white" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold text-[14px]">FREE AND FAST DELIVERY</p>
            <p className="text-[13px]">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="bg-[#c1c0c1] rounded-full w-15 flex items-center justify-center h-15 ">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-black">
              <TbTruckDelivery size={30} className="text-white" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold text-[14px]">FREE AND FAST DELIVERY</p>
            <p className="text-[13px]">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
