import { combineReducers, createStore } from 'redux';
import books from './books/books';
import categories from './categories/categories';

export default createStore(combineReducers({
  books,
  categories,
}));
