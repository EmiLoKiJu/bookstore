import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

const initialstateforthis = [];

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
