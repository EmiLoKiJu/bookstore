import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

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
      const newBook = {
        id: uuidv4(),
        title,
        category,
      };
      dispatch(addBook(newBook)); // Function called to create book
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

export default AddBook;
