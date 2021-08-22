import PropTypes from 'prop-types';
import './basket.scss';
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';

function Basket({ cart, setCart }) {
  const getTotalSum = () => cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  const increaseQunatity = (product) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity += 1;
    setCart(newCart);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const decraseQunatity = (product) => {
    const newCart = [...cart];
    const currentProduct = newCart.find((item) => item.name === product.name);
    currentProduct.quantity -= 1;
    if (currentProduct.quantity === 0) {
      removeFromCart(currentProduct);
    } else {
      setCart(newCart);
    }
  };
  const divider = cart.length > 0 ? <hr className="divider" /> : '';
  return (
    <div className="basket">
      <div className="cart">
        {cart.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="basketProduct">
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
                onClick={() => decraseQunatity(item)}
                aria-hidden="true"
              />
              <div className="basketProduct-quantity-number">
                {item.quantity}
              </div>
              <img
                className="plus"
                src={plus}
                alt=""
                onClick={() => increaseQunatity(item)}
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
        {divider}
      </div>
      <div className="total">
        ₺
        {getTotalSum().toFixed(2)}
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
