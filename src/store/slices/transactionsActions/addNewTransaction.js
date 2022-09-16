import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

import { getCategoriesPeriod } from '../categoriesActions';
import { setMonth, setYear } from '../periodSlice';
import { getBalance } from '../transactionsSlice';

import getTotalAmountsPeriod from './getTotalAmountsPeriod';

const addNewTransaction = createAsyncThunk('transactions/addNewTransaction', async (options, thunkAPI) => {
  const year = options.data.transaction_date.split('-')[0];
  const month = options.data.transaction_date.split('-')[1].replace(/^0+/, '');
  const body = JSON.stringify(options.data);
  const responseData = await requestApi.POST(API_URLS.transactions, { body });
  options.callback();
  thunkAPI.dispatch(getCategoriesPeriod({ year: year, month: month }));
  thunkAPI.dispatch(getTotalAmountsPeriod({ year: year, month: month }));
  thunkAPI.dispatch(getBalance());
  thunkAPI.dispatch(setMonth(Number(month)));
  thunkAPI.dispatch(setYear(Number(year)));
  return responseData;
});

export default addNewTransaction;
