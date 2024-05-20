import { useState } from 'react';
import { Link } from 'react-router-dom';

import burgerMenuIcon from '../../assets/burgerMenu.svg';
import closeIcon from '../../assets/close.svg';

import './index.css';

export default function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const menuIcon = menuOpen ? closeIcon : burgerMenuIcon;
  let menuIconClass = 'header-menu-button--icon';
  let navlistClass = 'nav-list header-nav-list';
  if (menuOpen) {
    menuIconClass += ' header-menu-button--close-icon';
    navlistClass += ' show';
  }

  return (
    <div>
      <button
        className="header-menu-button"
        type="button"
        onClick={handleMenuClick}
      >
        <img className={menuIconClass} src={menuIcon} alt="Navigation menu" />
      </button>

      <nav className="header-nav">
        <ul className={navlistClass}>
          <li className="header-nav-list--item">
            <Link
              className="header-nav-list--link"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="header-nav-list--item">
            <Link
              className="header-nav-list--link"
              to="/products"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li className="header-nav-list--item">
            <Link
              className="header-nav-list--link"
              to="/news"
              onClick={() => setMenuOpen(false)}
            >
              News
            </Link>
          </li>
          <li className="header-nav-list--item">
            <Link
              className="header-nav-list--link"
              to="/contact-us"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
