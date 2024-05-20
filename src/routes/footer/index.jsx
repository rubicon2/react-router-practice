import { Link, Form } from 'react-router-dom';

import logo from '../../assets/white-logo.png';
import facebookLogo from '../../assets/facebookLogo.png';
import twitterLogo from '../../assets/twitterLogo.png';
import instagramLogo from '../../assets/instagramLogo.png';
import './index.css';

// Replace any spaces in the search term with +
const siteSearchUrl =
  'https://www.google.co.uk/search?q=site%253Awww.iceniwindows.co.uk';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="main-footer-grid">
          <img className="main-footer--logo" src={logo} alt="" />
          <div className="main-footer-grid--item">
            <h2 className="main-footer--heading">Policies</h2>
            <ul className="nav-list footer-nav-list">
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Terms of Purchase</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="main-footer-grid--item">
            <h2 className="main-footer--heading">Newsletter</h2>
            <Form>
              <input type="email" placeholder="Email address" />
              <button type="submit">Sign up</button>
            </Form>
          </div>
          <div className="main-footer--item">
            <h2 className="main-footer--heading">Search</h2>
            <Form>
              <input type="text" placeholder="Search" />
              <button type="submit">Search</button>
            </Form>
          </div>
        </div>
        <div className="footer-gubbins">
          <div>&copy; 2024 Ineci Swodniw Ltd.</div>
          <ul className="nav-list social-links">
            <li>
              <a href="https://www.facebook.com/IceniWindows/" target="_blank">
                <img src={facebookLogo} alt="Ineci Swodniw's facebook page" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/IceniWindows" target="_blank">
                <img src={twitterLogo} alt="Ineci Swodniw's twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/iceniwindows/" target="_blank">
                <img src={instagramLogo} alt="Ineci Swodniw's instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
