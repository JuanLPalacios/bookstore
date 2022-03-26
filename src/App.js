import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './Books';
import Categories from './Categories';
import NavBar from './NavBar';

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
