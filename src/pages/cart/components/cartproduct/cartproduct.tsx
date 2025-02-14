import React, { useEffect } from "react";
import { useCart } from "../../../../components/cartcontext/cartcontext";
import DeleteIcon from "../../../../assets/Vector(7).svg";
import { useNavigate } from "react-router-dom";

const CartProduct = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); 

  useEffect(() => {
    console.log("Carrinho no CartProduct:", cart);
  }, [cart]);

  
  const parsePrice = (price) => {
    if (typeof price !== 'string') return 0; 
    
    const cleanedPrice = price.replace(/[^0-9]/g, '');
    return parseFloat(cleanedPrice) || 0; 
  };
     
  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } }); 
  };

  return (
    <div className="w-full h-[525px] mt-[416px] bg-white">
      <div className="w-[1440px] h-[525px] mx-auto flex">
        
        <div className="w-[817px] h-[215px] mt-[72px] ml-[100px] flex flex-col">
          
          <div className="w-[817px] h-[55px] bg-[#F9F1E7] flex items-center">
            <span className="w-[200px] text-black text-[16px] font-poppins font-medium ml-[120px]">Product</span>
            <span className="w-[100px] text-black text-[16px] font-poppins font-medium ml-[50px]">Price</span>
            <span className="w-[100px] text-black text-[16px] font-poppins font-medium ml-[50px]">Quantity</span>
            <span className="w-[100px] text-black text-[16px] font-poppins font-medium ml-[50px]">Subtotal</span>
          </div>

          
          {cart.map((product) => {
            const priceNumber = parsePrice(product.price); 
            const subtotal = product.quantity * priceNumber; 

            return (
              <div key={product.id} className="flex items-center border-b border-[#9F9F9F] py-4">
                
                <div className="w-[108px] h-[105px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center ml-[20px]">
                  <img src={product.img} alt={product.name} className="w-[111px] h-[90px] object-cover" />
                </div>
                
                
                <div className="w-[200px] text-[16px] font-poppins font-normal text-[#9F9F9F] ml-[20px]">
                  {product.name}
                </div>
                
                
                <div className="w-[100px] text-[16px] font-poppins font-normal text-[#9F9F9F] ml-[50px]">
                  {product.price}
                </div>
                
                
                <div className="w-[100px] flex items-center justify-center ml-[50px]">
                  <div className="w-[106.54px] h-[47px] border border-[#9F9F9F] rounded-[10px] flex items-center justify-between px-[10px]">
                    <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                  </div>
                </div>
                
                
                <div className="w-[100px] text-[16px] font-poppins font-normal text-black ml-[50px]">
                  Rs. {subtotal.toLocaleString()} 
                </div>
                
                
                <div className="w-[28px] h-[28px] ml-[30px]"> 
                  <img src={DeleteIcon} alt="Delete" className="cursor-pointer" onClick={() => removeFromCart(product.id)} />
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="w-[393px] h-[390px] border bg-[#F9F1E7] mt-[72px] ml-[40px] flex flex-col p-[20px]">
          <h2 className="text-[32px] font-poppins font-semibold">Cart Totals</h2>
          <div className="flex justify-between mb-[20px]">
            <span className="text-[16px] font-poppins font-medium">Subtotal</span>
            <span className="text-[16px] font-poppins font-normal">
              Rs. {cart.reduce((acc, product) => acc + (product.quantity * parsePrice(product.price)), 0).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between mb-[20px]">
            <span className="text-[16px] font-poppins font-medium">Total</span>
            <span className="text-[20px] text-[#B88E2F] font-poppins font-medium">
              Rs. {cart.reduce((acc, product) => acc + (product.quantity * parsePrice(product.price)), 0).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-center">
            <button className="w-[222px] h-[59px] border border-black rounded-[15px] text-black text-[16px] font-poppins font-medium mt-[40px]"
            onClick={handleCheckout}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;