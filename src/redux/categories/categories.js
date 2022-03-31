const CHECK = 'bookstore/categories/CHECK';
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK: {
      return 'Under construction';
    }
    default:
      return state;
  }
}
export function checkCargory(categoryId) {
  return { type: CHECK, categoryId };
}
