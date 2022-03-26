import { useState } from 'react';
import Book from './components/Book';
import BookInput from './components/BookInput';

export default function Books() {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([]);
  return (
    <div className="Books">
      <ul>
        {list.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <BookInput />
    </div>
  );
}
