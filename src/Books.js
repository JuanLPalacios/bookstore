import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './components/Book';
import BookInput from './components/BookInput';
import { addBook, deleteBook, getBooks } from './redux/books/books';

const uid = () => Date.now();

export default function Books() {
  const list = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getBooks());
    },
    [],
  );
  return (
    <div className="Books">
      <ul>
        {list.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            onDelete={() => { dispatch(deleteBook(book.item_id)); }}
          />
        ))}
      </ul>
      <BookInput onCreate={(book) => { dispatch(addBook({ ...book, item_id: uid() })); }} />
    </div>
  );
}
