import { createSlice } from '@reduxjs/toolkit';

import { getNewTransactionList } from 'src/utils/store';

import {
  addNewTransaction,
  deleteTransaction,
  getBalance,
  getTotalAmounts,
  getTransactions,
  loadNewTransactions,
  updateTransaction,
} from './transactionsActions';

const initialState = {
  isNewTransactionsPending: false,
  didWeGetAllTransactions: false,
  list: [],
  offset: 0,
  totalBalance: '0',
  totalIncome: '0',
  totalExpenses: '0',
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    clearTransactions: (state) => {
      state = initialState;
    },
  },
  extraReducers: {
    [getTransactions.fulfilled]: (state, action) => {
      state.list = action.payload.results;
      state.didWeGetAllTransactions = action.payload.allFetched;
      state.offset = action.payload.results.length;
    },
    [addNewTransaction.fulfilled]: (state, action) => {
      const newList = getNewTransactionList([...state.list], action.payload, state.didWeGetAllTransactions);
      state.offset = state.offset + newList.length - state.list.length;
      state.list = newList;
    },
    [deleteTransaction.fulfilled]: (state, action) => {
      const newList = [...state.list];
      const index = newList.findIndex((item) => item.id === action.payload);
      newList.splice(index, 1);
      state.offset -= 1;
      state.list = newList;
    },
    [updateTransaction.fulfilled]: (state, action) => {
      state.list = action.payload.finalList;
      state.offset = action.payload.offset;
    },
    [loadNewTransactions.fulfilled]: (state, action) => {
      state.list = [...state.list, ...action.payload.results];
      state.didWeGetAllTransactions = action.payload.allFetched;
      state.offset = state.offset + action.payload.results.length;
      state.isNewTransactionsPending = false;
    },
    [loadNewTransactions.pending]: (state) => {
      state.isNewTransactionsPending = true;
    },
    [getBalance.fulfilled]: (state, action) => {
      state.totalBalance = action.payload.balance;
    },
    [getTotalAmounts.fulfilled]: (state, action) => {
      state.totalIncome = action.payload.total_income;
      state.totalExpenses = action.payload.total_expenses;
    },
  },
});

const { clearTransactions } = transactionsSlice.actions;

export {
  addNewTransaction,
  clearTransactions,
  deleteTransaction,
  getBalance,
  getTotalAmounts,
  getTransactions,
  loadNewTransactions,
  updateTransaction,
};

export default transactionsSlice.reducer;
