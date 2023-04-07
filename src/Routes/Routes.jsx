import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import PublicRouter from 'Routes/PublicRouter';
// import PrivateRouter from 'Routes/PrivateRoute';
import Loader from 'components/Loader';

import Layout from '../components/Layout/Layout';
const RegisterPage = lazy(() =>
  import('../page/registrationPage/RegisterPage'),
);
const LoginPage = lazy(() => import('../page/loginPage/LoginPage'));
const RestorePage = lazy(() => import('../page/restorePage/RestorePage'));
const OurFriendsPage = lazy(() =>
  import('../page/ourFriendsPage/OurFriendsPage'),
);
const NewsPage = lazy(() => import('../page/newsPage/NewsPage'));
const NoticesPage = lazy(() => import('../page/noticesPage/NoticesPage'));
const UserPage = lazy(() => import('../page/userPage/UserPage'));
const HomePage = lazy(() => import('../page/homePage/Hero'));
const NotFoundPage = lazy(() => import('../page/notFoundPage/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="restore" element={<RestorePage />} />
          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices/:category" element={<NoticesPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
