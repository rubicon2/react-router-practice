import { useState } from 'react';
import burgerMenuIcon from '../../assets/burgerMenu.svg';
import { Link } from 'react-router-dom';
import './index.css';

export default function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (event) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button
        className="header-menu-button"
        type="button"
        onClick={handleMenuClick}
      >
        <img
          className="header-menu-button--icon"
          src={burgerMenuIcon}
          alt="Open navigation menu"
        />
      </button>
      {menuOpen && (
        <nav>
          <ul className="nav-list header-nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
