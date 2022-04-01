import { useDispatch, useSelector } from 'react-redux';
import Book from './components/Book';
import BookInput from './components/BookInput';
import { deleteBook } from './redux/books/books';

export default function Books() {
  const list = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div className="Books">
      <ul>
        {list.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            onDelete={() => dispatch(deleteBook(book.item_id))}
          />
        ))}
      </ul>
      <BookInput />
    </div>
  );
}
