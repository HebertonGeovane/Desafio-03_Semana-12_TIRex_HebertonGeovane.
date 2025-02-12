import React from 'react';

interface Product {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  preco: string;
  tag: string;
  precoSemDesconto: string;
  description: string;
  sku: string;
  category: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="card max-w-xs rounded-lg border border-gray-300 shadow-lg overflow-hidden">
      <img 
        src={product.imageUrl} 
        alt={product.titulo} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{product.titulo}</h2>
        <p className="text-sm text-gray-600">{product.subtitulo}</p>
        <p className="text-lg font-bold text-gray-800 mt-2">{product.preco}</p>
        <p className="text-xs text-gray-500 line-through mt-1">{product.precoSemDesconto}</p>
        <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{product.tag}</span>
      </div>
    </div>
  );
};

export default Card;

