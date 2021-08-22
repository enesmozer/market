import PropTypes from 'prop-types';
import './header.scss';
import Logo from '../../assets/Logo.svg';
import Basket from '../../assets/Basket.svg';

function Header({ cost }) {
  return (
    <header className="header">
      <img className="header-logo" src={Logo} alt="logo" />
      <div className="header-basket">
        <img src={Basket} alt="basket" className="header-basket-icon" />
        <span className="header-basket-cost">
          ₺
          {cost}
        </span>
      </div>
    </header>
  );
}
Header.propTypes = {
  cost: PropTypes.string.isRequired,
};
export default Header;
