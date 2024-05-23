import { Link } from 'react-router-dom';
import './_index.scss';

export default function TeamCard({ member }) {
  console.log(member);
  return (
    <div className="team-card">
      <img className="team-card--photo" src={member.photoUrl} />
      <h3 className="team-card--name">{member.name}</h3>
      <h4 className="team-card--job-title">{member.jobTitle}</h4>
      <Link
        className="team-card--profile-link"
        to={`${member.id}`}
        onClick={() => scrollTo(0, 0)}
      >
        {member.name}'s profile
      </Link>
    </div>
  );
}
