import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./pagination.module.css"

interface PaginationProps {
  page: string;
  pageNumbersToShow: number;
  totalPages: number;
  setPage:React.Dispatch<React.SetStateAction<string>>;
}

export function Pagination({
  page,
  pageNumbersToShow,
  totalPages,
  setPage
}: PaginationProps) {
  const [_,setSearchParams] = useSearchParams();
  function handlePageChange(selectedPage: number) {
    setSearchParams(state => {
      state.set("page", selectedPage.toString( ))
      return state
    })
    setPage(String(selectedPage));
  }

  const pageNumbers = useMemo(() => {
    const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);
    let startPage = Math.max(1, Number(page) - halfPageNumbersToShow);
    const endPage = Math.min(totalPages, startPage + pageNumbersToShow - 1);
    
    if (endPage - startPage < pageNumbersToShow - 1) {
      startPage = Math.max(1, endPage - pageNumbersToShow + 1);
    }
    
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }, [page, totalPages]);

  return (
    <>
      {pageNumbers.map((pageNumber) => (
        <button 
          key={pageNumber} 
          onClick={() => handlePageChange(pageNumber)} 
          className={`${styles.button} ${Number(page) === pageNumber ? styles.active : ""}`}
        >
          {pageNumber}
        </button>
      ))}
    </>
  )
}