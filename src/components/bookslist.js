import PropTypes from 'prop-types';
import Book from './book';

const BooksList = ({ removeBook, books }) => (
  <ul>
    {books.map((book) => (
      <Book
        key={book.id}
        book={book}
        removeBook={removeBook}
      />
    ))}
  </ul>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BooksList;
