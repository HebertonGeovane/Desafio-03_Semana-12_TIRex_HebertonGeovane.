import { useState } from "react";


interface Product {
  id: string;
  img: string;
  name: string;
  price: string;
  quantity: number;
}


interface UseCart {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
}

const useCart = (): UseCart => {
  
  const [cart, setCart] = useState<Product[]>([]);

  
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  
  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
     
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return { cart, addToCart, removeFromCart, updateQuantity };
};

export default useCart;