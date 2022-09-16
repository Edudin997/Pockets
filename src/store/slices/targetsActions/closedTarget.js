import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

import { getBalance } from '../transactionsSlice';

import getTargets from './getTargets';

const closedTarget = createAsyncThunk('targets/closedTarget', async (options, thunkAPI) => {
  const body = JSON.stringify(options.data);
  const responseData = await requestApi.POST(`${API_URLS.targets}${options.targetId}/finish/`, { body });
  options.callback();
  thunkAPI.dispatch(getTargets());
  thunkAPI.dispatch(getBalance());
  return responseData;
});

export default closedTarget;
