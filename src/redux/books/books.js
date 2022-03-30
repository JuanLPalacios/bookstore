export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export default (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return {
        ...state,
        books: action.error
          ? null
          : (state.books || []).concat([action.payload.comment]),
      };
    }
    case DELETE_BOOK: {
      const { bookId } = action;
      return {
        ...state,
        books: state.books.filter((book) => book.id !== bookId),
      };
    }
    default:
      return state;
  }
};
