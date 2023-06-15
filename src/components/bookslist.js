import { useSelector } from 'react-redux';
// import store from '../redux/store';
import Book from './book';

const BooksList = () => {
  const books = useSelector((store) => store.books);
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
