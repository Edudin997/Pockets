import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

const getCategoriesPeriod = createAsyncThunk('categories/getCategories', async (period) => {
  const responseData = await requestApi.GET(
    `${API_URLS.categories}transactions-by-categories/?transaction_date_year=${period.year}&transaction_date_month=${period.month}`
  );
  return responseData;
});

export default getCategoriesPeriod;
