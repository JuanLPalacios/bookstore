const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const defaultBooks = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Logicomix',
    author: 'Apostolos Doxiadis, Christos Papadimitriou',
    category: 'Non-fiction',
  },
];
export default function reducer(state = defaultBooks, action = {}) {
  switch (action.type) {
    case ADD: {
      return [...state, action.book];
    }
    case REMOVE: {
      const { bookId } = action;
      return state.filter((book) => book.item_id !== bookId);
    }
    default:
      return state;
  }
}

export function addBook(book) {
  return { type: ADD, book };
}

export function deleteBook(bookId) {
  return { type: REMOVE, bookId };
}
