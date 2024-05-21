import { Link, Form } from 'react-router-dom';

import logo from '../../assets/white-logo.png';
import facebookLogo from '../../assets/facebookLogo.png';
import twitterLogo from '../../assets/twitterLogo.png';
import instagramLogo from '../../assets/instagramLogo.png';
import './index.css';

const siteSearchUrl =
  'https://www.google.co.uk/search?q=site%253Awww.iceniwindows.co.uk+';

const googlify = (searchTerm) => {
  // Turn a normal space-separated series of words into something approriate for the google search url
  return searchTerm
    .split('')
    .map((char) => (char === ' ' ? '+' : char))
    .join('');
};

const handleSearch = (event) => {
  let searchTerm = event.target.elements.search.value;
  // Replace any spaces in the search term with +!
  console.log(siteSearchUrl + googlify(searchTerm));
  window.location = siteSearchUrl + googlify(searchTerm);
};

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="main-footer-grid">
          <div className="main-footer-grid--item">
            <img className="main-footer--logo" src={logo} alt="" />
            <p>
              Our outstanding PVCu, Aluminium and Composite Door products are
              available across all of the South East of England including
              Witham, Colchester, Maldon, Sudbury, Basildon, Bishop's Stortford,
              Southend on Sea, Harlow and surrounding areas. We also provide
              services in Essex, Suffolk, Cambridgeshire, Bedfordshire,
              Hertfordshire, Kent, Greater London and Surrey.
            </p>
          </div>
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
            <Form className="main-footer--form">
              <input type="email" name="email" placeholder="Email address" />
              <button type="submit">Sign up</button>
            </Form>
          </div>
          <div className="main-footer--item">
            <h2 className="main-footer--heading">Search</h2>
            <Form className="main-footer--form" onSubmit={handleSearch}>
              <input type="text" name="search" placeholder="Search" />
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
