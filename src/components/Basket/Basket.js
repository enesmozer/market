// import PropTypes from 'prop-types';
import './basket.scss';
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';

function Basket() {
  return (
    <div className="basket">
      <div className="basketProduct">
        <div className="basketProduct-info">
          <div className="basketProduct-name">Example Product</div>
          <div className="basketProduct-cost"> 15 #</div>
        </div>
        <div className="basketProduct-quantity">
          <img className="minus" src={minus} alt="" />
          <div className="basketProduct-quantity-number">2</div>
          <img className="plus" src={plus} alt="" />
        </div>
      </div>
      <div className="divider" />
      <div className="total">15</div>
    </div>
  );
}
Basket.propTypes = {};
export default Basket;
