import './App.css';
//import BookList from './BookList';
import React, { useState } from 'react';
//import AddBookForm from './AddBookForm';

// import React, { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [newBookTitle, setNewBookTitle] = useState('');

  // Event handler for submitting a new book title
  const handleAddBook = () => {
    if (newBookTitle.trim() !== '') {
      // Update the state to include the new book title
      setBooks([...books, newBookTitle]);
      // Clear the input field
      setNewBookTitle('');
    }
  };

  return (
    <div>
      <h1>My Favourite Books</h1>
      <input
        type="text"
        value={newBookTitle}
        onChange={(e) => setNewBookTitle(e.target.value)}
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
