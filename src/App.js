import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
