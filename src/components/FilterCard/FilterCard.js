import PropTypes from 'prop-types';
import Card from '../Base/Card/Card';
import Input from '../Base/Input/Input';
import './filterCard.scss';

function BrandsCard({ data }) {
  const dataList = data.map((item) => (
    <Input
      key={item.account}
      label={item.name}
      type="checkbox"
      id={item.name}
      value={item.name}
    />
  ));
  return (
    <Card title="Brands" className="filter">
      <Input type="text" label="Brands" />
      <div className="list">{dataList}</div>
    </Card>
  );
}
BrandsCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BrandsCard;
