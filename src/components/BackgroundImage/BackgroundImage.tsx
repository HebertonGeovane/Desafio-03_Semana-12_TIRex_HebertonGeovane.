import React from 'react';
import ImageBackground from '../../assets/scandinavian-interior-mockup-wall-decal-background 1.svg'; // Imagem importada

interface BackgroundImageProps {
  height: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ height }) => {
  return (
    <div className="relative w-full" style={{ height }}>
      <img
        src={ImageBackground}
        alt="Imagem de fundo"
        className="w-full object-cover"
      />
      <div
        className="absolute bg-[#FFF3E3] rounded-tl-[10px] w-[643px] h-[443px] top-[253px] left-[739px] flex items-center justify-center"
      >
        <div className="flex flex-col gap-4">
          
          <p
            className="text-[#333333] text-[16px] font-[600] leading-[24px] tracking-[3px] text-left"
            style={{
              fontFamily: 'Poppins', 
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
              width: '123px',
              height: '24px',
            }}
          >
            New Arrival
          </p>

         
          <p
            className="text-[#B88E2F] text-[52px] font-[700] leading-[65px] text-left"
            style={{
              fontFamily: 'Poppins', 
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
              width: '559px',
              height: '127px',
            }}
          >
            Discover Our New Collection
          </p>

          
          <p
            className="text-[#333333] text-[18px] font-[500] leading-[24px] text-left"
            style={{
              fontFamily: 'Poppins', 
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
              width: '546px',
              height: '52px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

         
          <button
            className="bg-[#B88E2F] text-white text-[16px] font-[700] leading-[24px] w-[222px] h-[74px] rounded-md flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-[#F98F] "
            style={{
              fontFamily: 'Poppins',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            BUY NOW
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default BackgroundImage;
