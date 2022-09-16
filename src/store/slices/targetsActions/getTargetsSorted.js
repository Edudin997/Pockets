import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

const getTargetsSorted = createAsyncThunk('targets/getTargets', async (sort) => {
  const responseData = await requestApi.GET(`${API_URLS.targets}?ordering=${sort}`);
  return responseData;
});

export default getTargetsSorted;
