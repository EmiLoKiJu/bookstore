import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/books/booksSlice';
import progressCircle from '../img/progressCircle.png';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <li className="element-container Montserrat dflex spacebetween">
      <div className="dgrid1x4">
        <div className="category Montserrat grey">
          {book.category}
        </div>
        <div className="title Roboto-Slab almost-black">
          {book.title}
        </div>
        <div className="author Roboto-Slab weird-blue">
          {book.author}
        </div>
        <div className="dflex">
          <button type="button" className="book-button weird-blue Roboto-Slab">Comments</button>
          <span className="vertical-spanline dflex" />
          <button type="button" className="book-button weird-blue Roboto-Slab" onClick={() => dispatch(removeBookFromAPI(book.item_id))}>Delete</button>
          <span className="vertical-spanline dflex" />
          <button type="button" className="book-button weird-blue Roboto-Slab">Edit</button>
        </div>
      </div>
      <div className="dflex progress-container">
        <div className="percent-completed dflex">
          <img src={progressCircle} alt="graph" className="progress-circle" />
          <div>
            <div className="Montserrat percent-number">0%</div>
            <div className="Montserrat completed grey">Completed</div>
          </div>
        </div>
        <span className="vertical-spanline-2 dflex" />
        <div className="progress-chapter">
          <div className="current-chapter Roboto-Slab grey">Current Chapter</div>
          <div className="chapter Roboto-Slab almost-black">Chapter 0</div>
          <button type="button" className="progress-button Roboto-Slab">Update progress</button>
        </div>
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
