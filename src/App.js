import './App.css';
//import BookList from './BookList';
import React, { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState('');

  const handleInputChange = (event) => {
    setNewBook(event.target.value);
  };

  const handleAddBook = () => {
    if (newBook.trim() !== '') {
      setBooks([...books, newBook]);
      setNewBook('');
    }
  };

  const handleRemoveBook = (bookToRemove) => {
    const updatedBooks = books.filter((book) => book !== bookToRemove);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h1>My Favourite Books</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new book title"
          value={newBook}
          onChange={handleInputChange}
        />
        <button onClick={handleAddBook}>Add</button>
      </div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => handleRemoveBook(book)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
