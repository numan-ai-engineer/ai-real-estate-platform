import React from "react";

const projects = [
{
title:"Zameen Arx, Lahore",
status:"hot",
price:"PKR2.88 Crore to 32.1 Crore",
location:"Lahore, CBD Punjab (PCBDDA)",
types:"Flats, Penthouse, Offices, Commercial",
size:"225 sqft to 4376 sqft"
},
{
title:"Zameen Vault, Lahore",
status:"hot",
price:"PKR2.3 Crore to 68.5 Crore",
location:"Lahore, NSIT City",
types:"Shops, Commercial, Offices, Buildings, Flats",
size:"459 sqft to 15394 sqft"
},
{
title:"Swiss Mall Gulberg, Lahore",
status:"hot",
price:"PKR1.21 Crore to 31.78 Crore",
location:"Lahore, MM Alam Road",
types:"Flats, Shops",
size:"125 sqft to 1633 sqft"
}
];

function ZameenProjects(){

return(
<div style={{padding:"40px"}}>
<h2 style={{marginBottom:"20px"}}>Zameen Projects</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit, minmax(300px,1fr))",
gap:"25px"
}}>

{projects.map((p,index)=>(
<div key={index} style={{
border:"1px solid #ddd",
borderRadius:"10px",
overflow:"hidden",
boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
}}>

<div style={{
padding:"20px",
background:"#f7f7f7",
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}>
<h3 style={{margin:0}}>{p.title}</h3>
<span style={{
color:"white",
background:"red",
padding:"3px 10px",
borderRadius:"5px",
fontSize:"12px",
fontWeight:"bold"
}}>{p.status}</span>
</div>

<div style={{padding:"20px"}}>
<p><strong>Price:</strong> {p.price}</p>
<p><strong>Location:</strong> {p.location}</p>
<p><strong>Types:</strong> {p.types}</p>
<p><strong>Size:</strong> {p.size}</p>

<button style={{
marginTop:"10px",
padding:"10px 20px",
background:"#0a2a43",
color:"white",
border:"none",
cursor:"pointer"
}}>
View Details
</button>
</div>

</div>
))}

</div>

</div>
)

}

export default ZameenProjects;