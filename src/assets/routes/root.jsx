import { Outlet } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import StickyInfo from './stickyInfo';

export default function Root() {
  return (
    <>
      <Header />
      <StickyInfo />
      <Outlet />
      <Footer />
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
    </>
  );
}
