import React from "react";
import ArrowDownIcon from "../../../../assets/dashicons_arrow-down-alt2.svg";
import LineIcon from "../../../../assets/Line5.svg";

const NameStripe: React.FC = () => {
  return (
    <div className="w-full h-[100px] bg-[#F9F1E7] flex items-center pl-[100.98px]">
        <span className="text-[#9F9F9F] text-[16px] font-[400] leading-[24px] font-poppins">
        Home
      </span>
      
      <img
        src={ArrowDownIcon}
        alt="Arrow Down"
        className="w-[20px] h-[20px] ml-[10px] "
      />

    
      <span className="text-[#9F9F9F] text-[16px] font-[400] leading-[24px] font-poppins ml-[24px]">
        Shop
      </span>
      <img
        src={ArrowDownIcon}
        alt="Arrow Down"
        className="w-[20px] h-[20px] ml-[10px] "
      />

    
      <img
        src={LineIcon}
        alt="Vertical Line"
        className="w-[2px] h-[24px] mx-[24px]"
      />

    
      <span className="text-[#000000] text-[16px] font-[400] leading-[24px] font-poppins">
        Asgaard sofa
      </span>
      
      

    </div>
  );
};

export default NameStripe;
