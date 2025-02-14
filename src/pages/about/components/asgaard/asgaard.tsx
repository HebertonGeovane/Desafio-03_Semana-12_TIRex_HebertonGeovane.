import React, { useState, useEffect } from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../../components/cartcontext/cartcontext"; 


const AsgaardSection: React.FC = () => {
  const [product, setProduct] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const location = useLocation();
  const navigate = useNavigate(); 
  const { image } = location.state || {}; 

  
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        if (image) {
          const selectedProduct = data.find((item: any) => item.imageUrl === image);
          if (selectedProduct) {
            setProduct(selectedProduct);
            setMainImage(selectedProduct.imageUrl);
          }
        }
      })
      .catch((error) => console.error("Erro ao carregar os produtos:", error));
  }, [image]);

  if (!product) return <p>Loading product...</p>;

  
  const handleAddToCart = () => {
    if (!product) return;
  
    const productToAdd = {
      id: product.id,
      name: product.titulo || product.title,
      price: product.preco || product.price,
      img: product.imageUrl || product.image_url,
      quantity: quantity, 
      description: product.description,
    };
  
    console.log("Adicionando ao carrinho:", productToAdd);
    addToCart(productToAdd);
    navigate("/cart");
  };
  
  return (
    <div className="w-full h-[820px] bg-white flex items-center justify-center px-10">
      <div className="w-[1241px] h-[730px] flex">
        
        <div className="w-[76px] h-[416px] flex flex-col justify-between">
          
          {product.images && product.images.slice(0, 4).map((item: any) => (
            <div
              key={item.id}
              className="w-[76px] h-[80px] flex items-center justify-center bg-[#F9F1E7] rounded-xl cursor-pointer"
              onClick={() => setMainImage(item.imageUrl)}
            >
              <img src={item.imageUrl} alt={item.titulo} className="w-[60px] h-[60px] object-contain" />
            </div>
          ))}
        </div>

      

        
        <div className="w-[481px] h-[500px] flex items-center justify-center ml-[30px]">
          <div className="w-[423px] h-[500px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center">
            <img src={mainImage || product.imageUrl} alt={product.titulo} className="w-[423px] h-[500px] object-contain rounded-[10px]" />
          </div>
        </div>

        
        <div className="w-[606px] h-[730px] flex flex-col space-y-5">
          <h1 className="text-[42px] font-normal leading-[63px]">{product.titulo}</h1>
          <p className="text-[#9F9F9F] text-[24px] font-[500] leading-[36px]">{product.preco}</p>

          
          <div className="flex items-center space-x-2">
            <IoStar className="text-yellow-400 text-[20px]" />
            <IoStar className="text-yellow-400 text-[20px]" />
            <IoStar className="text-yellow-400 text-[20px]" />
            <IoStarHalf className="text-yellow-400 text-[20px]" />
            <div className="w-[30px] h-[1px] bg-gray-500 rotate-[-90deg]"></div>
            <p className="text-gray-500 text-[13px]">5 Customer Review</p>
          </div>

          
          <p className="text-gray-500 text-[13px] leading-[19.5px] w-[424px]">{product.description}</p>

          
          <div className="flex items-center space-x-4">
          
            <div className="w-[123px] h-[64px] border border-gray-500 rounded flex items-center justify-around text-[16px] font-medium">
              <button onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))} className="text-gray-500">-</button>
              <span className="text-gray-500">{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)} className="text-gray-500">+</button>
            </div>
            
            <button
              onClick={handleAddToCart} 
              className="w-[215px] h-[64px] border border-black rounded-lg text-[#000000] text-[20px]"
            >
              Add to Cart
            </button>
          </div>

          
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="space-y-2">
            <div className="flex text-[16px]">
              <p className="w-[75px] text-gray-500">SKU</p>
              <p className="w-[25px] text-gray-500">:</p>
              <p className="w-[44px] text-gray-500">{product.sku}</p>
            </div>
            <div className="flex text-[16px]">
              <p className="w-[75px] text-gray-500">Category</p>
              <p className="w-[25px] text-gray-500">:</p>
              <p className="w-[45px] text-gray-500">{product.category}</p>
            </div>
            <div className="flex text-[16px]">
              <p className="w-[75px] text-gray-500">Tags</p>
              <p className="w-[25px] text-gray-500">:</p>
              <p className="w-[45px] text-gray-500">{product.tag}</p>
            </div>
          </div>

          
          <div className="flex space-x-5 mt-5">
            <FaFacebook className="text-[#3B5998] text-[24px]" />
            <FaTwitter className="text-[#1DA1F2] text-[24px]" />
            <FaLinkedin className="text-[#0077B5] text-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsgaardSection;

