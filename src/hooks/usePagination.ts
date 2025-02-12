import { useMemo } from 'react';

// Função para gerar um array de números em um intervalo
const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => start + index);
};

// Constantes para os pontos de quebra na paginação
const DOTS = '...';

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}) => {
  const paginationRange = useMemo(() => {
    // Número total de páginas
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Número de páginas a serem exibidas (siblings + primeira página + última página + página atual + DOTS)
    const totalPageNumbers = siblingCount + 5;

    /*
      Caso 1:
      Se o número total de páginas for menor que o número de páginas a serem exibidas,
      retornamos o intervalo [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // Calcular os índices dos siblings à esquerda e à direita
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    /*
      Não mostramos os pontos de quebra (DOTS) quando há apenas uma página entre os extremos e os siblings
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
      Caso 2:
      Não há pontos de quebra à esquerda, mas há à direita
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
      Caso 3:
      Não há pontos de quebra à direita, mas há à esquerda
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
      Caso 4:
      Há pontos de quebra em ambos os lados
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    // Caso padrão (não deve acontecer)
    return [];
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};