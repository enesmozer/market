/* eslint-disable no-debugger */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../Base/Product/Product';
import Pagination from '../Pagination/Pagination';
import './productList.scss';

function ProductList({ list }) {
  const [PageSize] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const [currentProducts, setcurrentProducts] = useState([]);
  useEffect(() => {
    setcurrentProducts(list.slice(firstPageIndex, lastPageIndex));
  }, [list]);

  const filter = (e, key) => {
    document.querySelectorAll('.button').forEach((item) => {
      item.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    const items = list.filter((item) => item.itemType === key);
    setcurrentProducts(items);
  };

  return (
    <main className="productList">
      <div className="productList-header">
        <div className="productList-title"> Products</div>
        <div className="productList-buttons">
          <button
            className="button"
            type="button"
            onClick={(e) => filter(e, 'mug')}
          >
            mug
          </button>
          <button
            className="button"
            type="button"
            onClick={(e) => filter(e, 'shirt')}
          >
            shirt
          </button>
        </div>
      </div>
      <div className="productList-main">
        {currentProducts.map((product) => (
          <Product
            key={product.added}
            name={product.name}
            cost={product.price}
          />
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={list.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </main>
  );
}
ProductList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cost: PropTypes.number,
    }),
  ).isRequired,
};
export default ProductList;
