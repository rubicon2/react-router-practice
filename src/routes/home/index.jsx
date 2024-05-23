import happyMan from '../../assets/happy-man.png';
import './_index.scss';

export default function Home() {
  return (
    <main className="container home--container">
      <h1 className="page-heading home--hero">
        THE <span className="home--hero-bold">NEXT GENERATION OF WINDOWS</span>{' '}
        ARE HERE
      </h1>
      <div className="grid-two-col">
        <p className="main-p no-margin">
          Just when you thought windows were done and dusted! Now we have
          windows with doors in them, doors with windows in them, now we have
          windows with doors with windows in them.
        </p>
        <img src={happyMan} alt="" />
      </div>
    </main>
  );
}
