import React, { useState } from 'react'; // Importando o useState
import { useNavigate } from 'react-router-dom';
import Image1 from '../../../../assets/image 1.svg';
import Image2 from '../../../../assets/image2.svg';
import Image3 from '../../../../assets/image 3.svg';
import Image4 from '../../../../assets/image 4.svg';
import Label from '../../../../assets/Label.svg';
import Discount from '../../../../assets/Discount.svg';
import Label1 from '../../../../assets/Label1.svg';
import PaginationButton from '../../../shop/components/PaginationButton/PaginationButton';
//import FilterButton from '../../../shop/components/FilterButton/FilterButton';



const products = [
  { id: 1, name: 'Syltherine', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', img: Image1, label: Label },
  { id: 2, name: 'Leviosa', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', img: Image2 },
  { id: 3, name: 'Lolito', desc: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', img: Image3, label: Discount },
  { id: 4, name: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500.000', img: Image4, label: Label1 },
  // Adicione mais produtos conforme necessário
  { id: 5, name: 'Grifo', desc: 'Office Chair', price: 'Rp 1.200.000', oldPrice: 'Rp 2.000.000', img: Image1 },
  { id: 6, name: 'Ergono', desc: 'Modern Ergonomic Chair', price: 'Rp 3.000.000', img: Image2 },
  { id: 7, name: 'Balkon', desc: 'Elegant Balcony Chair', price: 'Rp 1.800.000', img: Image3, label: Discount },
  { id: 8, name: 'Luxure', desc: 'Luxury Recliner Sofa', price: 'Rp 10.000.000', oldPrice: 'Rp 15.000.000', img: Image4 },
  // Adicione mais produtos aqui para totalizar 16 ou mais
  { id: 9,  name: 'Syltherine', desc:  'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', img: Image1, label: Label},
  { id: 10, name: 'Leviosa', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', img: Image2  },
  { id: 11, name: 'Lolito', desc: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', img: Image3, label: Discount },
  { id: 12, name: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500.000', img: Image4, label: Label1  },
  { id: 13, name: 'Grifo', desc: 'Office Chair', price: 'Rp 1.200.000', oldPrice: 'Rp 2.000.000', img: Image1 },
  { id: 14, name: 'Ergono', desc: 'Modern Ergonomic Chair', price: 'Rp 3.000.000', img: Image2  },
  { id: 15, name: 'Balkon', desc: 'Elegant Balcony Chair', price: 'Rp 1.800.000', img: Image3, label: Discount },
  { id: 16, name: 'Luxure', desc: 'Luxury Recliner Sofa', price: 'Rp 10.000.000', oldPrice: 'Rp 15.000.000', img: Image4 },
  // Adicione mais produtos aqui para totalizar 16 ou mais
  { id: 1, name: 'Grifo', desc: 'Office Chair', price: 'Rp 1.200.000', oldPrice: 'Rp 2.000.000', img: Image1 },
  { id: 2, name: 'Luxure', desc: 'Luxury Recliner Sofa', price: 'Rp 10.000.000', oldPrice: 'Rp 15.000.000', img: Image4 },
  { id: 3, name: 'Lolito', desc: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', img: Image3, label: Discount},
  { id: 4, name: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500.000', img: Image4, label: Label1  },
  { id: 5, name: 'Grifo', desc: 'Office Chair', price: 'Rp 1.200.000', oldPrice: 'Rp 2.000.000', img: Image1},
  { id: 6, name: 'Ergono', desc: 'Modern Ergonomic Chair', price: 'Rp 3.000.000', img: Image2   },
  { id: 7, name: 'Balkon', desc: 'Elegant Balcony Chair', price: 'Rp 1.800.000', img: Image3, label: Discount  },
  { id: 8, name: 'Luxure', desc: 'Luxury Recliner Sofa', price: 'Rp 10.000.000', oldPrice: 'Rp 15.000.000', img: Image4 },
  // Adicione mais produtos aqui para totalizar 16 ou mais
  { id: 9,  name: 'Syltherine', desc:  'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', img: Image1, label: Label},
  { id: 10, name: 'Luxure', desc: 'Luxury Recliner Sofa', price: 'Rp 10.000.000', oldPrice: 'Rp 15.000.000', img: Image4  },
  { id: 11, name: 'Lolito', desc: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', img: Image3, label: Discount },
  { id: 12, name: 'Grifo', desc: 'Office Chair', price: 'Rp 1.200.000', oldPrice: 'Rp 2.000.000', img: Image1},
  { id: 13, name: 'Balkon', desc: 'Elegant Balcony Chair', price: 'Rp 1.800.000', img: Image3, label: Discount},
  { id: 14, name: 'Ergono', desc: 'Modern Ergonomic Chair', price: 'Rp 3.000.000', img: Image2  },
  { id: 15, name: 'Syltherine', desc:  'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', img: Image1, label: Label },
  { id: 16, name: 'Luxure', desc: 'Luxury Recliner Sofa', price: 'Rp 10.000.000', oldPrice: 'Rp 15.000.000', img: Image4 },
  // Adicione mais produtos aqui para totalizar 16 ou mais
  { id: 1, name: 'Syltherine', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', img: Image1, label: Label},
  { id: 2, name: 'Leviosa', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', img: Image2 },
  { id: 3, name: 'Lolito', desc: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', img: Image3, label: Discount},
  { id: 4, name: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500.000', img: Image4, label: Label1  },
  { id: 5, name: 'Grifo', desc: 'Office Chair', price: 'Rp 1.200.000', oldPrice: 'Rp 2.000.000', img: Image1},
  { id: 6, name: 'Ergono', desc: 'Modern Ergonomic Chair', price: 'Rp 3.000.000', img: Image2   },
  { id: 7, name: 'Balkon', desc: 'Elegant Balcony Chair', price: 'Rp 1.800.000', img: Image3, label: Discount  },
  { id: 8, name: 'Luxure', desc: 'Luxury Recliner Sofa', price: 'Rp 10.000.000', oldPrice: 'Rp 15.000.000', img: Image4 },
  // Adicione mais produtos aqui para totalizar 16 ou mais
  { id: 9,  name: 'Syltherine', desc:  'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', img: Image1, label: Label},
  { id: 10, name: 'Leviosa', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', img: Image2  },
  { id: 11, name: 'Lolito', desc: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', img: Image3, label: Discount },
  { id: 12, name: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500.000', img: Image4, label: Label1  },
  { id: 13, name: 'Grifo', desc: 'Office Chair', price: 'Rp 1.200.000', oldPrice: 'Rp 2.000.000', img: Image1 },
  { id: 14, name: 'Ergono', desc: 'Modern Ergonomic Chair', price: 'Rp 3.000.000', img: Image2  },
  { id: 15, name: 'Balkon', desc: 'Elegant Balcony Chair', price: 'Rp 1.800.000', img: Image3, label: Discount },
  { id: 16, name: 'Luxure', desc: 'Luxury Recliner Sofa', price: 'Rp 10.000.000', oldPrice: 'Rp 15.000.000', img: Image4 },
];

const ImageSectionShop: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 16;

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClick = (product: any) => {
    navigate(`/about`, { state: { product } }); // Passa o produto para a página About
  };

  return (
    <div className="px-16 mt-8">
      <div className="grid grid-cols-4 gap-4">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer"
            onClick={() => handleClick(product)} // Redireciona ao clicar no produto
          >
            <img src={product.img} alt={product.name} className="w-full" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.desc}</p>
            <p className="text-black font-bold">{product.price}</p>
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