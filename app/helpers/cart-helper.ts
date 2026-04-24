import { ProductData } from "@/types/product";

const CART_KEY = "local_cart_key";

// Add to Cart
export const addToCart = ({ item }: { item: ProductData }) => {
  try {
    const existing = localStorage.getItem(CART_KEY);
    const cart: (ProductData & { quantity: number })[] = existing
      ? JSON.parse(existing)
      : [];

    const index = cart.findIndex((i) => i.id === item.id); // ✅ now using id

    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("cart_updated"));
  } catch (error) {
    console.error("Failed to update cart:", error);
  }
};

// Remove from Cart
export const removeFromCart = ({ item }: { item: ProductData }) => {
  try {
    const existing = localStorage.getItem(CART_KEY);
    const cart: (ProductData & { quantity: number })[] = existing
      ? JSON.parse(existing)
      : [];

    const index = cart.findIndex((i) => i.id === item.id);

    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
      window.dispatchEvent(new Event("cart_updated"));
    }
  } catch (error) {
    console.error("Failed to update cart:", error);
  }
};

// Get From Cart
export const getFromCart = () => {
  const CART_KEY = "local_cart_key";
  const existing = localStorage.getItem(CART_KEY);
  return existing ? JSON.parse(existing) : [];
};
