import { Outlet } from 'react-router';
import Header from './header';
import StickyInfo from './stickyInfo';

export default function Root() {
  return (
    <>
      <Header />
      <StickyInfo />
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}
