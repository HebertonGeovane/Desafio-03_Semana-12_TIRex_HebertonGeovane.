import React from "react";
import CartImage from '../../pages/cart/components/cartibanner/cartimage'
import CartProduct from '../../pages/cart/components/cartproduct/cartproduct'
import Stripe3 from '../../pages/cart/components/stripe3/stripe3'
import { CartProvider } from "../../components/cartcontext/cartcontext";

const CartPage = () => {
  return (
    <div className="w-full flex flex-col space-y-0">
      
       <CartProvider>
       <CartImage /> 

       <CartProduct />

       <Stripe3 />
       </CartProvider>
    </div>
    
  );
};

export default CartPage;
