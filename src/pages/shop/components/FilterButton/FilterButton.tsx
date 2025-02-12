import React, { useState } from "react";
import VectorIcon1 from "../../../../assets/Vector(1).svg";
import VectorIcon2 from "../../../../assets/Vector(2).svg";
import VectorIcon3 from "../../../../assets/Vector(3).svg";
import LineIcon from "../../../../assets/Line5.svg";

interface FilterButtonProps {
  onShowCountChange: (count: number) => void; // Função para atualizar o número de itens por página
  totalProducts: number; // Total de produtos disponíveis
  showCount: number; // Quantidade de itens a serem exibidos por página
}

const FilterButton: React.FC<FilterButtonProps> = ({ onShowCountChange, totalProducts, showCount }) => {
  const handleShowCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const count = Number(event.target.value); // Valor selecionado no dropdown
    onShowCountChange(count); // Atualiza o estado no componente pai
  };

  return (
    <div className="w-full h-[100px] bg-[#F9F1E7] flex items-center pl-[100.98px]">
      <img 
        src={VectorIcon1} 
        alt="Filter Icon"
        className="w-[19.05px] h-[16.67px] border-t-[1px] border-solid border-black mr-[20px]"
      />

      <span className="text-black text-[20px] font-[400] leading-[30px] font-[Poppins] mr-[20px]">
        Filter
      </span>

      <img 
        src={VectorIcon2} 
        alt="Vector Icon"
        className="w-[16.33px] h-[16.33px] text-black mr-[20px]"
      />

      <img 
        src={VectorIcon3} 
        alt="Vector Icon"
        className="w-[21px] h-[19.5px]"
      />

      <img 
        src={LineIcon} 
        alt="Line Icon"
        className="w-[37px] h-[0px] border-t-[2px] border-solid border-[#9F9F9F] rotate-[-90deg]"
      />

      {/* Mensagem dinâmica */}
      <span className="text-black text-[16px] font-[400] leading-[24px] font-[Poppins]">
        Showing 1-16 –{showCount} of {totalProducts} 32 results
      </span>

      <span className="absolute text-black text-[20px] font-[400] leading-[30px] font-[Poppins]" style={{ left: '897px', top: '451px' }}>
        Show
      </span>

      <div className="absolute bg-white w-[55px] h-[55px]" style={{ left: '968px', top: '439px' }}>
        <select 
          value={showCount}
          onChange={handleShowCountChange}
          className="w-full h-full text-[20px] font-[400] leading-[30px] font-[Poppins] bg-white border-none"
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
        </select>
      </div>

      <span className="absolute text-black text-[20px] font-[400] leading-[30px] font-[Poppins]" style={{ left: '1052px', top: '451px' }}>
        Short by
      </span>

      <div className="absolute bg-white w-[188px] h-[55px]" style={{ left: '1152px', top: '439px', zIndex: 5 }}></div>

      <input 
        type="text" 
        className="absolute w-[72px] h-[30px] text-[20px] font-[400] leading-[30px] font-[Poppins] text-[#9F9F9F] border-none"
        style={{ left: '1182px', top: '451px', zIndex: 5 }}
        placeholder="Default"
      />
    </div>
  );
};

export default FilterButton;