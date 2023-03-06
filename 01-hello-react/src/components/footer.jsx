import React from "react";

function Footer(){
	const now = new Date();
	const year = now.getFullYear();
    const fname = "Mia";
	const lName = "Wills";


return(
 <div>
     <p>Created by {fname +" "+lName}</p>
    <p>Copyright @{year}</p>
 </div>
   
)
}
export default Footer;
