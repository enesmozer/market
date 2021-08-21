import './styles/App.scss';
import Header from './components/Header/Header';
import SortingCard from './components/SortingCard/SortingCard';
import FilterCard from './components/FilterCard/FilterCard';

function App() {
  return (
    <div className="App">
      <Header cost={70} />
      <SortingCard />
      <FilterCard />
      <FilterCard />
    </div>
  );
}

export default App;
