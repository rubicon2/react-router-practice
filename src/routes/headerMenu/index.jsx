import { useState } from 'react';
import { Link } from 'react-router-dom';

import burgerMenuIcon from '../../assets/burgerMenu.svg';
import closeIcon from '../../assets/close.svg';

import './_index.scss';

export default function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const menuIcon = menuOpen ? closeIcon : burgerMenuIcon;
  let menuIconClass = 'mobile-header-menu-button--icon';
  let navlistClass = 'nav-list mobile-header-nav-list';
  let menuItemTabIndex = -1;
  if (menuOpen) {
    menuIconClass += ' mobile-header-menu-button--close-icon';
    navlistClass += ' show';
    menuItemTabIndex = 0;
  }

  return (
    <>
      <div className="mobile-header-menu">
        <button
          className="mobile-header-menu-button"
          type="button"
          onClick={handleMenuClick}
          aria-expanded={menuOpen}
          aria-controls="header-nav"
        >
          <img className={menuIconClass} src={menuIcon} alt="Navigation menu" />
        </button>

        <nav id="header-nav" className="header-nav">
          <ul className={navlistClass}>
            <li className="mobile-header-nav-list--item">
              <Link
                className="header-link mobile-header-link"
                to="/"
                onClick={() => setMenuOpen(false)}
                aria-hidden={!menuOpen}
                tabIndex={menuItemTabIndex}
              >
                Home
              </Link>
            </li>
            <li className="mobile-header-nav-list--item">
              <Link
                className="header-link mobile-header-link"
                to="/products"
                onClick={() => setMenuOpen(false)}
                aria-hidden={!menuOpen}
                tabIndex={menuItemTabIndex}
              >
                Products
              </Link>
            </li>
            <li className="mobile-header-nav-list--item">
              <Link
                className="header-link mobile-header-link"
                to="/news"
                onClick={() => setMenuOpen(false)}
                aria-hidden={!menuOpen}
                tabIndex={menuItemTabIndex}
              >
                News
              </Link>
            </li>
            <li className="mobile-header-nav-list--item">
              <Link
                className="header-link mobile-header-link"
                to="/about-us"
                onClick={() => setMenuOpen(false)}
                aria-hidden={!menuOpen}
                tabIndex={menuItemTabIndex}
              >
                About Us
              </Link>
            </li>
            <li className="mobile-header-nav-list--item">
              <Link
                className="header-link mobile-header-link"
                to="/contact-us"
                onClick={() => setMenuOpen(false)}
                aria-hidden={!menuOpen}
                tabIndex={menuItemTabIndex}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="desktop-header-menu">
        <div className="container no-padding">
          <nav>
            <ul className="nav-list desktop-nav-list">
              <li>
                <Link className="header-link desktop-header-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="header-link desktop-header-link"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link className="header-link desktop-header-link" to="/news">
                  News
                </Link>
              </li>
              <li>
                <Link
                  className="header-link desktop-header-link"
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="header-link desktop-header-link"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
