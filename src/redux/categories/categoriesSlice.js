import { createSlice } from '@reduxjs/toolkit';

const initialstateforthis = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialstateforthis,
  reducers: {
    checkStatus: () => 'under construction',
  },
});

export default categoriesSlice.reducer;
