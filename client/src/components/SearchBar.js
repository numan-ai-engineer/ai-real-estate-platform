import React from "react";

function Hero() {
  return (
    <div style={{
      height: "300px",
      backgroundImage: "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    }}>
      <div style={{textAlign:"center"}}>
        <h1>Find Your Dream Home</h1>
        <p>Search properties for sale and rent</p>
      </div>
    </div>
  );
}

export default Hero;