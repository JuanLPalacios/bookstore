const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD: {
      return (state || []).concat([action.book]);
    }
    case REMOVE: {
      const { bookId } = action;
      return state.filter((book) => book.id !== bookId);
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
