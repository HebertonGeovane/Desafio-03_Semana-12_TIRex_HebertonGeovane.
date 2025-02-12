import React from "react";
import Card from "../../components/card/card";
import usePagination from "../../hooks/usePagination";
import PaginationButton from "../../pages/shop/components/PaginationButton/PaginationButton"; // Importa os botões

const products = [
  {
    id: 1,
    imageUrl: "/assets/image 1.svg",
    titulo: "Syltherine",
    subtitulo: "Stylish cafe chair",
    preco: "Rp 2.500.000",
    tag: "-50%",
    precoSemDesconto: "Rp 5.000.000",
    description: "Stylish cafe chair",
    sku: "ksanj",
    category: "cafe",
  },
  {
    id: 2,
    imageUrl: "/assets/image2.svg",
    titulo: "Leviosa",
    subtitulo: "Stylish cafe chair",
    preco: "Rp 2.500.000",
    tag: "-50%",
    precoSemDesconto: "Rp 5.000.000",
    description: "Stylish cafe chair",
    sku: "ksanj",
    category: "cafe",
  },
  {
    id: 3,
    imageUrl: "/assets/image 3.svg",
    titulo: "Lolito",
    subtitulo: "Luxury big sofa",
    preco: "Rp 7.000.000",
    tag: "-10%",
    precoSemDesconto: "Rp 14.000.000",
    description: "Luxury big sofa",
    sku: "ksanj",
    category: "sofa",
  },
  {
    id: 4,
    imageUrl: "/assets/image 4.svg",
    titulo: "Respira",
    subtitulo: "Outdoor bar table and stool",
    preco: "Rp 500.000",
    tag: "-15%",
    precoSemDesconto: "Rp 600.000",
    description: "Outdoor bar table and stool",
    sku: "ksanj",
    category: "outdoor",
  },
  {
    id: 5,
    imageUrl: "/assets/Images5.svg",
    titulo: "Grifo",
    subtitulo: "Night lamp",
    preco: "Rp 1.500.000",
    tag: "-30%",
    precoSemDesconto: "Rp 2.100.000",
    description: "Night lamp",
    sku: "ksanj",
    category: "lamp",
  },
  {
    id: 6,
    imageUrl: "/assets/image 6.svg",
    titulo: "Muggo",
    subtitulo: "Small mug",
    preco: "Rp 150.000",
    tag: "-10%",
    precoSemDesconto: "Rp 170.000",
    description: "Small mug",
    sku: "ksanj",
    category: "kitchen",
  },
  {
    id: 7,
    imageUrl: "/assets/image 7.svg",
    titulo: "Pingky",
    subtitulo: "Cute bed set",
    preco: "Rp 7.000.000",
    tag: "-20%",
    precoSemDesconto: "Rp 14.000.000",
    description: "Cute bed set",
    sku: "ksanj",
    category: "bedroom",
  },
  {
    id: 8,
    imageUrl: "/assets/image 8.svg",
    titulo: "Potty",
    subtitulo: "Minimalist flower pot",
    preco: "Rp 500.000",
    tag: "-25%",
    precoSemDesconto: "Rp 667.000",
    description: "Minimalist flower pot",
    sku: "ksanj",
    category: "garden",
  },
  {
    id: 9,
    imageUrl: "/assets/Asgaard sofa 3.svg",
    titulo: "Asgaard sofa",
    subtitulo: "Luxurious sofa for your living room",
    preco: "Rs. 250,000.00",
    tag: "-5%",
    precoSemDesconto: "Rs. 263,000.00",
    description: "Luxurious sofa for your living room",
    sku: "ksanj",
    category: "living room",
  },
  {
    id: 10,
    imageUrl: "/assets/Group 146.svg",
    titulo: "Casaliving Wood",
    subtitulo: "Elegant wooden furniture",
    preco: "Rs. 270,000.00",
    tag: "-10%",
    precoSemDesconto: "Rs. 300,000.00",
    description: "Elegant wooden furniture",
    sku: "ksanj",
    category: "furniture",
  },
];

const ProductList: React.FC = () => {
  const { currentPage, totalPages, getCurrentItems, goToPage, nextPage } = usePagination(products, 4);

  return (
    <div className="flex flex-col items-center">
      {/* Grid de Produtos */}
      <div className="flex flex-wrap gap-4 justify-center">
        {getCurrentItems().map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {/* Botões de Paginação */}
      <div className="flex gap-4 mt-6">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`w-[60px] h-[60px] bg-[#F9F1E7] text-black text-[20px] font-[400] leading-[30px] flex items-center justify-center rounded-xl hover:bg-[#B88E2F] ${
              currentPage === index + 1 ? "bg-[#B88E2F] text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          className="w-[120px] h-[60px] bg-[#F9F1E7] text-black text-[20px] font-[300] leading-[30px] flex items-center justify-center rounded-xl hover:bg-[#B88E2F]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
