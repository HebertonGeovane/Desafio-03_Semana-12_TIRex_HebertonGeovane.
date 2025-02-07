import React from "react";
import BannerImage from '../../components/BannerImage/BannerImage'
import Stripe from "./../shop/components/stripe/stripe";
import ImageSectionShop from "./components/ImageSectionShop/ImageSectionShop";
import Stripe2 from "./../shop/components/stripe2/stripe2";

const ShopPage = () => {
  return (
    <div className="w-full flex flex-col space-y-0">

      <BannerImage/> 

      <Stripe />

      <ImageSectionShop />

      <Stripe2 />
      
   </div>
  );
};

export default ShopPage;
