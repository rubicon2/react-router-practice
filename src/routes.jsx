import Root from './routes/root';

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <h1>Index</h1>,
      },
      {
        path: '/about-us',
        element: <h1>About Us</h1>,
      },
    ],
  },
];

export default routes;
