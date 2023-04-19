import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <nav>
      <Link to="">DashBoard</Link>
      <Link to="">Orders</Link>
      <Link to="">Stock</Link>
      <Link to="">Products</Link>
      <Link to="">Users</Link>
    </nav>
  );
}

export default Admin;
