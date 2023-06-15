import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <li className="dgrid3x1">
      <div className="title">
        {book.title}
      </div>
      <div className="category">
        {book.category}
      </div>
      <div>
        <button type="button" className="remove-button" onClick={() => dispatch(removeBook(book.id))}>delete</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
