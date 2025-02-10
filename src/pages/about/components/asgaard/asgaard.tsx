import React from "react";
import Image1 from "../../../../assets/Maskgroup.svg";
import Image2 from "../../../../assets/Group98.svg";
import Image3 from "../../../../assets/Group97.svg";
import Image4 from "../../../../assets/Group98.svg";
import Image5 from "../../../../assets/Asgaard sofa 3.svg"
import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const AsgaardSection: React.FC = () => {
  return (
    <div className="w-full h-[820px] bg-white flex items-center justify-center px-10">
    
     <div className="w-[1241px] h-[730px] flex">
        
    
        <div className="w-[76px] h-[416px] flex flex-col justify-between">
          <div className="w-[76px] h-[80px]  flex items-center justify-center bg-[#F9F1E7] rounded-xl">
            <img src={Image1} alt="Imagem 1" className="w-[60px] h-[60px] object-contain" />
          </div>

          <div className="w-[76px] h-[80px] flex items-center justify-center bg-[#F9F1E7] rounded-xl">
            <img src={Image2} alt="Imagem 2" className="w-[60px] h-[60px] object-contain" />
          </div>

          <div className="w-[76px] h-[80px]  flex items-center justify-center bg-[#F9F1E7] rounded-xl">
            <img src={Image3} alt="Imagem 3" className="w-[60px] h-[60px] object-contain" />
          </div>

          <div className="w-[76px] h-[80px]  flex items-center justify-center bg-[#F9F1E7] rounded-xl">
            <img src={Image4} alt="Imagem 4" className="w-[60px] h-[60px] object-contain" />
          </div>
        </div>

        <div className="w-[481px] h-[500px] flex items-center justify-center ml-[30px]">
          <div className="w-[423px] h-[500px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center">
            <img src={Image5} alt="Asgaard Sofa" className="w-[423px] h-[500px] object-contain rounded-[10px]" />
          </div>
        </div>
            
        <div className="w-[606px] h-[730px] flex flex-col space-y-5 ">
  
      <div>
        <h1 className="  text-[42px] font-normal leading-[63px]">Asgaard Sofa</h1>
        <p className="w-[173px] h-[36px] text-[#9F9F9F] text-[24px] font-[500] leading-[36px] font-poppins mt-2">
          Rs. 250,000.00
        </p>
      </div>

     
      <div className="flex items-center space-x-2">
        <IoStar className="text-yellow-400 text-[20px]" />
        <IoStar className="text-yellow-400 text-[20px]" />
        <IoStar className="text-yellow-400 text-[20px]" />
        <IoStarHalf className="text-yellow-400 text-[20px]" />
        <div className="w-[30px] h-[1px] bg-gray-500 rotate-[-90deg]"></div>
        <p className="text-gray-500 text-[13px]">5 Customer Review</p>
      </div>

      
      <p className="text-gray-500 text-[13px] leading-[19.5px] w-[424px]">
        Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which boasts
        a clear midrange and extended highs for a sound.
      </p>

     
      <div>
        <p className="text-gray-500 text-[14px]">Size</p>
        <div className="flex space-x-2 mt-2">
          <button className="w-[30px] h-[30px] rounded bg-[#B88E2F] text-black">
            L
          </button>
          <button className="w-[30px] h-[30px] rounded bg-[#F9F1E7] text-[#000000]">
            XL
          </button>
          <button className="w-[30px] h-[30px] rounded bg-[#F9F1E7] text-[#000000]">
            XS
          </button>
        </div>
      </div>

   
      <div>
        <p className="text-gray-500 text-[14px]">Color</p>
        <div className="flex space-x-2 mt-2">
          <div className="w-[30px] h-[30px] rounded-full bg-[#816DFA]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-black"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#B88E2F]"></div>
        </div>
      </div>

     
      <div className="flex items-center space-x-4">
        <div className="w-[123px] h-[64px] border border-gray-500 rounded flex items-center justify-around text-[16px] font-medium">
          <button className="text-gray-500 ">-</button>
          <span className="text-gray-500 ">1</span>
          <button className="text-gray-500 ">+</button>
        </div>
        <button className="w-[215px] h-[64px] border border-black rounded-lg text-[#000000] text-[20px]">
          Add to Cart
        </button>
      </div>

      
      <div className="w-full h-[1px] bg-gray-300"></div>

      <div className="space-y-2">
        <div className="flex text-[16px]">
          <p className="w-[75px] text-gray-500">SKU</p>
          <p className="w-[25px] text-gray-500">:</p>
          <p className="w-[44px] text-gray-500">SS001</p>
        </div>
        <div className="flex text-[16px]">
          <p className="w-[75px] text-gray-500">Category</p>
          <p className="w-[25px] text-gray-500">:</p>
          <p className="w-[45px] text-gray-500">Sofas</p>
        </div>
        <div className="flex text-[16px]">
          <p className="w-[75px] text-gray-500">Tags</p>
          <p className="w-[25px] text-gray-500">:</p>
          <p className="w-[190px] text-gray-500">Sofa, Chair, Home, Shop</p>
        </div>
        <div className="flex text-[16px]">
        <p className="w-[75px] text-gray-500">Share</p>
        <p className="w-[25px] text-gray-500">:</p>
        <p className="w-[25px]"></p>

        <div className="flex gap-3">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
              <FaFacebook className="text-black text-[16px]" />
            </div>
          </a>
        
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
              <FaLinkedin className="text-black text-[16px]" />
            </div>
          </a>

          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
              <FaTwitter className="text-black text-[16px]" />
            </div>
          </a>
        </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default AsgaardSection;
