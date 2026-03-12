import React, { useState } from "react";

function PropertyForm() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("image", image);

    try {

      await fetch("http://localhost:5000/api/property/upload", {
        method: "POST",
        body: formData
      });

      alert("Property Added Successfully");

      setTitle("");
      setPrice("");
      setLocation("");
      setDescription("");
      setImage(null);

    } catch (error) {

      console.log(error);
      alert("Error adding property");

    }

  };

  return (

    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h2>Add Property</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
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
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <br /><br />

        <button type="submit">Add Property</button>

      </form>

    </div>

  );

}

export default PropertyForm;