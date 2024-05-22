import Root from './routes/root';
import Home from './routes/home';
import Products from './routes/products';
import News from './routes/news';
import AboutUs from './routes/aboutUs';
import ContactUs from './routes/contactUs';
import Profile, { loader as profileLoader } from './routes/profile';

const routes = [
  {
    path: '/',
    element: <Root />,
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
        path: '/news',
        element: <News />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/about-us/:id',
        element: <Profile />,
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
