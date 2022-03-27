export default function Book(props) {
  // eslint-disable-next-line object-curly-newline, react/prop-types
  const { key, title, author, onDelete } = props;
  return (
    <li>
      <h4>{title}</h4>
      {author}
      <button type="button" onClick={() => onDelete(key)}>Delete</button>
    </li>
  );
}
