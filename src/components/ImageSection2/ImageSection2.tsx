import React from 'react';
import Image1 from '../../assets/image 1.svg';
import Image2 from '../../assets/image2.svg';
import Image3 from '../../assets/image 3.svg';
import Image4 from '../../assets/image 4.svg';
import Image5 from '../../assets/Images5.svg';
import Image6 from '../../assets/image 6.svg';
import Image7 from '../../assets/image 7.svg';
import Image8 from '../../assets/image 8.svg';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import Label from '../../assets/Label.svg';
import Discount from '../../assets/Discount.svg'
import Label1 from '../../assets/Label1.svg'

const ImageSection2 = () => {
  return (
    <div>
    
      <div className="flex flex-col items-center justify-start gap-8 py-[40px]">
        <div className="font-poppins text-4xl font-bold text-center text-[#3A3A3A]">
          Our Products
        </div>

       
        <div className="flex flex-wrap gap-4 justify-center">
         
          <div className="w-[285px] h-[301px] mb-[40px] flex flex-col relative">
            
            <img
              src={Image1}
              alt="Product 1"
              className="w-full h-full object-cover"
              
            />

            <div className="absolute top-[24px] left-[213px] w-[48px] h-[48px]">
              <img src={Label} alt="Label" className="w-full h-full object-contain" />
            </div>

           
            <div className="w-full bg-[#F4F5F7] p-4">
              <div className="font-poppins text-2xl font-semibold text-left text-[#3A3A3A]">
                Syltherine
              </div>
              <div className="font-poppins text-base font-medium text-left text-[#898989]">
                Stylish cafe chair
              </div>
              <div className="flex items-center">
                <div className="font-poppins text-xl font-semibold text-left text-[#3A3A3A]">
                  Rp 2.500.000
                </div>
                <span className="font-poppins text-sm font-normal text-left text-[#B0B0B0] line-through ml-2">
                    Rp 3.500.000
                  </span>
             </div>
            </div>
          </div>

       
          <div className="w-[285px] h-[301px] mb-[40px] flex flex-col">
            <img
              src={Image2}
              alt="Product 2"
              className="w-full h-full object-cover"
            />
            <div className="w-full bg-[#F4F5F7] p-4">
              <div className="font-poppins text-2xl font-semibold text-left text-[#3A3A3A]">
                Leviosa
              </div>
              <div className="font-poppins text-base font-medium text-left text-[#898989]">
                Stylish cafe chair
              </div>
              <div className="flex items-center">
                <div className="font-poppins text-xl font-semibold text-left text-[#3A3A3A]">
                  Rp 2.500.000
                </div>
                <span className="font-poppins text-sm font-normal text-left text-[#B0B0B0] line-through ml-2">
                    Rp 3.500.000
                  </span>
             </div>
            </div>
          </div>

       
          <div className="w-[285px] h-[301px] mb-[40px] flex flex-col relative">
            <img
              src={Image3}
              alt="Product 3"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-[24px] left-[213px] w-[48px] h-[48px]">
              <img src={Discount} alt="Label" className="w-full h-full object-contain" />
            </div>

            <div className="w-full bg-[#F4F5F7] p-4">
              <div className="font-poppins text-2xl font-semibold text-left text-[#3A3A3A]">
              Lolito
              </div>
              <div className="font-poppins text-base font-medium text-left text-[#898989]">
              Luxury big sofa
              </div>
              <div className="flex items-center">
                <div className="font-poppins text-xl font-semibold text-left text-[#3A3A3A]">
                  Rp 7.000.000
                </div>
                <span className="font-poppins text-sm font-normal text-left text-[#B0B0B0] line-through ml-2">
                  Rp 14.000.000
                </span>
             </div>
            </div>
          </div>

          
          <div className="w-[285px] h-[301px] mb-[40px] flex flex-col relative">
            <img
              src={Image4}
              alt="Product 4"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-[24px] left-[213px] w-[48px] h-[48px]">
              <img src={Label1} alt="Label" className="w-full h-full object-contain" />
            </div>

            <div className="w-full bg-[#F4F5F7] p-4">
              <div className="font-poppins text-2xl font-semibold text-left text-[#3A3A3A]">
              Respira
              </div>
              <div className="font-poppins text-base font-medium text-left text-[#898989]">
              Outdoor bar table and stool
              </div>
              <div className="flex items-center">
                <div className="font-poppins text-xl font-semibold text-left text-[#3A3A3A]">
                  Rp 500.000
                </div>
             </div>
            </div>
          </div>
        </div>

        <div className="mb-[60px]"> 

        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          
          <div className="w-[285px] h-[301px] mb-[40px] flex flex-col">
            <img
              src={Image5}
              alt="Product 5"
              className="w-full h-full object-cover"
            />
            <div className="w-full bg-[#F4F5F7] p-4">
              <div className="font-poppins text-2xl font-semibold text-left text-[#3A3A3A]">
              Grifo
              </div>
              <div className="font-poppins text-base font-medium text-left text-[#898989]">
              Night lamp
              </div>
              <div className="flex items-center">
                <div className="font-poppins text-xl font-semibold text-left text-[#3A3A3A]">
                  Rp 1.500.000
                </div>
             </div>
            </div>
          </div>

          
          <div className="w-[285px] h-[301px] mb-[40px] flex flex-col relative">
            <img
              src={Image6}
              alt="Product 6"
              className="w-full h-full object-cover"
            />
            
            <div className="absolute top-[24px] left-[213px] w-[48px] h-[48px]">
              <img src={Label1} alt="Label" className="w-full h-full object-contain" />
            </div>

            <div className="w-full bg-[#F4F5F7] p-4">
              <div className="font-poppins text-2xl font-semibold text-left text-[#3A3A3A]">
              Muggo
              </div>
              <div className="font-poppins text-base font-medium text-left text-[#898989]">
              Small mug
              </div>
              <div className="flex items-center">
                <div className="font-poppins text-xl font-semibold text-left text-[#3A3A3A]">
                  Rp 150.000
                </div>
             </div>
            </div>
          </div>

          
          <div className="w-[285px] h-[301px] mb-[40px] flex flex-col relative">
            <img
              src={Image7}
              alt="Product 7"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-[24px] left-[213px] w-[48px] h-[48px]">
              <img src={Discount} alt="Label" className="w-full h-full object-contain" />
            </div>

            <div className="w-full bg-[#F4F5F7] p-4">
              <div className="font-poppins text-2xl font-semibold text-left text-[#3A3A3A]">
              Pingky
              </div>
              <div className="font-poppins text-base font-medium text-left text-[#898989]">
              Cute bed set
              </div>
              <div className="flex items-center">
                <div className="font-poppins text-xl font-semibold text-left text-[#3A3A3A]">
                  Rp 7.000.000
                </div>
                <span className="font-poppins text-sm font-normal text-left text-[#B0B0B0] line-through ml-2">
                  Rp 14.000.000
                </span>
             </div>
            </div>
          </div>

          
          <div className="w-[285px] h-[301px] mb-[40px] flex flex-col relative">
            <img
              src={Image8}
              alt="Product 8"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-[24px] left-[213px] w-[48px] h-[48px]">
              <img src={Label1} alt="Label" className="w-full h-full object-contain" />
            </div>

            <div className="w-full bg-[#F4F5F7] p-4">
              <div className="font-poppins text-2xl font-semibold text-left text-[#3A3A3A]">
              Potty
              </div>
              <div className="font-poppins text-base font-medium text-left text-[#898989]">
              Minimalist flower pot
              </div>
              <div className="flex items-center">
                <div className="font-poppins text-xl font-semibold text-left text-[#3A3A3A]">
                  Rp 500.000
                </div>
             </div>
            </div>
          </div>
        </div>

        <ShowMoreButton />
      </div>
    </div>
  );
};

export default ImageSection2;
