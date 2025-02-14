import React from 'react';

interface Product {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  preco: string;
  precoSemDesconto: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="max-w-xs rounded-lg border border-gray-300 shadow-lg overflow-hidden">
      <img src={product.imageUrl} alt={product.titulo} className="w-full h-64 object-cover" />

      <div className="w-full bg-[#F4F5F7] p-4 space-y-2">
        <div className="font-poppins text-2xl font-semibold text-left text-[#3A3A3A]">
          {product.titulo}
        </div>
        <div className="font-poppins text-base font-medium text-left text-[#898989]">
          {product.subtitulo}
        </div>
        <div className="flex items-center">
          <div className="font-poppins text-xl font-semibold text-left text-[#3A3A3A]">
            {product.preco}
          </div>
          <span className="font-poppins text-sm font-normal text-left text-[#B0B0B0] line-through ml-2">
            {product.precoSemDesconto}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;


