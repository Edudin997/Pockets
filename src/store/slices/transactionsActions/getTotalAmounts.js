import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

const getTotalAmounts = createAsyncThunk('transactions/getTotalAmounts', async (period) => {
  const responseData = await requestApi.GET(`${API_URLS.transactions}global/`);
  return responseData;
});

export default getTotalAmounts;
