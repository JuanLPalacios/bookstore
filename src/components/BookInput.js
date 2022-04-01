import { useState } from 'react';

export default function BookInput(props) {
  // eslint-disable-next-line object-curly-newline, react/prop-types
  const { onCreate } = props;
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(newBook);
  };
  const onChange = (e) => {
    newBook[e.target.name] = e.target.value;
    console.log(newBook);
    setNewBook(newBook);
  };
  return (
    <form className="BookInput" onSubmit={onSubmit}>
      <input type="text" name="title" placeholder="title" onChange={onChange} />
      <input type="text" name="author" placeholder="author" onChange={onChange} />
      <button type="submit">Create</button>
    </form>
  );
}
