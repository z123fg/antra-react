import React, { useEffect, useState } from 'react';
import './Pagination.scss';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const firstFiveItems = [1, 2, 3, 4, 5];
  const [firstNItems, setFirstNItems] = useState<number[]>([]);
  //const lastFiveItems = [totalPages - 2, totalPages - 1, totalPages];
  const pagesBetweenCurrent = [currentPage - 1, currentPage, currentPage + 1];

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleUpdatePage = (index: number) => {
    setCurrentPage(index);
  };

  const generateArraySizeN: (n: number) => number[] = (n: number) => {
    let array: number[] = [];
    for (let i = 0; i < n; i++) {
      array.push(i + 1);
    }
    return array;
  };

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className={'pagination'}>
      <button onClick={handlePrev}>prev</button>
      <ul className="page-list">
        {totalPages <= 6 &&
          firstNItems.map((index) => (
            <li
              className="page-number"
              key={index}
              onClick={() => handleUpdatePage(index)}
            >
              {index}
            </li>
          ))}
        {totalPages > 6 && currentPage < 6 && (
          <>
            {firstFiveItems.map((index) => (
              <li
                className="page-number"
                key={index}
                onClick={() => handleUpdatePage(index)}
              >
                {index}
              </li>
            ))}
            <li key="ellipsis-1">...</li>
            <li
              className="page-number"
              key={totalPages}
              onClick={() => handleUpdatePage(totalPages)}
            >
              {totalPages}
            </li>
          </>
        )}
        {totalPages > 6 && currentPage >= 6 && (
          <>
            <li
              className="page-number"
              key={1}
              onClick={() => handleUpdatePage(1)}
            >
              1
            </li>
            <li key="ellipsis-2">...</li>
            {pagesBetweenCurrent.map((index) => (
              <li
                className="page-number"
                key={index}
                onClick={() => handleUpdatePage(index)}
              >
                {index}
              </li>
            ))}
            {currentPage < totalPages - 2 && <li key="ellipsis">...</li>}
            <li
              className="page-number"
              key={totalPages}
              onClick={() => handleUpdatePage(totalPages)}
            >
              {totalPages}
            </li>
          </>
        )}
      </ul>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default Pagination;
