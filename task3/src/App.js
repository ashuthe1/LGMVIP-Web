import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Navbar from "./Navbar";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <Navbar/>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}
export default App