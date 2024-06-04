import Root from './assets/routes/root';
import Error from './assets/routes/error';
import Home from './assets/routes/home';
import Loading from './assets/routes/loading';
import { loader as profileLoader } from './assets/routes/profile';
import { Suspense, lazy } from 'react';

function lazyLoadRoute(componentPath) {
  const Component = lazy(() => import(componentPath));

  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
}

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error showIndexLink={true} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: lazyLoadRoute('./assets/routes/products'),
      },
      {
        path: '/about-us',
        element: lazyLoadRoute('./assets/routes/aboutUs'),
      },
      {
        path: '/about-us/:id',
        element: lazyLoadRoute('./assets/routes/profile'),
        errorElement: lazyLoadRoute('./assets/routes/error'),
        loader: profileLoader,
      },
      {
        path: '/contact-us',
        element: lazyLoadRoute('./assets/routes/contactUs'),
      },
    ],
  },
];

export default routes;
