import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import Book from './pages/Book';
import Author from './pages/Author';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>BookVault library</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/authors">Authors</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/author/:id" element={<Author />} />
      </Routes>
    </div>
  );
}

export default App;
