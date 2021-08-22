import PropTypes from 'prop-types';
import './basket.scss';
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';

function Basket({ cart, setCart }) {
  const getTotalSum = () => cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  return (
    <div className="basket">
      {cart.map((item) => (
        <div className="basketProduct">
          <div className="basketProduct-info">
            <div className="basketProduct-name">{item.name}</div>
            <div className="basketProduct-cost">
              {item.price}
              {' '}
            </div>
          </div>
          <div className="basketProduct-quantity">
            <img
              className="minus"
              src={minus}
              alt=""
            />
            <div className="basketProduct-quantity-number">{item.quantity}</div>
            <img
              className="plus"
              src={plus}
              alt=""
            />
          </div>
        </div>
      ))}

      <div className="divider" />
      <div className="total">
        ₺
        {getTotalSum()}
      </div>
    </div>
  );
}
Basket.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number,
      quantity: PropTypes.number,
    }),
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};
export default Basket;
