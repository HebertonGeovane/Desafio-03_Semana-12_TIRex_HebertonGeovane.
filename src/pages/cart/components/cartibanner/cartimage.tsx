import React from "react";
import CartBanner from "../../../../assets/Rectanglesh.svg";
import ChevronRight from "../../../../assets/dashicons_arrow-down-alt2.svg";
import logo from '../../../../assets/Meubel House_Logos-05.svg';
const CartImage= () => {
  return (
    <div className="w-full h-[316px] relative">
      <img 
        src={CartBanner} 
        alt="Cart Banner"
        className="w-full h-full object-cover"
      />
      
      <img 
        src={logo} 
        alt="Meubel House Logo"
        className="absolute w-[77px] h-[77px] top-[61px] left-[682px]"
      />

    <h1 className="absolute top-[121px] left-[678px] text-black text-[48px] font-medium leading-[72px] font-[Poppins]">
        Cart
      </h1>

      <div className="absolute top-[195px] left-[670px] flex items-center space-x-2">
        <span className="text-black text-[16px] font-medium leading-[24px] font-[Poppins]">
          Home
        </span>
        <img 
          src={ChevronRight} 
          alt="Seta" 
          className="w-[20px] h-[20px]" 
        />
        <span className="text-black text-[16px] font-light leading-[24px] font-[Poppins]">
          Cart
        </span>
      </div>

    </div>
  );
};

export default CartImage ;