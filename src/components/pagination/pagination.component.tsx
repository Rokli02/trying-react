import { useContext, useEffect, useState } from 'react';
import { PaginationContext } from '../../context/pagination.context';
import PaginationButton from './pagination-button/pagination-button.component';
import './pagination.styles.scss';

const makePageNumbers = (lowerPageNumber: number, upperPageNumber: number) => {
  let pages: number[] = [];

  for (let i = lowerPageNumber; i <= upperPageNumber; i++) {
    pages.push(i);
  }

  return pages;
};

const Pagination = (props: { pages: number; numberOfButtons: number }) => {
  const [borderPageNumbers, setBorderPageNumber] = useState({
    lowerPage: 1,
    upperPage: 0,
  });

  const { pages, numberOfButtons } = props;
  const { currentPage, setCurrentPage } = useContext(PaginationContext);

  const changePageNumber = (changeBy: number) => {
    setCurrentPage((current: number) => current + changeBy);
  };

  useEffect(() => {
    const lowerPage = Math.max(
      currentPage - Math.ceil((numberOfButtons - 1) / 2),
      1
    );
    const upperPage = Math.min(
      currentPage + Math.ceil((numberOfButtons - 1) / 2),
      pages
    );
    setBorderPageNumber({ lowerPage, upperPage });
  }, [currentPage, numberOfButtons, pages]);

  return (
    <div className='pagination'>
      {pages > 1 && currentPage !== 1 && (
        <div className='side-buttons'>
          <PaginationButton
            className='arrow-button '
            text={'<'}
            value={-1}
            onClickHandler={changePageNumber}
          />
        </div>
      )}
      {borderPageNumbers.lowerPage > 1 && (
        <div className='side-buttons'>...</div>
      )}
      <div className='main-buttons'>
        {makePageNumbers(
          borderPageNumbers.lowerPage,
          borderPageNumbers.upperPage
        ).map((value) => (
          <PaginationButton
            className={value === currentPage ? 'active' : ''}
            key={value}
            text={String(value)}
            value={value}
            onClickHandler={setCurrentPage}
          />
        ))}
      </div>
      {borderPageNumbers.upperPage < pages && (
        <div className='side-buttons'>...</div>
      )}
      {pages > 1 && currentPage !== pages && (
        <div className='side-buttons'>
          <PaginationButton
            className='arrow-button '
            text={'>'}
            value={1}
            onClickHandler={changePageNumber}
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;
