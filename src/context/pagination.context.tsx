import { createContext, ReactElement, useState } from 'react';

const paginationContextDefaultValue = {
  currentPage: 0,
  setCurrentPage: (page: number | ((current: number) => number)): any =>
    undefined,
  pages: 1,
  setPages: (pages: number): any => undefined,
};

export const PaginationContext = createContext(paginationContextDefaultValue);

export const PaginationProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);

  const value = { currentPage, setCurrentPage, pages, setPages };
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};
