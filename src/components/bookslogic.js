import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './addbook';
import BooksList from './bookslist';

const BooksLogic = () => {
  const [books, setBooks] = useState([
    {
      title: 'romeo y julieta',
      category: 'william shakespire',
      id: uuidv4(),
    },
    {
      title: 'la bella y la bestia',
      category: 'el mismisimo',
      id: uuidv4(),
    },
  ]);

  return (
    <>
      <BooksList books={books} />
      <AddBook setBooks={setBooks} />
    </>
  );
};

export default BooksLogic;
