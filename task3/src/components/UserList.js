import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Skills</th>
            <th>Profile Pic</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.skills.join(', ')}</td>
              <td>
              <img src= "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=is&k=20&c=PJjJWl0njGyow3AefY7KVNuhkbw5r2skqFiCFM5kyic=" alt="Profile Piccc" width="50" height="50" />
              </td>
              <td>
                <a href={user.website} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
