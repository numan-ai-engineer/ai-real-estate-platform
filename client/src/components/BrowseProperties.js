import React from "react";

function BrowseProperties(){

return(

<div style={{padding:"40px", background:"#f5f5f5"}}>

<h2 style={{marginBottom:"30px"}}>Browse Properties</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"30px"
}}>

{/* HOMES */}

<div>

<h3>Homes</h3>

<ul>
<li>1 Bedroom Flats</li>
<li>2 Bedroom Flats</li>
<li>3 Bedroom Flats</li>
<li>5 Marla Houses</li>
<li>10 Marla Houses</li>
<li>Low Price Homes</li>
<li>Small Houses</li>
<li>On Instalments Houses</li>
</ul>

</div>

{/* PLOTS */}

<div>

<h3>Plots</h3>

<ul>
<li>Residential Plots</li>
<li>5 Marla Plots</li>
<li>10 Marla Plots</li>
<li>3 Marla Plots</li>
<li>Corner Plots</li>
<li>Park Facing Plots</li>
<li>Low Price Plots</li>
<li>Commercial Plots</li>
</ul>

</div>

{/* COMMERCIAL */}

<div>

<h3>Commercial</h3>

<ul>
<li>Small Offices</li>
<li>New Offices</li>
<li>On Instalments Shops</li>
<li>Small Shops</li>
<li>Running Shops</li>
<li>Commercial Buildings</li>
</ul>

</div>

</div>

</div>

)

}

export default BrowseProperties;