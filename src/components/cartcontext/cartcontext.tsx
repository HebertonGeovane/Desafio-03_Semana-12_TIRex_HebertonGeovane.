// components/cartcontext/cartcontext.tsx
import React, { createContext, useState, useContext } from "react";

// Define o tipo do produto no carrinho
type CartProduct = {
  id: number;
  name: string;
  price: string;
  img: string;
  quantity: number;
};

// Define os tipos de estado e funções
interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provedor do contexto que envolvem os componentes da aplicação
export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  // Adiciona um produto ao carrinho
  const addToCart = (product: CartProduct) => {
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

  // Atualiza a quantidade do produto no carrinho
  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Remove um produto do carrinho
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Remove todos os produtos do carrinho
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar o contexto do carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
