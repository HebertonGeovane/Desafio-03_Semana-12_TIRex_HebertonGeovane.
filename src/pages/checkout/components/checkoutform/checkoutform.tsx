import React from "react";
import Line10 from '../../../../assets/Line 10.svg'
import Elipse1 from '../../../../assets/Ellipse 1 (1).svg'
import Elipse2 from '../../../../assets/Ellipse 1 (2).svg'
import Elipse3 from '../../../../assets/Ellipse 1 (3).svg'


const CheckoutForm: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-white pt-[100px] pb-[50px] flex justify-center">
            {/* Container principal */}
            <div className="w-[1440px] mx-auto ">
                {/* Título "Billing Details" */}
                <h1 className="text-black text-[36px] font-poppins font-semibold leading-[54px] mb-[40px] ml-[174px]">
                    Billing Details
                </h1>

                {/* Flexbox para os campos do formulário */}
                <div className="flex flex-col space-y-[40px] ml-[174px]">
                    {/* Campo First Name */}
                    <div className="flex flex-col space-y-[10px]">
                        <label className="text-black text-[16px] font-poppins font-medium">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                            
                        />
                    </div>

                    {/* Campo Last Name */}
                    <div className="flex flex-col space-y-[10px]">
                        <label className="text-black text-[16px] font-poppins font-medium">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                           
                        />
                    </div>

                    {/* Campo Company Name (Optional) */}
                    <div className="flex flex-col space-y-[10px]">
                        <label className="text-black text-[16px] font-poppins font-medium">
                            Company Name (Optional)
                        </label>
                        <input
                            type="text"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                           
                        />
                    </div>

                    {/* Campo ZIP Code */}
                    <div className="flex flex-col space-y-[10px]">
                        <label className="text-black text-[16px] font-poppins font-medium">
                            ZIP Code
                        </label>
                        <input
                            type="text"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                        />
                    </div>

                    {/* Campo Country / Region */}
                    <div className="flex flex-col space-y-[10px]">
                        <label className="text-black text-[16px] font-poppins font-medium">
                            Country / Region
                        </label>
                        <input
                            type="text"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                        />
                    </div>

                    {/* Campo Street Address */}
                    <div className="flex flex-col space-y-[10px]">
                        <label className="text-black text-[16px] font-poppins font-medium">
                            Street Address
                        </label>
                        <input
                            type="text"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                        />
                    </div>

                    {/* Campo Town / City */}
                    <div className="flex flex-col space-y-[10px]">
                        <label className="text-black text-[16px] font-poppins font-medium">
                            Town / City
                        </label>
                        <input
                            type="text"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                        />
                    </div>

                    {/* Campo Province */}
                    <div className="flex flex-col space-y-[10px]">
                        <label className="text-black text-[16px] font-poppins font-medium">
                            Province
                        </label>
                        <input
                            type="text"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                        />
                    </div>

                    {/* Campo Add-on Address */}
                    <div className="flex flex-col space-y-[10px]">
                        <label className="text-black text-[16px] font-poppins font-medium">
                            Add-on Address
                        </label>
                        <input
                            type="text"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                        />
                    </div>

                    {/* Campo Email Address */}
                    <div className="flex flex-col space-y-[10px]">
                        <label className="text-black text-[16px] font-poppins font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                        />
                    </div>

                    {/* Campo Additional Information */}
                    <div className="flex flex-col space-y-[10px]">
                        <input 
                            type="text"
                            className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                            placeholder="Additional Information"
                        />
                    </div>


                    <div className="w-[608px] h-[789px] absolute top-[479px] left-[734px] p-10">
                        {/* Cabeçalhos */}
                        <div className="flex justify-between items-center  text-black p-2">
                            <span className="text-[24px] font-medium">Product</span>
                            <span className="text-[24px] font-medium">Subtotal</span>
                        </div>

                        {/* Linha do produto */}
                        <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-2">
                            <span className="text-[16px] text-[#9F9F9F]">Asgaard sofa</span>
                            <span className="text-[12px] font-medium ">X</span>
                            <span className="text-[12px] font-medium ">1</span>
                            </div>
                            <span className="text-[16px] font-light">Rs. 250,000.00</span>
                        </div>

                        {/* Resumo do pagamento */}
                        <div className="mt-4">
                            <div className="flex justify-between">
                            <span className="text-[16px] font-normal">Subtotal</span>
                            <span className="text-[16px] font-light">Rs. 250,000.00</span>
                            </div>
                            <div className="flex justify-between mt-2">
                            <span className="text-[16px] font-normal">Total</span>
                            <span className="text-[24px] font-bold text-[#B88E2F]">Rs. 250,000.00</span>
                            </div>
                        </div>

                        {/* Linha divisória */}
                        <img src={Line10} className="w-[527px] my-4" alt="Divider" />

                        {/* Métodos de pagamento */}
                        <div className="mt-4">
                            <div className="flex items-center gap-2">
                            <img src={Elipse1} className="w-[14px] h-[14px]" alt="Radio Button" />
                            <span className="text-[16px]">Direct Bank Transfer</span>
                            </div>
                            <p className="text-[16px] text-[#9F9F9F] mt-2 text-justify">
                            Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                            Your order will not be shipped until the funds have cleared in our account.
                            </p>

                            <div className="flex items-center gap-2 mt-4">
                            <img src={Elipse2} className="w-[14px] h-[14px]" alt="Radio Button" />
                            <span className="text-[16px] font-medium text-[#9F9F9F]">Direct Bank Transfer</span>
                            </div>

                            <div className="flex items-center gap-2 mt-4">
                            <img src={Elipse3} className="w-[14px] h-[14px]" alt="Radio Button" />
                            <span className="text-[16px] font-medium text-[#9F9F9F]">Cash On Delivery</span>
                            </div>
                        </div>

                        {/* Informação adicional sobre privacidade */}
                        <p className="text-[16px] text-[#9F9F9F] mt-6 text-justify">
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                            <span className="font-semibold text-black">privacy policy</span>.
                        </p>

                        {/* Botão Place Order */}
                        <div className="flex justify-center">
                         <button className="w-[318px] h-[64px] border-2 border-black text-black text-[16px] font-medium rounded-[15px] mt-10 bg-transparent hover:bg-black hover:text-white transition-colors">
                                Place Order
                            </button>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        
    );
};

export default CheckoutForm;
