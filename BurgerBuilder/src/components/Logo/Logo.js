import React from "react"; 
import burgerLogo from  "../../assets/images/logo.png"; 
import classes from "./Logo.css"; 

const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo}/>
    </div>
); 

export default logo;