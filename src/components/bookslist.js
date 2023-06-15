import { useSelector } from 'react-redux';
import Book from './book';

const BooksList = () => {
  const books = useSelector((store) => store.books.booksArr);
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
