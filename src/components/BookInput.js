import { useState } from 'react';
import PropTypes from 'prop-types';

export default function BookInput(props) {
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

BookInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
