import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../Base/Card/Card';
import Input from '../Base/Input/Input';
import './filterCard.scss';

function BrandsCard({ data, filterCompanies, setFilterCompanies }) {
  const [company, setCompany] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  useEffect(() => {
    setFilteredCompanies(data);
  }, [data]);
  if (company) {
    if (!filterCompanies.some((item) => item === company)) {
      filterCompanies.push(company);
    }
    setFilterCompanies(filterCompanies);
  }
  useEffect(() => {
    setFilteredCompanies(
      data.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase())),
    );
  }, [searchInput]);
  const dataList = filteredCompanies.map((item) => (
    <Input
      key={item.account}
      label={item.name}
      type="checkbox"
      id={item.name}
      value={item.name}
      setinputValue={setCompany}
    />
  ));
  return (
    <Card title="Brands" className="filter">
      <Input type="text" label="Brands" setTextValue={setSearchInput} />
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
  setFilterCompanies: PropTypes.func.isRequired,
  filterCompanies: PropTypes.arrayOf(PropTypes.shape([])),
};
BrandsCard.defaultProps = {
  filterCompanies: [],
};
export default BrandsCard;
