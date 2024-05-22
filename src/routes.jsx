import Root from './routes/root';
import Home from './routes/home';
import Products from './routes/products';
import News from './routes/news';
import AboutUs from './routes/aboutUs';
import ContactUs from './routes/contactUs';

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
        path: '/contact-us',
        element: <ContactUs />,
      },
    ],
  },
];

export default routes;
