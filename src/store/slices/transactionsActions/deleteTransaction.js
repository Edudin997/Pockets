import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

import { getCategoriesPeriod } from '../categoriesActions';
import { setMonth, setYear } from '../periodSlice';
import { getBalance } from '../transactionsSlice';

import getTotalAmountsPeriod from './getTotalAmountsPeriod';
import loadNewTransactions from './loadNewTransactions';

const deleteTransaction = createAsyncThunk('transactions/deleteTransaction', async (options, thunkAPI) => {
  const year = options.data.transaction_date.split('-')[0];
  const month = options.data.transaction_date.split('-')[1].replace(/^0+/, '');
  await requestApi.DELETE(`${API_URLS.transactions}${options.transactionId}`);
  options.callback();
  thunkAPI.dispatch(getCategoriesPeriod({ year: year, month: month }));
  const offset = thunkAPI.getState().transactions.offset - 1;
  thunkAPI.dispatch(loadNewTransactions({ offset, limit: 1 }));
  thunkAPI.dispatch(getTotalAmountsPeriod({ year: year, month: month }));
  thunkAPI.dispatch(getBalance());
  thunkAPI.dispatch(setMonth(Number(month)));
  thunkAPI.dispatch(setYear(Number(year)));
  return options.transactionId;
});

export default deleteTransaction;
