import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies, getProducts } from './redux/actions/index';
import Header from './components/Header/Header';
import SortingCard from './components/SortingCard/SortingCard';
import FilterCard from './components/FilterCard/FilterCard';
import ProductList from './components/ProductList/ProductList';
import Basket from './components/Basket/Basket';
import './styles/App.scss';

function App() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.companies);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getCompanies());
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const [cart, setCart] = useState([]);
  const [sortType, setSortType] = useState('');
  const [filterCompanies, setfilterCompanies] = useState([]);
  const getTotalSum = () => cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  return (
    <div className="App">
      <Header cost={getTotalSum().toFixed(2)} />
      <div className="container">
        <div className="filters">
          <SortingCard sortType={sortType} setSortType={setSortType} />
          <FilterCard data={companies} setSortType={setfilterCompanies} />
          {/* <FilterCard data={companies} /> */}
        </div>
        <div className="products">
          <ProductList
            list={products}
            cart={cart}
            setCart={setCart}
            sortType={sortType}
            filterCompanies={filterCompanies}
          />
        </div>
        <div className="product-basket">
          <Basket cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
