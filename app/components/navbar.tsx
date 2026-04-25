"use client";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { getFromCart } from "../helpers/cart-helper";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

export const Navbar = () => {
  const [cart, setCart] = useState<any>([]);

  // Get Cart Item
  useEffect(() => {
    const syncCart = () => setCart(getFromCart());

    // load on mount
    syncCart();

    // listen for changes
    window.addEventListener("cart_updated", syncCart);

    // cleanup
    return () => window.removeEventListener("cart_updated", syncCart);
  }, []);

  return (
    <div className="w-full sticky top-0 bg-accent-foreground z-20 border-b border-black/10 shadow-sm flex flex-col items-center">
      <div className="flex py-4 px-4 xl:px-0 max-w-292.5 items-center justify-between w-full gap-6">
        {/* Logo */}
        <div className="cursor-pointer shrink-0 flex items-center gap-3">
          <IoIosMenu className="lg:hidden" size={26} />
          <Link
            className="font-bold text-[22px] sm:text-[24px] tracking-tight"
            href={"/"}
          >
            RezLify
          </Link>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {["Home", "Contact", "About", "Sign Up"].map((item) => (
            <li
              key={item}
              className="text-[15px] cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-current after:transition-all after:duration-200 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex rounded-md py-2 px-3 bg-[#F5F5F5] items-center gap-2 transition-all duration-200 focus-within:bg-[#ebebeb] focus-within:ring-1 focus-within:ring-black/10 w-55">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-[13px] outline-none flex-1 placeholder-black/40"
            />
            <RiSearch2Line size={16} className="text-black/50 shrink-0" />
          </div>

          <div className="flex items-center gap-0">
            {/* Search */}
            <button className="p-1.5 rounded-full hover:bg-black/5 transition-colors duration-150">
              <RiSearch2Line size={24} />
            </button>

            {/* Wishlist */}
            <button className="p-1.5 rounded-full hover:bg-black/5 transition-colors duration-150">
              <MdOutlineFavoriteBorder size={24} />
            </button>

            {/* Cart */}
            <Link
              href={"/cart"}
              className="relative p-1.5 rounded-full hover:bg-black/5 transition-colors duration-150"
            >
              <IoCartOutline size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-4.5 h-4.5 px-1 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-[10px] leading-none">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
