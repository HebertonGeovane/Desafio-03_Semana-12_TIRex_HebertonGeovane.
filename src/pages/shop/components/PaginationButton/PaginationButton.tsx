import React from "react";

interface PaginationButtonProps {
  pageNumbers: number[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  pageNumbers,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="flex items-center gap-10 mt-6">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`w-[60px] h-[60px] text-black text-[20px] font-[400] leading-[30px] flex items-center justify-center rounded-xl hover:bg-[#B88E2F] ${
            currentPage === page ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="w-[120px] h-[60px] bg-[#F9F1E7] text-black text-[20px] font-[300] leading-[30px] flex items-center justify-center rounded-xl hover:bg-[#B88E2F]"
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButton;
