
import UserCard from "../UserCard/UserCard.jsx";


export default function UserList({ users }) {
  return (
    <section id="user-list">
      <div className="user-list">
        <h2>Users</h2>
        {users?.length > 0 ? (
          <ul>
            {users?.map((usersInfo) => (
              <UserCard key={usersInfo.email} {...usersInfo} />
            ))}
          </ul>
        ) : (
          <p>no data found</p>
        )}
      </div>
    </section>
  );
}
