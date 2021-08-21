/* eslint-disable max-len */
import PropTypes from 'prop-types';
import Product from '../Base/Product/Product';
import './productList.scss';

function ProductList({ list }) {
  const products = list.map((product) => <Product key={product.added} name={product.name} cost={product.price} />);
  return (
    <main className="productList">
      <div className="productList-header">
        <div className="productList-title"> Products</div>
        <div className="productList-buttons">
          <button className="button" type="button">
            mug
          </button>
          <button className="button active" type="button">
            shirt
          </button>
        </div>
      </div>
      <div className="productList-main">{products}</div>
    </main>
  );
}
ProductList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default ProductList;
