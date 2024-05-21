import HeaderMenu from '../headerMenu';
import companyLogo from '../../assets/white-logo.png';
import './_index.scss';

export default function StickyInfo() {
  return (
    <div className="sticky-info">
      <div className="sticky-info-company-details">
        <div className="container">
          <img className="sticky-info--company-logo" src={companyLogo} />
          <div className="sticky-info--tel">01122 334455</div>
        </div>
      </div>
      <HeaderMenu />
    </div>
  );
}
