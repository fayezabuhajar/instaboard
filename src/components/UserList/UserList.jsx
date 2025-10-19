import UserCard from "../UserCard/UserCard.jsx";
import "./UserList.css";
import { useNavigate } from "react-router-dom";


export default function UserList({ users }) {

  const navigate = useNavigate();

  const handleUserClick = (user) => {
    navigate(`/team/${user.login.id}`, { state: { user } });

  };

  return (
    <section id="user-list">
      <div className="user-list">
        <h2>Users</h2>
        {users?.length > 0 ? (
          <ul>
            {users?.map((usersInfo) => (
              <UserCard
                key={usersInfo.email}
                onClick={() => handleUserClick(usersInfo)}
                {...usersInfo}
              />
            ))}
          </ul>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </section>
  );
}
