import React from "react";
import CheckoutImage from "./components/checkoutbanner/checkoutimage";
import CheckoutForm from "./components/checkoutform/checkoutform";
import Stripe4 from './components/stripe4/stripe4'

const CheckoutPage = () => {
    return (
      <div className="w-full flex flex-col space-y-0">
        <CheckoutImage />

        <CheckoutForm />

        <Stripe4 />
    
      </div>
      
    );
  };
  
  export default CheckoutPage;