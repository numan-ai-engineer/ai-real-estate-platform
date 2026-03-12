import ZameenProjects from "../components/ZameenProjects";
import BrowseProperties from "../components/BrowseProperties";
<ZameenProjects/>
import React from "react";
import PropertyList from "./PropertyList";

function Home() {

return (

<div>

{/* NAVBAR */}

<div style={{
background:"#0a2a43",
color:"white",
padding:"15px",
display:"flex",
justifyContent:"space-between"
}}>

<h2>AI Real Estate</h2>

<div>

<span style={{margin:"15px"}}>BUY</span>
<span style={{margin:"15px"}}>RENT</span>
<span style={{margin:"15px"}}>PLOTS</span>
<span style={{margin:"15px"}}>COMMERCIAL</span>
<span style={{margin:"15px"}}>BLOG</span>

</div>

</div>

{/* HERO IMAGE */}

<div style={{
height:"400px",
backgroundImage:"url(https://images.unsplash.com/photo-1560518883-ce09059eeffa)",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
alignItems:"center",
justifyContent:"center",
color:"white"
}}>

<div style={{
background:"rgba(0,0,0,0.6)",
padding:"30px",
borderRadius:"10px"
}}>

<h1>Search properties for sale in Pakistan</h1>

<input
placeholder="Enter City"
style={{
padding:"10px",
width:"200px",
marginRight:"10px"
}}
/>
<a href="/add-property">

<button style={{
padding:"12px 25px",
background:"orange",
color:"white",
border:"none",
marginTop:"20px",
cursor:"pointer"
}}>
Add Property
</button>

</a>

<button style={{
padding:"10px 20px",
background:"green",
color:"white",
border:"none"
}}>
Find
</button>

</div>

</div>

{/* PROPERTY LIST */}

<div style={{padding:"40px"}}>

<h2>Latest Properties</h2>

<PropertyList/>

</div>

</div>

)

}

export default Home;