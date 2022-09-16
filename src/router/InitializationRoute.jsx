import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { storage } from 'src/api';
import { logoutObserver } from 'src/api/observers';
import { useLogout } from 'src/hooks';

const InitializationRoute = () => {
  const handleLogout = useLogout();
  const refreshToken = storage.GET('refresh');
  let isAuth = false;

  if (refreshToken) {
    isAuth = true;
  } else {
    isAuth = false;
  }

  useEffect(() => {
    const subId = logoutObserver.subscribe(handleLogout);
    return () => logoutObserver.unsubscribe(subId);
  }, [handleLogout]);

  return isAuth ? <Outlet /> : <Navigate to="/login" />; //TODO
};

export default InitializationRoute;
