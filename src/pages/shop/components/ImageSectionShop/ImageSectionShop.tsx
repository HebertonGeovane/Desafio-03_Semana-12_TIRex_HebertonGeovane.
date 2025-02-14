import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../../components/card/card';
import PaginationButton from '../../../shop/components/PaginationButton/PaginationButton';


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

const ImageSectionShop: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]); // Aqui estamos dizendo ao TypeScript que 'products' será um array de 'Product'
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClickImage = (imageUrl: string) => {
    navigate('/about', { state: { image: imageUrl } });
  };

  return (
    <div className="px-16 mt-8">
      <div className="grid grid-cols-4 gap-4">
        {currentItems.map((product) => (
          <div key={product.id} className="cursor-pointer" onClick={() => handleClickImage(product.imageUrl)}>
            <Card product={product} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2 mb-8">
       
        <PaginationButton
          pageNumbers={[...Array(totalPages)].map((_, index) => index + 1)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ImageSectionShop;
