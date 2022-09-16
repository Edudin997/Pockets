import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

import { getBalance } from '../transactionsSlice';

import getTargets from './getTargets';

const addNewTarget = createAsyncThunk('targets/addNewTransaction', async (options, thunkAPI) => {
  const body = JSON.stringify(options.data);
  const responseData = await requestApi.POST(API_URLS.targets, { body });
  options.callback();
  thunkAPI.dispatch(getBalance());
  thunkAPI.dispatch(getTargets());
  return responseData;
});

export default addNewTarget;
