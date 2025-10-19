import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import UserList from "../UserList/UserList.jsx";

export default function Team() {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);



  const handelFetchTeamData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=100");
      setTeamData(response.data.results);
      setFilteredUsers(response.data.results);
    } catch (error) {
      console.error("Error fetching team data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const filtered = teamData.filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(lowerQuery)
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    handelFetchTeamData();
  }, []);

  // fetch once on mount

  return (
    <>
      <header>
        <Navbar onclick={handelFetchTeamData} onSearch={handleSearch} />
      </header>
      {loading ? (
        <div>loading</div>
      ) : (
        <main>
          <UserList users={filteredUsers} />
        </main>
      )}
    </>
  );
}
