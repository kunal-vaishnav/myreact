import React from "react";
function Footer(){
   
    const date=new Date().getFullYear();
    return(
    <footer>
       <p> copyright@disclaimer{date}</p>
    </footer>
    
    );
   
}
export default Footer;