import { API_URLS } from 'src/consts';
import { setTokens } from 'src/utils/requests';

import requestApi from '../fetchApi';
import { logoutObserver } from '../observers';
import storage from '../storage';

let currentRequest = null;

const makeRequest = () => {
  const refreshToken = storage.GET('refresh');
  return requestApi.POST(`${API_URLS.auth}token/refresh/`, {
    body: {
      refresh: refreshToken,
    },
  });
};

const refreshTokens = async () => {
  currentRequest = currentRequest || makeRequest();
  const response = await currentRequest;
  try {
    setTokens(response);
    currentRequest = null;
  } catch (error) {
    currentRequest = null;
    storage.DELETE('access');
    storage.DELETE('refresh');
    logoutObserver.notify();
  }
};

export default refreshTokens;
