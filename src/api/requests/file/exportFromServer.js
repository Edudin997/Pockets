import storage from 'src/api/storage';
import { API_URLS } from 'src/consts';

import refreshTokens from '../refreshTokens';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const exportFromServer = async () => {
  const accessToken = storage.GET('access');
  const response = await fetch(`${BASE_URL}${API_URLS.transactions}export/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    refreshTokens();
    return exportFromServer();
  }

  if (!response.ok) throw new Error('Неизвестная ошибка');

  if (response.status === 200) {
    const link = document.createElement('a');
    link.download = response.headers.get('Content-Disposition').split('filename=')[1].split(';')[0];
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      link.href = reader.result;
      link.click();
    };
  }
};

export default exportFromServer;
