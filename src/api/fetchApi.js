import URLs from 'src/consts/apiUrls';
import { checkOptions } from 'src/utils/requests';

import refreshTokens from './requests/refreshTokens';
import storage from './storage';

const BASE_URL = process.env.REACT_APP_BASE_URL;

/**
 *
 * @param {string} message
 * @param {*} [details]
 */
class APIRequestError {
  constructor(message, details, status) {
    this.message = message;
    this.details = details;
    this.status = status;
    this.name = `Ошибка обращения к ${BASE_URL} API`;
  }
}

/**
 * По умолчанию будет добавлен Content-Type: application/json
 *
 * @param {string} requestUrl
 * @param {Object} [fetchOptions]
 * @param {Object} [additionalHeaders]
 * @returns {Object}
 */
const makeRequest = async (requestUrl, fetchOptions, additionalHeaders) => {
  const isAuthentication = requestUrl.includes(URLs.auth);
  const accessToken = storage.GET('access');
  const authHeader = isAuthentication
    ? {}
    : (() => {
        if (!accessToken) return;
        return {
          ...additionalHeaders,
          Authorization: `Bearer ${accessToken}`,
        };
      })();

  const response = await fetch(`${BASE_URL}${requestUrl}`, {
    headers: {
      'Content-Type': 'application/json',
      ...additionalHeaders,
      ...authHeader,
    },
    ...fetchOptions,
  });
  if (response.status === 404) throw new APIRequestError('Сервис недоступен');
  if (response.status === 401) {
    if (!isAuthentication) {
      await refreshTokens();
      return makeRequest(requestUrl, fetchOptions, additionalHeaders);
    }
  }
  const payload = response.status !== 204 ? await response.json() : undefined;
  if (!response.ok) throw new APIRequestError('Неизвестная ошибка', payload, response.status);
  return payload;
};

export default {
  GET: (path, fetchOptions) => {
    return makeRequest(path, {
      method: 'GET',
      ...checkOptions(fetchOptions),
    });
  },
  POST: (path, fetchOptions) => {
    return makeRequest(path, {
      method: 'POST',
      ...checkOptions(fetchOptions),
    });
  },
  PUT: (path, fetchOptions) => {
    return makeRequest(path, {
      method: 'PUT',
      ...checkOptions(fetchOptions),
    });
  },
  PATCH: (path, fetchOptions) => {
    return makeRequest(path, {
      method: 'PATCH',
      ...checkOptions(fetchOptions),
    });
  },
  DELETE: (path, fetchOptions) => {
    return makeRequest(path, {
      method: 'DELETE',
      ...checkOptions(fetchOptions),
    });
  },
};
