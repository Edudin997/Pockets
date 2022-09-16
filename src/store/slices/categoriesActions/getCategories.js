import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

const getCategories = createAsyncThunk('categories/getCategories', async () => {
  const responseData = await requestApi.GET(`${API_URLS.categories}transactions-by-categories/`);
  return responseData;
});

export default getCategories;
