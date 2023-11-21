import React from 'react';

function BookList({ books }) {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>{book}</li>
      ))}
    </ul>
  );
}

export default BookList;


// import React from 'react';
// function BookList() {
//   const books = [
//     'Rich Dad Poor Dad',
//     'Think and Grow Rich',
//     'The Book of Enoch',
//   ];

//   return (
//     <ul>
//       {books.map((book, index) => (
//         <li key={index}>{book}</li>
//       ))}
//     </ul>
//   );
// }

// export default BookList;
