import React from 'react';

const PaginationButton: React.FC = () => {
  return (
    <div className="flex items-center gap-10 mt-6">
   
      <button
        className="w-[60px] h-[60px]  bg-[#F9F1E7]  text-black text-[20px] font-[400] leading-[30px] flex items-center justify-center rounded-xl hover:bg-[#B88E2F] "
      >
        1
      </button>

   
      <button
        className="w-[60px] h-[60px] bg-[#F9F1E7] text-black text-[20px] font-[400] leading-[30px] flex items-center justify-center rounded-xl hover:bg-[#B88E2F]"
      >
        2
      </button>

     
      <button
        className="w-[60px] h-[60px] bg-[#F9F1E7] text-black text-[20px] font-[400] leading-[30px] flex items-center justify-center rounded-xl hover:bg-[#B88E2F]"
      >
        3
      </button>

     
      <button
        className="w-[120px] h-[60px] bg-[#F9F1E7] text-black text-[20px] font-[300] leading-[30px] flex items-center justify-center rounded-xl hover:bg-[#B88E2F]"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButton;
