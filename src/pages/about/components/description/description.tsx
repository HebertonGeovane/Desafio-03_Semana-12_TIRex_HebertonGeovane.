import React from "react";
import SofaImage1 from "../../../../assets/Cloud sofa three seater + ottoman_2 1.svg";
import SofaImage2 from "../../../../assets/Cloud sofa three seater + ottoman_1 1.svg";

const Description = () => {
  return (
    <div className="w-full border-t border-[#D9D9D9] mt-[100px]"> 
    <div className="w-full max-w-[1440px]">
      <div className="flex justify-center space-x-10 py-5">
        
        <p className="w-[237px] h-[36px] text-[24px] leading-[36px] font-medium  text-[#000000] text-center">
          Description
        </p>
        
        <p className="w-[269px] h-[36px] text-[24px] leading-[36px] font-normal  text-[#9F9F9F] text-center">
          Additional Information
        </p>
      </div>

      <div className="flex flex-col space-y-6 mx-auto mt-10 w-[1026px]">
       
          <p className="w-full h-[48px]  text-[#9F9F9F] p-4 text-[16px] leading-[24px] font-normal text-justify">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>

          
          <p className="w-full h-[96px]  text-[#9F9F9F] p-4 text-[16px] leading-[24px] font-normal text-justify">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10">
     
          <div className="w-[605px] h-[348px] bg-[#F9F1E7] rounded-[10px] flex justify-center items-center">
            <img src={SofaImage1} alt="Cloud Sofa Three Seater + Ottoman 2" className="w-auto h-auto" />
          </div>

        
          <div className="w-[605px] h-[348px] bg-[#F9F1E7] rounded-[10px] flex justify-center items-center">
            <img src={SofaImage2} alt="Cloud Sofa Three Seater + Ottoman 1" className="w-auto h-auto" />
          </div>
        </div>
        </div >

    <div className="w-full border-t border-[#D9D9D9] mt-[100px]"></div>

</div >
  );
};

export default Description;
