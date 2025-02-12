import React from "react";
import Stripe from './components/stripe/stripe'
import AsgaardSection from "../about/components/asgaard/asgaard";
import Description from '../about/components/description/description'
import Related from '../about/components/related/related'
import { CartProvider } from "../../components/cartcontext/cartcontext";

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col space-y-0">

      
      <Stripe />

      <CartProvider>
      <AsgaardSection />
      </CartProvider>
      <Description />

      <Related />
      
   </div>
  );
};

export default AboutPage;
