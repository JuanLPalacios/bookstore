import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from './redux/configureStore';
import './App.css';
import Books from './Books';
import Categories from './Categories';
import NavBar from './NavBar';

function App() {
  return (
    <div className="panel-bg">
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
