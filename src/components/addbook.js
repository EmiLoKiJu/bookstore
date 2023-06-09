import { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addBookFunc }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState(''); // <span> message if empty book value given

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addBookFunc(title); // Function called to create book
      setTitle(''); // Resets the form
      setMessage('');
    } else {
      setMessage('Please add item.'); // Empty book value
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Book"
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
      <span>{message}</span>
    </>
  );
}

AddBook.propTypes = {
  addBookFunc: PropTypes.func.isRequired,
};

export default AddBook;