import React from "react";

const Navbar = ({ brandName, handleGetUsers }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">{brandName}</div>
      <button className="btn-get-users" onClick={handleGetUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
