import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

const getTransactionsSorted = createAsyncThunk('transactions/getTransactions', async (category) => {
  const responseData = await requestApi.GET(`${API_URLS.transactions}${category}`);
  return {
    results: responseData.results,
    allFetched: !responseData.next,
  };
});

export default getTransactionsSorted;
