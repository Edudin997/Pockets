import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

import { getBalance } from '../transactionsSlice';

import getTargetsAnalytics from './getTargetsAnalytics';

const deleteTarget = createAsyncThunk('transactions/deleteTarget', async (options, thunkAPI) => {
  await requestApi.DELETE(`${API_URLS.targets}${options.targetId}`);
  options.callback();
  thunkAPI.dispatch(getTargetsAnalytics());
  thunkAPI.dispatch(getBalance());
  return options.targetId;
});

export default deleteTarget;
