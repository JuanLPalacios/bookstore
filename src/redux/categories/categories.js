export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export default (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      return {
        ...state,
        categories: action.error
          ? null
          : (state.categories || []).concat([action.payload.comment]),
      };
    }
    case DELETE_CATEGORY: {
      const { bookId } = action;
      return {
        ...state,
        categories: state.categories.filter((category) => category.id !== bookId),
      };
    }
    default:
      return state;
  }
};
