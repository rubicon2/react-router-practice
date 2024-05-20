import HeaderMenu from '../headerMenu';
import logo from '../../assets/logo.png';
import './index.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="company-info">
        <img className="company-info--logo" src={logo} alt="" />
        <div className="company-info--tel">01122 334455</div>
      </div>
      <HeaderMenu />
    </header>
  );
}
