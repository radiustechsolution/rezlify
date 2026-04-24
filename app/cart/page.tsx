"use client";

import { Breadcrumbs } from "@heroui/react";
import { useEffect, useState } from "react";
import { getFromCart } from "../helpers/cart-helper";
import { ProductData } from "@/types/product";
import { DividerComp } from "../components/divider";

type CartItem = ProductData & { quantity: number };

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = getFromCart();
    setCart(stored);

    const onUpdate = () => setCart(getFromCart());
    window.addEventListener("cart_updated", onUpdate);
    return () => window.removeEventListener("cart_updated", onUpdate);
  }, []);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  return (
    <div className="flex flex-col items-center w-full px-4 xl:px-0">
      <div className="max-w-292.5 w-full">
        <Breadcrumbs className="py-6 md:py-10">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>Cart</Breadcrumbs.Item>
        </Breadcrumbs>

        <div className="flex flex-col gap-3 md:gap-5">
          {/* Header row — hidden on mobile */}
          <div className="hidden md:flex text-[14px] items-center rounded-sm justify-between py-3 px-5 border">
            <p className="basis-[40%]">Product</p>
            <p className="basis-[20%] text-center">Price</p>
            <p className="basis-[20%] text-center">Quantity</p>
            <p className="basis-[20%] text-right">Subtotal</p>
          </div>

          {cart.length === 0 && (
            <p className="text-center text-gray-400 py-10 text-sm">
              Your cart is empty.
            </p>
          )}

          {cart.map((v) => (
            <div
              key={v.id}
              className="flex flex-col md:flex-row text-[14px] rounded-sm border p-4 md:py-3 md:px-5 gap-4 md:gap-0 md:items-center md:justify-between"
            >
              {/* Product */}
              <div className="flex gap-3 items-center md:basis-[40%]">
                <img
                  src={`.${v.image}`}
                  className="w-14 h-14 object-contain shrink-0"
                  alt={v.title}
                />
                <p className="font-bold leading-snug">
                  {v.title.length > 24
                    ? `${v.title.substring(0, 24)}…`
                    : v.title}
                </p>
              </div>

              {/* Price + Quantity + Subtotal row on mobile, columns on desktop */}
              <div className="flex items-center justify-between md:contents">
                {/* Price */}
                <div className="md:basis-[20%] md:flex md:justify-center">
                  <p className="text-gray-600">₦{v.price.toLocaleString()}</p>
                </div>

                {/* Quantity */}
                <div className="md:basis-[20%] md:flex md:justify-center">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="w-7 h-7 border rounded-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
                      onClick={() => updateQuantity(v.id, -1)}
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{v.quantity}</span>
                    <button
                      type="button"
                      className="w-7 h-7 border rounded-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
                      onClick={() => updateQuantity(v.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="md:basis-[20%] md:flex md:justify-end">
                  <p className="font-semibold">
                    ₦{(v.price * v.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom */}
          <div className="flex items-start flex-col md:flex-row gap-4 mt-7 md:gap-0 justify-between">
            <div className="flex items-center gap-4 basis-[45%] w-full">
              <input
                type="text"
                className="w-[55%] border outline-0 border-black text-[14px] px-5 rounded-md py-2.5"
                placeholder="Coupon Code"
              />
              <button className="w-[45%] text-[14px] bg-accent text-white px-5 py-3 rounded-md">
                Apply Coupon
              </button>
            </div>
            <div className="basis-[40%] flex flex-col gap-3 border border-black w-full p-5">
              <p className="text-[17px] font-bold">Cart Total</p>

              <div className="">
                <div className="w-full flex items-center justify-between">
                  <p className="text-[14px]">Subtotal:</p>
                  <p>
                    {" "}
                    {cart
                      .reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0,
                      )
                      .toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center flex-col py-2 w-full">
                  <div className="max-w-297.5 w-full border-b border-[#b3b3b37b]"></div>
                </div>
              </div>
              <div className="">
                <div className="w-full flex items-center justify-between">
                  <p className="text-[14px]">Shipping:</p>
                  <p className="text-[14px]">Free</p>
                </div>
                <div className="flex items-center flex-col py-2 w-full">
                  <div className="max-w-297.5 w-full border-b border-[#b3b3b37b]"></div>
                </div>
              </div>
              <div className="">
                <div className="w-full flex items-center justify-between">
                  <p className="text-[14px]">Total:</p>
                  <p className="text-[14px]">₦1750</p>
                </div>
              </div>

              <div className="text-center mt-3 w-full">
                <button className="w-[80%] text-[14px] bg-accent text-white px-5 py-3 rounded-md">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
