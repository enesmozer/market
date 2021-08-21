import Card from '../Base/Card/Card';
import Input from '../Base/Input/Input';
import './filterCard.scss';

function BrandsCard() {
  return (
    <Card title="Brands" className="filter">
      <Input type="text" label="Brands" />
      <Input
        label="Konopelski"
        type="checkbox"
        id="Konopelski"
        value="Konopelski"
      />
      <Input label="Adidas" type="checkbox" id="Adidas" value="Adidas" />
    </Card>
  );
}
export default BrandsCard;
