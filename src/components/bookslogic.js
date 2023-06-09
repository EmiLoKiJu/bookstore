import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './addbook';
import BooksList from './bookslist';

const BooksLogic = () => {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'Book 1',
      category: 'Gabriel Rozas',
    },
    {
      id: uuidv4(),
      title: 'Book 2',
      category: 'Gabriel Rozas',
    },
    {
      id: uuidv4(),
      title: 'Book 3',
      category: 'Gabriel Rozas',
    },
  ]);

  const addBookFunc = (title, category) => {
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    setBooks([...books, newBook]);
  };

  const removeBook = (id) => {
    setBooks([...books.filter((book) => book.id !== id)]);
  };

  return (
    <>
      <BooksList books={books} removeBook={removeBook} />
      <AddBook addBookFunc={addBookFunc} />
    </>
  );
};

export default BooksLogic;
