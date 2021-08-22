import PropTypes from 'prop-types';
import './input.scss';

function Input({
  label, type, value, name, id, setinputValue,
}) {
  const change = (e) => {
    setinputValue(e.currentTarget.value);
  };
  if (type === 'text') {
    return <input type="text" placeholder={label} />;
  }
  if (type === 'radio' || type === 'checkbox') {
    return (
      <label htmlFor={id} className="filter-input">
        <span className="label">{label}</span>
        <input type={type} id={id} name={name} value={value} onChange={change} />
        <span className="checkmark" />
      </label>
    );
  }
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setinputValue: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
Input.defaultProps = {
  value: '',
  name: '',
  id: '',
};
export default Input;
