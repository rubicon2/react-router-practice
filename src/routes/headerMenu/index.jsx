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

  return (
    <div>
      <button
        className="header-menu-button"
        type="button"
        onClick={handleMenuClick}
      >
        <img
          className="header-menu-button--icon"
          src={menuIcon}
          alt="Open navigation menu"
        />
      </button>
      {menuOpen && (
        <nav className="header-nav">
          <ul className="nav-list header-nav-list">
            <li className="header-nav-list--item">
              <Link className="header-nav-list--link" to="/">
                Home
              </Link>
            </li>
            <li className="header-nav-list--item">
              <Link className="header-nav-list--link" to="/products">
                Products
              </Link>
            </li>
            <li className="header-nav-list--item">
              <Link className="header-nav-list--link" to="/news">
                News
              </Link>
            </li>
            <li className="header-nav-list--item">
              <Link className="header-nav-list--link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
