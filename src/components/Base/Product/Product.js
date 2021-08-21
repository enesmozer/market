import PropTypes from 'prop-types';
import './product.scss';

function Product({ name, cost }) {
  return (
    <div className="product">
      <div className="product-image-container">
        <img src="https://picsum.photos/200" className="product-image" alt="" />
      </div>
      <div className="product-cost">
        ₺
        {cost}
      </div>
      <div className="product-title">{name}</div>
      <button className="addButton" type="button">
        Add
      </button>
    </div>
  );
}
Product.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};
export default Product;
