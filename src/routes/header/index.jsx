import logo from '../../assets/white-logo.svg';
import './_index.scss';

export default function Header() {
  return (
    <header className="main-header">
      <img className="main-header--logo" src={logo} alt="" />
    </header>
  );
}
