import PropTypes from 'prop-types';
import Book from './book';

const BooksList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <Book
        key={book.id}
        book={book}
      />
    ))}
  </ul>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BooksList;
