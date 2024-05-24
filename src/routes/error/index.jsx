import { useRouteError } from 'react-router';
import { Link } from 'react-router-dom';

export default function Error({ showIndexLink = false }) {
  const error = useRouteError();
  console.error(error);

  let containerClass = 'container';
  if (showIndexLink) containerClass += ' top-padding';

  return (
    <main className={containerClass}>
      {showIndexLink && <Link to="/">Return Home</Link>}
      <h1 className="page-heading">ERROR</h1>
      <p className="main-p">
        An unexpected error has occured:
        <br />
        <i> {error.statusText || error.message}</i>
      </p>
    </main>
  );
}
