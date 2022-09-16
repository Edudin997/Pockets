import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

const getTargets = createAsyncThunk('targets/getTargets', async () => {
  const responseData = await requestApi.GET(`${API_URLS.targets}`);
  return responseData;
});

export default getTargets;
