"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Hero } from "./components/hero";
import { TodaysSales } from "./components/today-sales";
import { DividerComp } from "./components/divider";
import { BrowseCategory } from "./components/browse-category";
import { BestSelling } from "./components/best-selling";
import { SingleBanner } from "./components/single-banner";
import { OurProducts } from "./components/our-products";
import { Featured } from "./components/featured";

export default function Home() {
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    console.log("theme:", theme);
    console.log("resolvedTheme:", resolvedTheme);
    console.log(
      "data-theme on html:",
      document.documentElement.getAttribute("data-theme"),
    );
  }, [theme]);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Space */}
      <div className="h-15 md:h-25"></div>

      {/* Todays */}
      <TodaysSales />

      {/* Divider */}
      <DividerComp />

      {/* Browse by Categories */}
      <BrowseCategory />

      {/* Divider */}
      <DividerComp />

      {/* Best Selling */}
      <BestSelling />

      {/* Divider */}
      <DividerComp />

      {/* Advert Banner */}
      <SingleBanner />

      {/* Divider */}
      <DividerComp />

      {/* Best Selling */}
      <OurProducts />

      {/* Divider */}
      <DividerComp />

      {/* Featured */}
      <Featured />
    </div>
  );
}
