import React from "react";
import TrophyIcon from "../../../../assets/trophy1.svg";
import WarrantyIcon from "../../../../assets/Vector(4).svg";
import FreeShippingIcon from "../../../../assets/Vector(5).svg"
import SupportIcon from "../../../../assets/Vector(6).svg"

const Stripe3: React.FC = () => {
    
  return (
    <div className="w-full h-[270px] bg-[#FAF3EA] flex justify-between items-center px-[100px]">
     <div className="flex gap-[55.33px]">
        
        <div className="flex items-center gap-4">
          <img src={TrophyIcon} alt="High Quality" className="w-[60px] h-[60px]" />
          <div>
            <h3 className="text-[#242424] text-[25px] font-semibold leading-[37.5px]">
              High Quality
            </h3>
            <p className="text-[#898989] text-[20px] font-medium leading-[30px]">
              Crafted from top materials
            </p>
          </div>
        </div>

       
        <div className="flex items-center gap-4">
          <img src={WarrantyIcon} alt="Warranty Protection" className="w-[60px] h-[60px]" />
          <div>
            <h3 className="text-[#242424] text-[25px] font-semibold leading-[37.5px]">
              Warranty Protection
            </h3>
            <p className="text-[#898989] text-[20px] font-medium leading-[30px]">
              Over 2 years
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
          <img src={FreeShippingIcon} alt="High Quality" className="w-[60px] h-[60px]" />
          <div>
            <h3 className="text-[#242424] text-[25px] font-semibold leading-[37.5px]">
            Free Shipping
            </h3>
            <p className="text-[#898989] text-[20px] font-medium leading-[30px]">
            Order over 150 $
            </p>
          </div>
        </div>

        
        <div className="flex items-center gap-4">
          <img src={SupportIcon} alt="Warranty Protection" className="w-[60px] h-[60px]" />
          <div>
            <h3 className="text-[#242424] text-[25px] font-semibold leading-[37.5px]">
            24 / 7 Support
            </h3>
            <p className="text-[#898989] text-[20px] font-medium leading-[30px]">
            Dedicated support
            </p>
          </div>
        </div>
      </div>
  );
};

export default Stripe3;
