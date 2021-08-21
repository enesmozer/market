import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies } from './redux/actions/index';
import Header from './components/Header/Header';
import SortingCard from './components/SortingCard/SortingCard';
import FilterCard from './components/FilterCard/FilterCard';
import ProductList from './components/ProductList/ProductList';
import Basket from './components/Basket/Basket';
import './styles/App.scss';

function App() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.companies);
  // const loading = useSelector((state) => state.companies.loading);
  // const error = useSelector((state) => state.companies.error);

  useEffect(() => {
    dispatch(getCompanies());
  }, []);
  return (
    <div className="App">
      <Header cost={70} />
      <div className="container">
        <div className="filters">
          <SortingCard />
          <FilterCard data={companies} />
          {/* <FilterCard data={companies} /> */}
        </div>
        <div className="products">
          <ProductList />
        </div>
        <div className="product-basket">
          <Basket />
        </div>
      </div>
    </div>
  );
}

export default App;
