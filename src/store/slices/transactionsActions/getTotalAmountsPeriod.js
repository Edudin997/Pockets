import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

const getTotalAmountsPeriod = createAsyncThunk('transactions/getTotalAmounts', async (period) => {
  const responseData = await requestApi.GET(
    `${API_URLS.transactions}global/?transaction_date_year=${period.year}&transaction_date_month=${period.month}`
  );
  return responseData;
});

export default getTotalAmountsPeriod;
