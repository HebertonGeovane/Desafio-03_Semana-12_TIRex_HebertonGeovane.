import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Imagem1 from '../../assets/Rectangle 24.svg';
import Imagem2 from '../../assets/Rectangle 25.svg';
import Imagem3 from '../../assets/image2.png';
import Imagem4 from '../../assets/Rectangle 45.svg'

const ImageSection3 = () => {
  return (
    <div className="relative w-full bg-[#FCF8F3] h-[670px] py-16">
     
      <div
        className="w-[422px] h-[151px] flex flex-col items-start gap-4 absolute top-[50%] left-[100px] transform -translate-y-[50%]"
      >
       
        <div className="text-4xl font-bold text-[#333333] mb-4">
          50+ Beautiful rooms inspiration
        </div>

        
        <div className="text-xl font-normal text-[#666666] mb-8">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </div>

        
        <div className="flex justify-start">
          <button
            className="bg-[#B88E2F] text-white text-xl font-semibold rounded-md"
            style={{
              width: '176px',
              height: '48px',
            }}
          >
            Explore Now
          </button>
        </div>
      </div>

     
      <div className="relative w-full max-w-[600px] ml-[764px] mt-22">
        <Carousel>
         
          <CarouselContent className="flex gap-4">
            <CarouselItem className="flex-shrink-0 basis-[404px]">
            
              <img
                src={Imagem1}
                alt="Imagem 1"
                className="w-full h-[582px] object-cover rounded-lg"
              />
             
            </CarouselItem>
            <CarouselItem className="flex-shrink-0 basis-[404px]">
              <img
                src={Imagem2}
                alt="Imagem 2"
                className="w-full h-[582px] object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="flex-shrink-0 basis-[404px]">
              <img
                src={Imagem3}
                alt="Imagem 3"
                className="w-full h-[582px] object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="flex-shrink-0 basis-[404px]">
              <img
                src={Imagem4}
                alt="Imagem 4"
                className="w-full h-[582px] object-cover rounded-lg"
              />
            </CarouselItem>
          </CarouselContent>

       
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
            <CarouselPrevious />
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageSection3;
