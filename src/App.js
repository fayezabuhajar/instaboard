import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList/UserList.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleClickReturnData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=12");
      setLoading(false);
      setUsers(response.data.results);
      setFilteredUsers(response.data.results);
    } catch (error) {
      // toast.error(error || "error fetching data");
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const filtered = users.filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(lowerQuery)
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    handleClickReturnData();
  }, []);

  

  return (
    <>
      <header>
        <Navbar onclick={handleClickReturnData} onSearch={handleSearch} />
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

export default App;
