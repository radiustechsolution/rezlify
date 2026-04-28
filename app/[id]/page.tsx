// app/product/[id]/page.tsx
"use client";

import { getProductById } from "@/app/helpers/getProduct";
import { Breadcrumbs } from "@heroui/react";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  slashed: number;
  discounted: string;
  image: any;
  rating: number;
};

export default function ProductPage() {
  const router = useRouter();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const id = Number(params.id);

    if (isNaN(id)) {
      router.replace("/404");
      return;
    }

    const found = getProductById(id);

    if (!found) {
      router.replace("/404");
      return;
    }

    setProduct(found);
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="px-0 md:px-3 xl:px-0 max-w-297.5">
        <Breadcrumbs className="py-6 md:py-10">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>{product.title}</Breadcrumbs.Item>
        </Breadcrumbs>
        <div className="flex flex-col flex-1 lg:flex-row justify-between items-start  gap-5 w-full ">
          <div className="w-full flex h-150 items-start gap-4 basis-[60%]">
            <div className="flex h-full justify-between flex-col gap-2.5 basis-[30%] w-full">
              <div className="w-full h-full bg-pink-300"></div>
              <div className="w-full h-full bg-yellow-300"></div>
              <div className="w-full h-full bg-purple-300"></div>
              <div className="w-full h-full bg-green-300"></div>
            </div>
            <div className="basis-[70%] w-full h-full bg-red-200"></div>
          </div>
          <div className="w-full h-150 bg-orange-600 basis-[35%]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis officia odio voluptatem architecto vel perspiciatis
              quod labore iste aliquam blanditiis saepe non, facere veritatis
              doloribus provident ipsam eos ad rem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
