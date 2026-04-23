import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

export const Navbar = () => {
  return (
    <div className="w-full sticky top-0 bg-accent-foreground z-20 border-b border-[#b3b3b37b] flex flex-col items-center">
      <div className="flex pt-4 pb-4 md:pt-6 px-3 md:pb-3 xl:px-0 max-w-297.5 items-center justify-between w-full">
        {/* Logo */}
        <div className="cursor-pointer">
          <p className="font-bold text-[22px] sm:text-[24px]">RezLify</p>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-5">
          <li className="text-[16px] cursor-pointer">Home</li>
          <li className="text-[16px] cursor-pointer">Contact</li>
          <li className="text-[16px] cursor-pointer">About</li>
          <li className="text-[16px] cursor-pointer">Sign Up</li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="hidden md:flex rounded-md py-2 px-4 bg-[#e4e4e4] items-center gap-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              name=""
              className=" text-[14px] w-45 outline-0"
              id=""
            />
            <RiSearch2Line size={18} />
          </div>
          <MdOutlineFavoriteBorder className="cursor-pointer" size={25} />
          <IoCartOutline className="cursor-pointer" size={25} />
        </div>
      </div>
    </div>
  );
};
