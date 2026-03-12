import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PropertyDetails() {

const { id } = useParams();

const [property, setProperty] = useState(null);

useEffect(() => {
fetchProperty();
}, []);

const fetchProperty = async () => {

try {
const res = await axios.get(`http://localhost:5000/api/properties/${id}`);
setProperty(res.data);
} catch (error) {
console.log(error);
}

};

if(!property) return <p>Loading...</p>;

return(
<div style={{padding:"40px"}}>
<h1>{property.title}</h1>
<img 
src={property.image} 
alt="property" 
style={{width:"100%", height:"400px", objectFit:"cover"}} 
/>
<p style={{marginTop:"20px"}}>{property.description}</p>
<h3 style={{color:"green"}}>Price: ${property.price}</h3>
<p>Location: {property.location}</p>
</div>
);

}

export default PropertyDetails;