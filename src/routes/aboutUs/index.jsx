import happyMan from '../../assets/happy-man.png';
import MeetTheTeam from '../meetTheTeam';
import './_index.scss';

export default function AboutUs() {
  return (
    <main className="container">
      <h1 className="page-heading">About Us</h1>
      <div className="grid-two-col">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim
            pariatur aut possimus. Nesciunt atque sequi illo cum. Quas,
            accusamus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            repudiandae asperiores? Soluta, quisquam blanditiis. Eligendi maxime
            cumque aspernatur similique velit?
          </p>
        </div>
        <img src={happyMan} />
      </div>
      <MeetTheTeam />
    </main>
  );
}
