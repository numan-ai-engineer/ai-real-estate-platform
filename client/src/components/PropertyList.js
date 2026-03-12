import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function PropertyList() {

  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const fetchProperties = async () => {

    const res = await fetch("http://localhost:5000/api/property");
    const data = await res.json();

    setProperties(data);

  };

  useEffect(() => {

    fetchProperties();

  }, []);

  const filteredProperties = properties.filter((p) => {

    return (

      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (maxPrice === "" || p.price <= maxPrice)

    );

  });

  return (

    <div>

      <h2 className="text-3xl font-bold mb-6">
        Property Listings
        <BrowseProperties/>
      </h2>


      {/* Search */}

      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Search by title..."
          className="border p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          className="border p-2"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

      </div>


      {/* Property Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to={`/property/${p._id}`}>
  <button className="bg-blue-600 text-white px-4 py-2 mt-2">
    View Details
  </button>
</Link>

        {filteredProperties.map((p) => (

          <div

            key={p._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >

            <img
              src={p.image}
              alt="property"
              className="w-full h-48 object-cover"
            />

            <div className="p-4">

              <h3 className="text-xl font-bold">
                {p.title}
              </h3>

              <p className="text-gray-600">
                {p.location}
              </p>

              <p className="text-blue-600 font-bold">
                ${p.price}
              </p>

              <p className="text-gray-500 text-sm mt-2">
                {p.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default PropertyList;