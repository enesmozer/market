import Header from './components/Header/Header';
import SortingCard from './components/SortingCard/SortingCard';
import FilterCard from './components/FilterCard/FilterCard';
import ProductList from './components/ProductList/ProductList';
import Basket from './components/Basket/Basket';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header cost={70} />
      <div className="container">
        <div className="filters">
          <SortingCard />
          <FilterCard />
          <FilterCard />
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
