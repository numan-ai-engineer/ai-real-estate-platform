import React, { useEffect, useState } from "react";
import axios from "axios";

function PropertyList(){

const [properties,setProperties]=useState([]);

useEffect(()=>{
fetchProperties();
},[]);

const fetchProperties = async ()=>{

const res = await axios.get("http://localhost:5000/api/properties");

setProperties(res.data);

};

const deleteProperty = async(id)=>{

await axios.delete(`http://localhost:5000/api/properties/${id}`);

fetchProperties();

};

return(

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
gap:"25px"
}}>

{properties.map((p)=>(

<div key={p._id} style={{
borderRadius:"10px",
overflow:"hidden",
boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
}}>

<img
src={p.image}
alt="property"
style={{width:"100%",height:"200px",objectFit:"cover"}}
/>

<div style={{padding:"20px"}}>

<h3>{p.title}</h3>

<p>{p.description}</p>

<h4 style={{color:"green"}}>${p.price}</h4>

<p>{p.location}</p>

<button
onClick={()=>deleteProperty(p._id)}
style={{
background:"red",
color:"white",
border:"none",
padding:"10px",
cursor:"pointer"
}}
>
Delete
</button>

</div>

</div>

))}

</div>

)

}

export default PropertyList;