import React from 'react';
import Image1 from '../../assets/Mask Group.svg';
import Image2 from '../../assets/Image-living room.svg';
import Image3 from '../../assets/Mask Group 1.svg';

const ImageSection1 = () => {
  return (
    <div className="relative w-full min-h-[600px] py-16"> 

      <div className="text-center w-full font-poppins text-4xl font-bold text-[#333333] mb-4">
        Browse The Range
      </div>

      
      <div className="text-center w-full font-poppins text-xl font-normal text-[#666666] mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      
      <div className="flex gap-8 justify-center">
       
        <div className="relative w-[381px] h-[480px]">
          <img
            src={Image1}
            alt="Dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 w-[79px] h-[36px] font-poppins text-2xl font-semibold text-center text-[#333333]">
            Dining
          </div>
        </div>

        
        <div className="relative w-[381px] h-[480px]">
          <img
            src={Image2}
            alt="Living"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 w-[71px] h-[36px] font-poppins text-2xl font-semibold text-center text-[#333333]">
            Living
          </div>
        </div>

        
        <div className="relative w-[381px] h-[480px]">
          <img
            src={Image3}
            alt="Bedroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 w-[71px] h-[36px] font-poppins text-2xl font-semibold text-center text-[#333333] ">
            Bedroom
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection1;
