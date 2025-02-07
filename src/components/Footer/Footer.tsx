import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto py-16 mt-[200px] ">
    
      <div className="w-full max-w-screen-xl mx-auto px-6 text-[#9F9F9F]">
   
        <div className="flex justify-between gap-x-12">
         
          <div className="flex flex-col w-1/3">
           
            <div className="text-left text-[#000000] text-[24px] font-bold mb-6">
              Funiro.
            </div>

            
            <div className="text-[#9F9F9F] text-[16px] mb-6">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </div>

            
            <div className="flex gap-6 mb-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
                  <FaFacebook className="text-black text-[16px]" />
                </div>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
                  <FaInstagram className="text-black text-[16px]" />
                </div>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
                  <FaTwitter className="text-black text-[16px]" />
                </div>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
                  <FaLinkedin className="text-black text-[16px]" />
                </div>
              </a>
            </div>
          </div>

          
          <div className="flex w-1/3">
            <div className="grid grid-cols-2 gap-x-12 w-full">
              
              <div className="flex flex-col space-y-14 ">
                <h3 className="text-[#9F9F9F]  text-[20px] font-bold mb-4">Links</h3>
                <a href="/" className="text-black">Home</a>
                <a href="/shop" className="text-black">Shop</a>
                <a href="#" className="text-black">About</a>
                <a href="#" className="text-black">Contact</a>
              </div>

              
              <div className="flex flex-col space-y-14">
                <h3 className="text-[#9F9F9F] text-[20px] font-bold mb-4">Help</h3>
                <a href="#" className="text-black">Payment Options</a>
                <a href="#" className="text-black">Returns</a>
                <a href="#" className="text-black">Privacy Policies</a>
              </div>
            </div>
          </div>

       
          <div className="flex flex-col w-[286px]">
            
            <h3 className="text-[#9F9F9F] text-[20px] font-bold mb-4">Newsletter</h3>

            
            <div className="flex items-center gap-3">
              
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-[173px] h-[21px] border-b border-black px-4 text-[14px] text-[#9F9F9F] focus:outline-none mt-[3px]"
              />

            
              <button className="w-[75px] h-[21px] text-black font-medium text-[14px]   border-b border-black mt-[3px]">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        
        <div className="text-black text-[16px] text-left mt-16">
          2023 Funiro. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
