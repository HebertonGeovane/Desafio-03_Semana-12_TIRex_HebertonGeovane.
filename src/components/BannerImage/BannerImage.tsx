import React from "react";
import BannerImage from "../../assets/Rectanglesh.svg";
import ChevronRight from "../../assets/dashicons_arrow-down-alt2.svg";

const Banner = () => {
  return (
    <div className="w-full h-[316px]  ">
      <img 
        src={BannerImage} 
        alt="Shop Banner"
        className="w-full h-full object-cover"
      />

    <h1 className="absolute top-[221px] left-[658px] text-black text-[48px] font-medium leading-[72px] font-[Poppins]">
        Shop
      </h1>

      <div className="absolute top-[295px] left-[660px] flex items-center space-x-2">
        <span className="text-black text-[16px] font-medium leading-[24px] font-[Poppins]">
          Home
        </span>
        <img 
          src={ChevronRight} 
          alt="Seta" 
          className="w-[20px] h-[20px]" 
        />
        <span className="text-black text-[16px] font-light leading-[24px] font-[Poppins]">
          Shop
        </span>
      </div>

    </div>
  );
};

export default Banner ;
