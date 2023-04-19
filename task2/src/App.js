import React, { useState } from 'react';
import './index.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    setUsers(data.data);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <h1>Business Guide</h1>
        <button className="btn-get-users" onClick={fetchUsers}>
          Get Users
        </button>
      </nav>
      <div className="quote">
          <h2>"The only way to do great work is to love what you do."</h2>
          <p>- Steve Jobs</p>
        </div>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="user-card-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.first_name} />
              <div className="user-info">
                <h3>{`${user.first_name} ${user.last_name}`}</h3>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
