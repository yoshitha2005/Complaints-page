import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Complaints Box</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create-complaint">New Complaint</Link>
        <Link to="/login">Logout</Link>
      </nav>
    </header>
  );
};

export default Header;
