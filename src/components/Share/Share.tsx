import React from "react";
import Imagem1 from '../../assets/Rectangle 36.svg'
import Imagem2 from '../../assets/Rectangle38.svg'
import Imagem3 from '../../assets/Rectangle 40.svg'
import Imagem4 from '../../assets/Rectangle 43.svg'
import Imagem5 from '../../assets/Rectangle 45.svg'
import Imagem6 from '../../assets/Rectangle 37.svg'
import Imagem7 from '../../assets/Rectangle 39.svg'
import Imagem8 from '../../assets/Rectangle 41.svg'
import Imagem9 from '../../assets/Rectangle 44.svg'

const Share = () => {
  return (
    <div className="w-full h-[670px] flex flex-col items-center justify-start py-16">
      
     
      <div className="text-[#616161] text-[20px] font-semibold leading-[30px] text-center absolute top-[3600px] left-[592px] w-[222px] h-[30px]">
        Share your setup with
      </div>

     
      <div className="text-[#3A3A3A] text-[40px] font-bold leading-[48px] text-center absolute top-[3638px] left-[525px] w-[356px] h-[48px]">
        #FuniroFurniture
      </div>

     
      <div className="absolute top-[3659px] left-[-196px] w-[274px] h-[382px]">
        <img
          src={Imagem1}
          alt="Rectangle 26"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="absolute top-[3729px] left-[94px] w-[451px] h-[312px]">
        <img
          src={Imagem2}
          alt="Rectangle 38"
          className="w-full h-full object-cover"
        />
      </div>

       
       <div className="absolute top-[3815px] left-[561px] w-[295px] h-[392px]">
        <img
          src={Imagem3}
          alt="Rectangle 40"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="absolute top-[3758px] left-[872px] w-[290px] h-[348px]">
        <img
          src={Imagem4}
          alt="Rectangle 43"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="absolute top-[3673px] left-[1178px] w-[310px] h-[433px]">
        <img
          src={Imagem5}
          alt="Rectangle 45"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="absolute top-[4057px] left-[-196px] w-[381px] h-[323px]">
        <img
          src={Imagem6}
          alt="Rectangle 37"
          className="w-full h-full object-cover"
        />
      </div>
     

      <div className="absolute top-[4057px] left-[201px] w-[344px] h-[242px]">
        <img
          src={Imagem7}
          alt="Rectangle 39"
          className="w-full h-full object-cover"
        />
      </div>
    

      <div className="absolute top-[4122px] left-[872px] w-[178px] h-[242px]">
        <img
          src={Imagem8}
          alt="Rectangle 41"
          className="w-full h-full object-cover"
        />
      </div>
    

      <div className="absolute top-[4122px] left-[1066px] w-[258px] h-[196px]">
        <img
          src={Imagem9}
          alt="Rectangle 44"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Share;
