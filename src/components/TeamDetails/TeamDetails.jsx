import { useLocation, } from "react-router-dom";

export default function TeamDetails() {

  const location = useLocation();
  const user = location.state?.user; // optional, يمكنك جلبه من state أو fetch حسب id

  if (!user) return <p>No user data found 😕</p>;

  return (
    <div className="team-details">
      <button onClick={() => window.history.back()}>← Back</button>
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
