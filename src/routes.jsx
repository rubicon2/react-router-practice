import Root from './routes/root';
import Home from './routes/home';
import Products from './routes/products';
import AboutUs from './routes/aboutUs';
import ContactUs from './routes/contactUs';
import Profile, { loader as profileLoader } from './routes/profile';
import Error from './routes/error';

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
        element: <Products />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/about-us/:id',
        element: <Profile />,
        errorElement: <Error />,
        loader: profileLoader,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
    ],
  },
];

export default routes;
