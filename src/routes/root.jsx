import { Outlet } from 'react-router';
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
    </>
  );
}
