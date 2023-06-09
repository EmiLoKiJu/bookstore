import { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addBookFunc }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState(''); // <span> message if empty book value given

  const categoriesSelection = ['Gabriel Rozas', 'Not Gabriel Rozas'];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && category) {
      addBookFunc(title, category); // Function called to create book
      setTitle(''); // Resets the form
      setMessage('');
      setCategory('');
    } else if (!category && !title.trim()) setMessage('Please add item and category.');
    else if (!title.trim()) setMessage('Please add item.');
    else setMessage('Please add category.');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Book"
          value={title}
          onChange={handleChange}
        />
        <select
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Select Category</option>
          {categoriesSelection.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
      <span>{message}</span>
    </>
  );
};

AddBook.propTypes = {
  addBookFunc: PropTypes.func.isRequired,
};

export default AddBook;
