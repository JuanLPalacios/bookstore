import { useState } from 'react';

export default function BookInput(props) {
  // eslint-disable-next-line object-curly-newline, react/prop-types
  const { onCreate } = props;
  const [newBook, setNewBook] = useState({ title: '', author: '', category: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(newBook);
    setNewBook({ title: '', author: '', category: '' });
  };
  const onChange = (e) => {
    const temp = { ...newBook };
    temp[e.target.name] = e.target.value;
    console.log(temp);
    setNewBook(temp);
  };
  const { author, title } = newBook;
  return (
    <form className="BookInput" onSubmit={onSubmit}>
      <input type="text" name="title" placeholder="title" onChange={onChange} value={title} />
      <input type="text" name="author" placeholder="author" onChange={onChange} value={author} />
      <button type="submit">Create</button>
    </form>
  );
}
