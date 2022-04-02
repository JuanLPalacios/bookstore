import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

export default createStore(combineReducers({ books, categories }), applyMiddleware(thunk));
