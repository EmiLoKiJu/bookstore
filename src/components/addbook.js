import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookToAPI } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState(''); // <span> message if empty book value given

  const categoriesSelection = ['Gabriel Rozas', 'Not Gabriel Rozas'];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim() && category) {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBookToAPI(newBook)); // Function called to create book
      setTitle(''); // Resets the form
      setMessage('');
      setCategory('');
    } else if (!category && !title.trim()) setMessage('Please add item and category.');
    else if (!title.trim()) setMessage('Please add item.');
    else setMessage('Please add category.');
  };

  return (
    <>
      <span className="spanline3 dflex" />
      <div className="Montserrat add-new-book-title grey">ADD NEW BOOK</div>
      <form onSubmit={handleSubmit} className="addBook">
        <input
          type="text"
          placeholder="Add Book"
          className="add-book-placeholder Montserrat grey"
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          className="add-author-placeholder Montserrat grey"
          placeholder="Add Author"
          value={author}
          onChange={handleAuthorChange}
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="category-placeholder Montserrat grey"
        >
          <option value="">Category</option>
          {categoriesSelection.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit" className="add-book-button">Add Book</button>
      </form>
      <span>{message}</span>
    </>
  );
};

export default AddBook;
