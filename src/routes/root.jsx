import { Outlet } from 'react-router';

export default function Root() {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}
