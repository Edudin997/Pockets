import storage from 'src/api/storage';
import { API_URLS } from 'src/consts';

import refreshTokens from '../refreshTokens';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const importToServer = async (event) => {
  const file = event.target.files[0];
  const formDate = new FormData();
  formDate.append('file_uploaded', file);
  const accessToken = storage.GET('access');
  const response = await fetch(`${BASE_URL}${API_URLS.transactions}upload/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formDate,
  });

  if (response.status === 401) {
    refreshTokens();
    return importToServer(event);
  }

  if (!response.ok) throw new Error('Неизвестная ошибка');

  return response;
};

export default importToServer;
