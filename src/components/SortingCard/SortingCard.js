import Card from '../Base/Card/Card';
import Input from '../Base/Input/Input';
import './sortingCard.scss';

function SortingCard() {
  return (
    <Card title="Sorting" className="sort">
      <Input
        label="Price low to high"
        type="radio"
        id="low"
        name="sort"
        value="lowToHigh"
      />
      <Input
        label="Price high to low"
        type="radio"
        id="high"
        name="sort"
        value="highToLow"
      />
      <Input
        label="New to old"
        type="radio"
        id="new"
        name="sort"
        value="newToOld"
      />
      <Input
        label="Old to new"
        type="radio"
        id="old"
        name="sort"
        value="oldToNew"
      />
    </Card>
  );
}
export default SortingCard;
