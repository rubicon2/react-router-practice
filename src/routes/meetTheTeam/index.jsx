import TeamCard from '../teamCard';
import teamData from '../../assets/team-data.json';
import './_index.scss';

export default function MeetTheTeam() {
  return (
    <div>
      <h1>Meet The Team</h1>
      <p className="half-width">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus a dolore
        aperiam, harum corrupti temporibus. Odio cumque sed harum? Amet!
      </p>
      {teamData.departments.map((department) => {
        return (
          <div className="meet-the-team--department" key={department.name}>
            <h2>{department.name}</h2>
            <div className="meet-the-team--department-members">
              {department.members.map((member) => {
                return <TeamCard key={member.name} member={member} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
