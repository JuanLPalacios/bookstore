import { useSelector } from 'react-redux';
import Book from './components/Book';
import BookInput from './components/BookInput';

export default function Books() {
  const list = useSelector((state) => state.books);
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
