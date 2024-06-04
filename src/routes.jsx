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
        element: lazyLoadRoute('./routes/products'),
      },
      {
        path: '/about-us',
        element: lazyLoadRoute('./routes/aboutUs'),
      },
      {
        path: '/about-us/:id',
        element: lazyLoadRoute('./routes/profile'),
        errorElement: lazyLoadRoute('./routes/error'),
        loader: profileLoader,
      },
      {
        path: '/contact-us',
        element: lazyLoadRoute('./routes/contactUs'),
      },
    ],
  },
];

export default routes;
