import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';
import { getNewTransactionList } from 'src/utils/store';

import { getCategoriesPeriod } from '../categoriesActions';
import { setMonth, setYear } from '../periodSlice';
import { getBalance } from '../transactionsSlice';

import getTotalAmountsPeriod from './getTotalAmountsPeriod';
import loadNewTransactions from './loadNewTransactions';

const updateTransaction = createAsyncThunk('transactions/updateTransaction', async (options, thunkAPI) => {
  const year = options.data.transaction_date.split('-')[0];
  const month = options.data.transaction_date.split('-')[1].replace(/^0+/, '');
  const body = JSON.stringify(options.data);
  const responseData = await requestApi.PUT(`${API_URLS.transactions}${options.transactionId}`, { body });
  options.callback();
  thunkAPI.dispatch(getCategoriesPeriod({ year: year, month: month }));
  thunkAPI.dispatch(getTotalAmountsPeriod({ year: year, month: month }));
  thunkAPI.dispatch(getBalance());
  thunkAPI.dispatch(setMonth(Number(month)));
  thunkAPI.dispatch(setYear(Number(year)));

  const transactionsState = thunkAPI.getState().transactions;
  const newList = [...transactionsState.list];
  const index = newList.findIndex((item) => item.id === responseData.id);
  newList.splice(index, 1);
  const finalList = getNewTransactionList(newList, responseData, transactionsState.didWeGetAllTransactions);

  let offset = transactionsState.offset;

  if (finalList.length !== transactionsState.list.length) {
    thunkAPI.dispatch(loadNewTransactions({ limit: 1, offset: transactionsState.offset - 1 }));
    offset -= 1;
  }

  return {
    finalList,
    offset,
  };
});

export default updateTransaction;
