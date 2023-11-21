
import './App.css';

import BookList from './BookList';

  function App() {
  const books = ['Book 1', 'Book 2', 'Book 3'];
  return (
    <div className="App">
      <header className="App-header">

        <div h1 > Favourite Books</div>
       <BookList books={books} />
                
      </header>
    </div>
  );
}

export default App;
