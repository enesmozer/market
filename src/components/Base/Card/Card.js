import PropTypes from 'prop-types';
import './card.scss';

function Card({ title, children, className }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <span className="card-title">{title}</span>
      </div>
      <div className="card-form">{children}</div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
export default Card;
