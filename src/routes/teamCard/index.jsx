import './_index.scss';

export default function TeamCard({ member }) {
  console.log(member);
  return (
    <div className="team-card">
      <img className="team-card--photo" src={member.photoUrl} />
      <h3 className="team-card--name">{member.name}</h3>
      <h4 className="team-card--job-title">{member.jobTitle}</h4>
    </div>
  );
}
