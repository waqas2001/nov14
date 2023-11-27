import React, { useState } from 'react';


function AddBookForm() {
    const [newBook, setNewBook] = useState('');
  
    const handleInputChange = (e) => {
      setNewBook(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add the new book to the list of books in the App component's state.
      // Clear the input field.
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new book"
          value={newBook}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
  
  export default AddBookForm;
  