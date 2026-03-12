import React, { useState } from "react";
import axios from "axios";

function AddProperty() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProperty = {
      title,
      price,
      location,
      image
    };

    try {
      await axios.post("http://localhost:5000/api/properties", newProperty);

      alert("Property Added Successfully");

      setTitle("");
      setPrice("");
      setLocation("");
      setImage("");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>Add Property</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Property Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Add Property
        </button>

      </form>

    </div>
  );
}

export default AddProperty;