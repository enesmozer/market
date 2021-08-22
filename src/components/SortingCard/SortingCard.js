// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../Base/Card/Card';
import Input from '../Base/Input/Input';
import './sortingCard.scss';

function SortingCard({ sortType, setSortType }) {
  if (sortType) {
    setSortType(sortType);
  }
  return (
    <Card title="Sorting" className="sort">
      <Input
        label="Price low to high"
        type="radio"
        id="low"
        name="sort"
        value="lowToHigh"
        setinputValue={setSortType}
      />
      <Input
        label="Price high to low"
        type="radio"
        id="high"
        name="sort"
        value="highToLow"
        setinputValue={setSortType}
      />
      <Input
        label="New to old"
        type="radio"
        id="new"
        name="sort"
        value="newToOld"
        setinputValue={setSortType}
      />
      <Input
        label="Old to new"
        type="radio"
        id="old"
        name="sort"
        value="oldToNew"
        setinputValue={setSortType}
      />
    </Card>
  );
}
SortingCard.propTypes = {
  setSortType: PropTypes.func.isRequired,
  sortType: PropTypes.string,
};
SortingCard.defaultProps = {
  sortType: '',
};
export default SortingCard;
