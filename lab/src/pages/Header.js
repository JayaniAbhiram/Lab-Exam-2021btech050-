import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ display: 'flex', gap: '15px', padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
      <Link to="/signup" style={{ color: '#fff', textDecoration: 'none' }}>Signup</Link>
    </nav>
  );
}

export default Header;
