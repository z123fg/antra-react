import React, { useEffect, useState } from 'react';
import './MyPagination.scss';

interface MyPaginationProps {
  count: number;
  color?: 'primary' | 'secondary' | 'standard';
  shape?: 'circular' | 'rounded';
  disabled?: boolean;
}

const MyPagination: React.FC<MyPaginationProps> = ({
  count,
  color,
  shape,
  disabled = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const firstFiveItems = [1, 2, 3, 4, 5];
  const lastFiveItems = [count - 4, count - 3, count - 2, count - 1, count];
  const [firstNItems, setFirstNItems] = useState<number[]>([]);
  //const lastFiveItems = [count - 2, count - 1, count];
  const pagesBetweenCurrent = [currentPage - 1, currentPage, currentPage + 1];

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < count) {
      setCurrentPage(currentPage + 1);
    }
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

  useEffect(() => {
    setFirstNItems(generateArraySizeN(count));
  }, [count]);

  return (
    <div className={'pagination' + (disabled ? ' disabled' : '')}>
      <button
        className={'change-page-btn' + (disabled ? ' disabled' : '')}
        onClick={handlePrev}
      >{`<`}</button>
      <ul className="page-list">
        {count <= 6 &&
          firstNItems.map((index) => (
            <li
              className={
                'page-number ' +
                (shape ? `${shape} ` : '') +
                (color && !disabled && index === currentPage ? `${color}` : '')
              }
              key={index}
              onClick={() => handleUpdatePage(index)}
            >
              {index}
            </li>
          ))}
        {count > 6 && currentPage < 6 && (
          <>
            {firstFiveItems.map((index) => (
              <li
                className={
                  'page-number ' +
                  (shape ? `${shape} ` : '') +
                  (color && !disabled && index === currentPage
                    ? `${color}`
                    : '')
                }
                key={index}
                onClick={() => handleUpdatePage(index)}
              >
                {index}
              </li>
            ))}
            <li key="ellipsis-1">...</li>
            <li
              className={
                'page-number ' +
                (shape ? `${shape} ` : '') +
                (color && !disabled && count === currentPage ? `${color}` : '')
              }
              key={count}
              onClick={() => handleUpdatePage(count)}
            >
              {count}
            </li>
          </>
        )}
        {count > 6 && currentPage >= 6 && (
          <>
            <li
              className={
                'page-number ' +
                (shape ? `${shape} ` : '') +
                (color && !disabled && 1 === currentPage ? `${color}` : '')
              }
              key={1}
              onClick={() => handleUpdatePage(1)}
            >
              1
            </li>
            <li key="ellipsis-2">...</li>
            {currentPage !== count &&
              currentPage <= count - 4 &&
              pagesBetweenCurrent.map((index) => (
                <li
                  className={
                    'page-number ' +
                    (shape ? `${shape} ` : '') +
                    (color && !disabled && index === currentPage
                      ? `${color}`
                      : '')
                  }
                  key={index}
                  onClick={() => handleUpdatePage(index)}
                >
                  {index}
                </li>
              ))}
            {currentPage <= count - 4 && <li key="ellipsis">...</li>}
            {currentPage > count - 4 ? (
              lastFiveItems.map((index) => (
                <li
                  className={
                    'page-number ' +
                    (shape ? `${shape} ` : '') +
                    (color && !disabled && index === currentPage
                      ? `${color}`
                      : '')
                  }
                  key={index}
                  onClick={() => handleUpdatePage(index)}
                >
                  {index}
                </li>
              ))
            ) : (
              <li
                className={
                  'page-number ' +
                  (shape ? `${shape} ` : '') +
                  (color && !disabled && count === currentPage
                    ? `${color}`
                    : '')
                }
                key={count}
                onClick={() => handleUpdatePage(count)}
              >
                {count}
              </li>
            )}
          </>
        )}
      </ul>
      <button
        className={'change-page-btn' + (disabled ? ' disabled' : '')}
        onClick={handleNext}
      >{`>`}</button>
    </div>
  );
};

export default MyPagination;
