import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <li className="dgrid4x1">
      <div className="title">
        {book.title}
      </div>
      <div className="author">
        {book.author}
      </div>
      <div className="category">
        {book.category}
      </div>
      <div>
        <button type="button" className="remove-button" onClick={() => dispatch(removeBookFromAPI(book.item_id))}>delete</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
