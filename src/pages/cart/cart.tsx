import React from "react";
import CartImage from '../../pages/cart/components/cartibanner/cartimage'
import CartProduct from '../../pages/cart/components/cartproduct/cartproduct'
import Stripe3 from '../../pages/cart/components/stripe3/stripe3'

const CartPage = () => {
  return (
    <div className="w-full flex flex-col space-y-0">
       <CartImage /> 

       <CartProduct />

       <Stripe3 />
    </div>
    
  );
};

export default CartPage;
