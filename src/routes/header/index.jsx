import logo from '../../assets/white-logo.png';
import './index.css';

export default function Header() {
  return (
    <header className="main-header">
      <img className="main-header--logo" src={logo} alt="" />
    </header>
  );
}
