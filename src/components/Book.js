import PropTypes from 'prop-types';

export default function Book(props) {
  const {
    key, title, author, onDelete,
  } = props;
  return (
    <li>
      <h4>{title}</h4>
      {author}
      <button type="button" onClick={() => onDelete(key)}>Delete</button>
    </li>
  );
}

Book.propTypes = {
  key: PropTypes.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
