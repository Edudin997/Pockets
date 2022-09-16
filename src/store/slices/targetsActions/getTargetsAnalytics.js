import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

const getTargetsAnalytics = createAsyncThunk('targets/getTargetsAnalytics', async () => {
  const responseData = await requestApi.GET(`${API_URLS.targets}analytics/`);
  return responseData;
});

export default getTargetsAnalytics;
