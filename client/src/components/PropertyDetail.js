import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PropertyDetail() {

  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:5000/api/property/${id}`)
      .then(res => res.json())
      .then(data => setProperty(data));

  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (

    <div>

      <h2 className="text-3xl font-bold mb-4">
        {property.title}
      </h2>

      <img
        src={property.image}
        alt="property"
        className="w-full h-96 object-cover mb-4"
      />

      <p className="text-xl text-blue-600 font-bold">
        ${property.price}
      </p>

      <p className="text-gray-600">
        {property.location}
      </p>

      <p className="mt-4">
        {property.description}
      </p>

      {/* Map */}

      <iframe
        title="map"
        width="100%"
        height="400"
        loading="lazy"
        src={`https://www.google.com/maps?q=${property.location}&output=embed`}
      ></iframe>

    </div>

  );

}

export default PropertyDetail;