import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import teamData from '../../team-data.json';
import './_index.scss';

export async function loader({ params }) {
  for (const department of teamData.departments) {
    for (const member of department.members) {
      if (member.id === params.id) return member;
    }
  }
  // If no member with that id found
  throw new Error('No staff member with that name found.');
}

export default function Profile() {
  const member = useLoaderData();

  return (
    <main className="container top-padding profile">
      <Link to="/about-us">Back</Link>
      <div className="profile--heading">
        <h1 className="profile--name">{member.name}</h1>
        <div className="profile--job-title">{member.jobTitle}</div>
        <div className="profile--email">{member.email}</div>
      </div>

      <div className="grid-two-col profile--grid">
        <img className="profile--photo" src={member.photoUrl} />
        <p className="main-p no-margin">{member.bio}</p>
      </div>
    </main>
  );
}
