/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../hooks/usePagination';
import left from '../../assets/arrow-left.svg';
import right from '../../assets/arrow-right.svg';
import './pagination.scss';

function Pagination({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  className,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        onClick={onPrevious}
        aria-hidden="true"
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
      >
        <img src={left} className="arrow left" alt="arrow" />
        <span className="arrow-name">Prev</span>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            onClick={() => onPageChange(pageNumber)}
            aria-hidden="true"
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        onClick={onNext}
        aria-hidden="true"
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
      >
        <span className="arrow-name">Next</span>
        <img src={right} className="arrow right" alt="arrow" />
      </li>
    </ul>
  );
}
Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
Pagination.defaultProps = {
  siblingCount: 1,
};
export default Pagination;
