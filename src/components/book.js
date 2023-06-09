import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <li>
    <div>
      {book.title}
      &nbsp;&nbsp;&nbsp;
      {book.category}
    </div>
    <button type="button" onClick={() => removeBook(book.id)}>delete</button>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
