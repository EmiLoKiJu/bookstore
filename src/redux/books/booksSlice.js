import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialstateforthis = [
  {
    title: 'Random title',
    category: 'Random Category',
    id: uuidv4(),
  },
  {
    title: 'Insert creative title',
    category: 'Not creative category',
    id: uuidv4(),
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: initialstateforthis,
  reducers: {
    addBook: (state, { payload }) => {
      state.push(payload);
    },
    removeBook: (state, { payload }) => {
      const index = state.findIndex((book) => book.id === payload);
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export const { removeBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
