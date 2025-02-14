import React, { useContext, useState } from "react";
import { CartContext } from "../../../../components/cartcontext/cartcontext";
import Line10 from "../../../../assets/Line 10.svg";
import Elipse1 from "../../../../assets/Ellipse 1 (1).svg";
import Elipse2 from "../../../../assets/Ellipse 1 (2).svg";
import Elipse3 from "../../../../assets/Ellipse 1 (3).svg";

const CheckoutForm: React.FC = () => {
  const { cart } = useContext(CartContext);
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    zipCode: "",
    street: "",
    city: "",
    state: "",
    neighborhood: "",
    addOnAddress: "",
    email: "",
    country: "", 
  });

  const [selectedPayment, setSelectedPayment] = useState("Direct Bank Transfer"); 

  
  const parsePrice = (price: string) => {
    if (typeof price !== "string") return 0;
    const cleanedPrice = price.replace(/[^0-9]/g, "");
    return parseFloat(cleanedPrice) || 0;
  };

  
  const subtotal = cart.reduce((acc, product) => acc + product.quantity * parsePrice(product.price), 0);
  const total = subtotal;

  
  const fetchAddress = async (zipCode: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setAddress({
          ...address,
          zipCode: data.cep,
          street: data.logradouro,
          city: data.localidade,
          state: data.uf,
          neighborhood: data.bairro,
        });
      } else {
        alert("CEP não encontrado!");
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
    }
  };

  
  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const zipCode = e.target.value;
    setAddress((prevState) => ({ ...prevState, zipCode }));
    if (zipCode.length === 8) {
      fetchAddress(zipCode);
    }
  };

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setAddress((prevState) => ({ ...prevState, country }));
  };

  
  const handlePaymentChange = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };

  
  const countryOptions = [
    { code: "US", name: "United States" },
    { code: "BR", name: "Brazil" },
    { code: "IN", name: "India" },
    { code: "GB", name: "United Kingdom" },
    
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-[100px] pb-[50px] flex justify-center">
     
      <div className="w-[1440px] mx-auto">
       
        <h1 className="text-black text-[36px] font-poppins font-semibold leading-[54px] mb-[40px] ml-[174px]">
          Billing Details
        </h1>

        
        <div className="flex flex-col space-y-[40px] ml-[174px]">
          {[
            { label: "First Name", key: "firstName" },
            { label: "Last Name", key: "lastName" },
            { label: "Company Name (Optional)", key: "companyName" },
            { label: "ZIP Code", key: "zipCode" },
            { label: "Country / Region", key: "country" },
            { label: "Street Address", key: "street" },
            { label: "Town / City", key: "city" },
            { label: "Province", key: "state" },
            { label: "Add-on Address", key: "addOnAddress" },
            { label: "Email Address", key: "email" },
          ].map((field, index) => (
            <div key={index} className="flex flex-col space-y-[10px]">
              <label className="text-black text-[16px] font-poppins font-medium">
                {field.label}
              </label>
              {field.key === "country" ? (
                <select
                  name={field.key}
                  value={address[field.key as keyof typeof address] || ""}
                  onChange={handleCountryChange}
                  className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                >
                  {countryOptions.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.name}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
                  name={field.key}
                  value={address[field.key as keyof typeof address] || ""}
                  onChange={field.key === "zipCode" ? handleZipCodeChange : handleInputChange}
                />
              )}
            </div>
          ))}

          
          <div className="flex flex-col space-y-[10px]">
            <input
              type="text"
              className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] bg-white p-[10px] text-black text-[16px] font-poppins"
              placeholder="Additional Information"
              name="additionalInfo"
              onChange={handleInputChange}
            />
          </div>
        </div>

        
        <div className="w-[608px] h-[789px] absolute top-[479px] left-[734px] p-10 ">
          {/* Cabeçalhos */}
          <div className="flex justify-between items-center text-black p-2">
            <span className="text-[24px] font-medium">Product</span>
            <span className="text-[24px] font-medium">Subtotal</span>
          </div>

          
          {cart.map((product) => {
            const priceNumber = parsePrice(product.price);
            const productSubtotal = product.quantity * priceNumber;

            return (
              <div key={product.id} className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[16px] text-[#9F9F9F]">{product.name}</span>
                  <span className="text-[12px] font-medium">X</span>
                  <span className="text-[12px] font-medium">{product.quantity}</span>
                </div>
                <span className="text-[16px] font-light">Rs. {productSubtotal.toLocaleString()}</span>
              </div>
            );
          })}

          
          <div className="mt-4">
            <div className="flex justify-between">
              <span className="text-[16px] font-normal">Subtotal</span>
              <span className="text-[16px] font-light">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[16px] font-normal">Total</span>
              <span className="text-[24px] font-bold text-[#B88E2F]">Rs. {total.toLocaleString()}</span>
            </div>
          </div>

          
          <img src={Line10} className="w-[527px] my-4" alt="Divider" />

          
          <div className="mt-4">
            {[
              { method: "Direct Bank Transfer", icon: Elipse1 },
              { method: "Direct Bank Transfer", icon: Elipse2 },
              { method: "Cash On Delivery", icon: Elipse3 },
            ].map((payment, index) => (
              <div
                key={index}
                className="flex items-center gap-2 mt-4 cursor-pointer"
                onClick={() => handlePaymentChange(payment.method)}
              >
                <img
                  src={payment.icon}
                  className="w-[14px] h-[14px]"
                  alt="Radio Button"
                />
                <span
                  className={`text-[16px] ${
                    selectedPayment === payment.method
                      ? "text-black font-medium"
                      : "text-[#9F9F9F] font-medium"
                  }`}
                >
                  {payment.method}
                </span>
              </div>
            ))}
          </div>

          
          <p className="text-[16px] text-[#9F9F9F] mt-6 text-justify">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
            <span className="font-semibold text-black">privacy policy</span>.
          </p>

          
          <div className="flex justify-center mt-6">
            <button className="w-[318px] h-[64px] rounded-[15px] border-2 border-black text-black text-[16px] font-poppins font-medium hover:bg-gray-100 transition-colors duration-300">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;