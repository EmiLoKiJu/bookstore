import { useSelector } from 'react-redux';
import Book from './book';

const BooksList = () => {
  const books = useSelector((store) => store.books.booksArr);
  const { isLoading } = useSelector((store) => store.books);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.item_id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
