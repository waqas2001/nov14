import './App.css';
//import BookList from './BookList';
import React, { useState } from 'react';
//import AddBookForm from './AddBookForm';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState('');

  const handleInputChange = (e) => {
    setNewBook(e.target.value);
  };

  const handleAddBook = () => {
    if (newBook.trim() !== '') {
      setBooks([...books, newBook]);
      setNewBook('');
    }
  };

  return (
    <div>
      <h1>My Favourite books</h1>
      <input
        type="text"
        placeholder="Enter a new book title"
        value={newBook}
        onChange={handleInputChange}
      />
      <button onClick={handleAddBook}>Add</button>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


