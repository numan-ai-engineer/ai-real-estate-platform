import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 40px",
      background: "#0f172a",
      color: "white"
    }}>
      <h2>🏡 DreamHomes</h2>

      <div>
        <Link to="/" style={{color:"white", marginRight:"20px"}}>Home</Link>
        <Link to="/" style={{color:"white"}}>Properties</Link>
      </div>
    </div>
  );
}

export default Navbar;