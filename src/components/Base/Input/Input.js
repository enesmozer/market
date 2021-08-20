import PropTypes from 'prop-types';
import './input.scss';

function Input({
  label, type, value, name, id,
}) {
  return (
    <label htmlFor={id} className="base-input">
      {label}
      <input type={type} id={id} name={name} value={value} />
      <span className="checkmark" />
    </label>
  );
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
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
