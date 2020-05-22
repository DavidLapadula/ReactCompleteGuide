import React from "react"; 
import Logo from "../../Logo/Logo"; 
import NavigtionItems from "../NavigationItems/NavigationItems"; 
import Backdrop from "../../UI/Backdrop/Backdrop"; 
import Aux from "../../../hoc/Auxiliary"; 
import classes from "./SideDrawer.css"; 

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]; 
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]; 
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigtionItems />
                </nav>
            </div>
        </Aux>
    ); 
}; 

export default sideDrawer; 