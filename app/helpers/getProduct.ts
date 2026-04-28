import { demoProducts } from "../demo/products";

type Product = {
  id: number;
  title: string;
  price: number;
  slashed: number;
  discounted: string;
  image: any;
  rating: number;
};

const allProducts: Product[] = [
  ...demoProducts.bestSellingProducts,
  ...demoProducts.ourProducts,
  ...demoProducts.todaysProduct,
];

export function getProductById(id: number): Product | undefined {
  return allProducts.find((p) => p.id === id);
}
