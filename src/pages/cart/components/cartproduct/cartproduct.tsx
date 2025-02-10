import React from "react";
import ProductImage from "../../../../assets/Asgaard sofa 3.svg";
import DeleteIcon from "../../../../assets/Vector(7).svg";

const CartProduct = () => {
    return (
        <div className="w-full h-[525px] mt-[416px] bg-white">
            {/* Container principal */}
            <div className="w-[1440px] h-[525px] mx-auto flex">
                {/* Flexbox com as medidas especificadas */}
                <div className="w-[817px] h-[215px] mt-[72px] ml-[100px] flex flex-col">
                    {/* Faixa com fundo #F9F1E7 */}
                    <div className="w-[817px] h-[55px] bg-[#F9F1E7] flex items-center">
                        {/* Texto "Product" */}
                        <span className="w-[63px] h-[24px] text-black text-[16px] font-poppins font-medium leading-[24px] ml-[142px]">
                            Product
                        </span>
                        {/* Texto "Price" */}
                        <span className="w-[40px] h-[24px] text-black text-[16px] font-poppins font-medium leading-[24px] ml-[137px]">
                            Price
                        </span>
                        {/* Texto "Quantity" */}
                        <span className="w-[70px] h-[24px] text-black text-[16px] font-poppins font-medium leading-[24px] ml-[137px]">
                            Quantity
                        </span>
                        {/* Texto "Subtotal" */}
                        <span className="w-[69px] h-[24px] text-black text-[16px] font-poppins font-medium leading-[24px] ml-[60px]">
                            Subtotal
                        </span>
                    </div>

                    {/* Restante do conteúdo da flexbox */}
                    <div className="flex-1 flex items-center">
                        {/* Container da imagem do produto */}
                        <div className="w-[108px] h-[105px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center">
                            <img
                                src={ProductImage}
                                alt="Asgaard Sofa"
                                className="w-[111px] h-[90px] object-cover"
                            />
                        </div>

                        {/* Nome do produto e preço */}
                        <div className="flex items-center ml-[20px]">
                            <div className="w-[108px] h-[24px]  flex items-center justify-center text-[16px] font-poppins font-normal text-[#9F9F9F] ">
                                Asgaard sofa
                            </div>
                            <div className="w-[112px] h-[24px]  flex items-center justify-center text-[16px] font-poppins font-normal text-[#9F9F9F]  ml-[70px]">
                                Rs. 250,000.00
                            </div>
                        </div>

                        {/* Input de quantidade */}
                        <div className="w-[106.54px] h-[47px] border border-[#9F9F9F] rounded-[10px] flex items-center justify-between ml-[90px] px-[10px]">
                            <span className="text-[16px] font-poppins font-normal text-black">-</span>
                            <span className="text-[16px] font-poppins font-medium text-black">1</span>
                            <span className="text-[16px] font-poppins font-normal text-black">+</span>
                        </div>

                        {/* Texto "Rs. 250,000.00" após o input */}
                        <div className="w-[112px] h-[24px] flex items-center justify-center text-[16px] font-poppins font-normal text-black ml-[20px]">
                            Rs. 250,000.00
                        </div>

                        {/* Ícone de deletar */}
                        <div className="w-[28px] h-[28px] flex items-center justify-center ml-[20px]">
                            <img
                                src={DeleteIcon}
                                alt="Delete"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Flexbox à direita */}
                <div className="w-[393px] h-[390px] border  bg-[#F9F1E7] mt-[72px] ml-[40px] flex flex-col p-[20px]">
                    {/* Título "Cart Totals" */}
                    <div className="w-[179px] h-[48px] text-black text-[32px] font-poppins font-semibold leading-[48px] mb-[20px]">
                        Cart Totals
                    </div>

                    {/* Texto "Subtotal" */}
                    <div className="flex justify-between mb-[20px]">
                        <span className="w-[69px] h-[24px] text-black text-[16px] font-poppins font-medium leading-[24px]">
                            Subtotal
                        </span>
                        <span className="w-[112px] h-[24px]  text-black text-[16px] font-poppins font-normal leading-[24px] flex items-center justify-center">
                            Rs. 250,000.00
                        </span>
                    </div>

                    {/* Texto "Total" */}
                    <div className="flex justify-between mb-[20px]">
                        <span className="w-[41px] h-[24px] text-black text-[16px] font-poppins font-medium leading-[24px]">
                            Total
                        </span>
                        <span className="w-[144px] h-[30px] bg- text-[#B88E2F] text-[20px] font-poppins font-medium leading-[30px] flex items-center justify-center">
                            Rs. 250,000.00
                        </span>
                    </div>

                    {/* Botão "Check Out" */}
                    <div className="flex justify-center">
                        <button className="w-[222px] h-[59px] border border-black rounded-[15px]  text-black text-[16px] font-poppins font-medium flex items-center justify-center mt-[40px] ">
                            Check Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
