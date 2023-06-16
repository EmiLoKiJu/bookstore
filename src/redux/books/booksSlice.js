import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = 'tnCQEzXadWo5jrBls8yQ';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios(`${url}${appId}/books`);
    const books = Object.entries(await response.data).map(([key, bookArr]) => {
      const book = bookArr[0];
      // const { author, title, category } = book;
      return { ...book, item_id: key };
    });
    return books;
  } catch (error) {
    return [{ title: 'not found', category: 'error 404', item_id: '404' }];
  }
});

export const addBookToAPI = createAsyncThunk('books/addBooksToAPI', async (book, thunkAPI) => {
  const headerSettings = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    await axios.post(
      `${url}${appId}/books`,
      book,
      headerSettings,
    );
    thunkAPI.dispatch(getBooks());
  } catch (error) {
    console.log('Error adding book:', error);
  }
});

export const removeBookFromAPI = createAsyncThunk('books/removeBookFromAPI', async (id, thunkAPI) => {
  try {
    await axios.delete(`${url}${appId}/books/${id}`);
    thunkAPI.dispatch(getBooks());
  } catch (error) {
    console.log('Error deleting book:', error);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState: { booksArr: [], isLoading: true },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksArr = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBookToAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBookToAPI.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addBookToAPI.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBookFromAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBookFromAPI.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBookFromAPI.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { removeBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
