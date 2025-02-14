import React from 'react';
import { useCart } from '../../../../components/cartcontext/cartcontext'; 
import Line11 from '../../../../assets/Line 11.svg'; 
import Vector8 from '../../../../assets/Vector (8).svg'; 

interface ShoppingCartModalProps {
    onClose: () => void;
    onNavigateToCart: () => void;
}

const ShoppingCartModal: React.FC<ShoppingCartModalProps> = ({ onClose, onNavigateToCart }) => {
    const { cart, updateQuantity, removeFromCart } = useCart(); 

    
    const calculateSubtotal = () => {
        return cart.reduce((total, product) => total + (product.quantity * parsePrice(product.price)), 0);
    };

    
    const parsePrice = (price: string | number) => {
        if (typeof price === 'string') {
            const cleanedPrice = price.replace(/[^0-9]/g, '');
            return parseFloat(cleanedPrice) || 0;
        }
        return price;
    };

    return (
        <div className="fixed right-0 top-0 w-[350px] h-[500px] bg-white border border-gray-300 shadow-lg">
            
            <div className="w-full h-[60px] flex items-center justify-center border-b border-gray-300">
                <span className="text-[20px] font-poppins font-medium">Shopping Cart</span>
                <img src={Line11} alt="Line" className="absolute bottom-0 left-0 right-0 w-full" />
            </div>

            
            <div className="p-4 overflow-y-auto h-[300px]">
                {cart.map((product) => (
                    <div key={product.id} className="flex items-center justify-between border-b border-gray-300 py-4">
                        
                        <div className="w-[60px] h-[60px] bg-gray-200 rounded-[10px] flex items-center justify-center">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-[10px]"
                            />
                        </div>

                        
                        <div className="flex-1 ml-4">
                            <div className="text-[16px] font-poppins font-medium">
                                {product.name}
                            </div>
                            <div className="text-[14px] font-poppins font-normal text-gray-600">
                                Rs. {parsePrice(product.price).toLocaleString()}
                            </div>
                        </div>

                        
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => {
                                    if (product.quantity > 1) {
                                        updateQuantity(product.id, product.quantity - 1); 
                                    } else {
                                        removeFromCart(product.id); 
                                    }
                                }}
                                className="w-[20px] h-[20px] flex items-center justify-center bg-[#9F9F9F] rounded-full"
                            >
                                <img src={Vector8} alt="Subtract" className="w-[10px] h-[10px] filter brightness-0" />
                            </button>
                            <span className="text-[14px] font-poppins font-normal">
                                {product.quantity}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            
            <div className="absolute bottom-[100px] left-0 right-0 p-4 border-t border-gray-300">
                <div className="flex justify-between">
                    <span className="text-[16px] font-poppins font-medium">Total</span>
                    <span className="text-[16px] font-poppins font-medium bg-[#B88E2F] text-white px-2 py-1 rounded">
                        Rs. {calculateSubtotal().toLocaleString()}
                    </span>
                </div>
            </div>

            
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between gap-2">
                <button
                    className="w-[87px] h-[30px] border border-black rounded-[50px] text-black text-[12px] font-poppins font-medium flex items-center justify-center"
                    onClick={onNavigateToCart}
                >
                    Cart
                </button>
                <button
                    className="w-[118px] h-[30px] bg-black text-white rounded-[50px] text-[12px] font-poppins font-medium flex items-center justify-center"
                    onClick={onClose}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default ShoppingCartModal;