import PropTypes from 'prop-types';
import './header.scss';
import Logo from '../../assets/Logo.svg';
import Basket from '../../assets/Basket.svg';

function Header({ cost }) {
  return (
    <header className="header">
      <img className="header-logo" src={Logo} alt="logo" />
      <div className="header-basket">
        <img src={Basket} alt="basket" />
        <span className="header-cost">
          ₺
          {cost}
        </span>
      </div>
    </header>
  );
}
Header.propTypes = {
  cost: PropTypes.number.isRequired,
};
export default Header;
