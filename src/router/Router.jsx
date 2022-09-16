import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { PATHNAMES } from 'src/consts';
import { Dashboard, LoginPage, RegisterPage, PocketsPage, Purpose } from 'src/pages';

import InitializationRoute from './InitializationRoute';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<InitializationRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path={PATHNAMES.pockets} element={<PocketsPage />} />
        <Route path={PATHNAMES.purpose} element={<Purpose />} />
      </Route>
      <Route path={PATHNAMES.login} element={<LoginPage />} />
      <Route path={PATHNAMES.register} element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default AppRouter;
