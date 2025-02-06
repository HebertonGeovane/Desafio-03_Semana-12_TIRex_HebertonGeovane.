import React from 'react';
import logo from '../../assets/Meubel House_Logos-05.svg';;
import VectorIcon from '../../assets/Vector.svg';
import CartIcon from '../../assets/ant-design_shopping-cart-outlined.svg';


const Header: React.FC = () => { 
  return (
    <div>
    <header className="w-full h-[100px] gap-0  flex items-center justify-between px-10">
    <div className="flex items-center gap-0">
    <img src={logo} alt="Logo" className="w-[50px] h-[32px]" />
      <div className="text-[#000000] text-[34px] font-[700] leading-[41.45px] text-left  from-font decoration-black">
        Furniro
      </div>
      </div>
      <div className="absolute top-[38px] left-[505px] w-[430px] h-[24px] text-[#000000]">
      <nav>
        <ul className="flex justify-between w-full text-[#000000]">
          <li><a href="#">Home</a></li>
          <li><a href='#'>Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      </div>
      <div className="absolute top-[41px] left-[1255px] flex items-center gap-10">
       
        <img src={VectorIcon} alt="Vetor" className="w-[23.33px] h-[18.67px]" />
       
        <img src={CartIcon} alt="Carrinho" className="w-[24.53px] h-[22.06px] ml-[8px]" />
    </div>
    </header>
    </div>
  );
};

export default Header;
