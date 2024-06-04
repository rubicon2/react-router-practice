import Root from './routes/root';
import Error from './routes/error';
import Home from './routes/home';
import Loading from './routes/loading';
import { loader as profileLoader } from './routes/profile';
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
