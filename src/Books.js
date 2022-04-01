import { useDispatch, useSelector } from 'react-redux';
import Book from './components/Book';
import BookInput from './components/BookInput';
import { addBook, deleteBook } from './redux/books/books';

let count = 3;
const uid = () => {
  count += 1;
  return `item${count}`;
};

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
            onDelete={() => { dispatch(deleteBook(book.item_id)); }}
          />
        ))}
      </ul>
      <BookInput onCreate={(book) => { dispatch(addBook({ ...book, item_id: uid() })); }} />
    </div>
  );
}
