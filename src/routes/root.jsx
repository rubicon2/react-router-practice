import { Outlet } from 'react-router';
import Header from './header';

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}
