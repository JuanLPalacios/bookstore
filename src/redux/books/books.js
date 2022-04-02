const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const LIST = 'bookstore/books/LIST';
const LIST_SUCCESS = 'bookstore/books/LIST_SUCCESS';
const LIST_FAILURE = 'bookstore/books/LIST_FAILURE';
const API_KEY = 'Pg52wIh3iTKNzPQwo3K4';
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
    case LIST: {
      return [];
    }
    case LIST_SUCCESS: {
      return [...action.list];
    }
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

export const addBook = (book) => (dispatch) => fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`,
  {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  }).then(
  () => dispatch({ type: ADD, book }),
);

export const deleteBook = (bookId) => (dispatch) => fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books/${bookId}`,
  {
    method: 'DELETE',
  }).then(
  () => dispatch({ type: REMOVE, bookId }),
);

export const getBooks = () => (dispatch) => {
  dispatch({ type: LIST });
  return fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`).then(
    (request) => request.json().then((map) => dispatch({
      type: LIST_SUCCESS,
      list: Object.keys(map)
      // eslint-disable-next-line camelcase
        .map((item_id) => map[item_id].map((book) => ({ ...book, item_id }))).flat(),
    })),
    (err) => dispatch({ type: LIST_FAILURE, err }),
  );
};
