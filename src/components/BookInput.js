export default function BookInput(props) {
  // eslint-disable-next-line object-curly-newline, react/prop-types
  const { onCreate } = props;
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate();
  };
  return (
    <form className="BookInput" onSubmit={onSubmit}>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="author" placeholder="author" />
      <button type="submit">Create</button>
    </form>
  );
}
