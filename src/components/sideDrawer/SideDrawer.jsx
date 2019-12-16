import React from "react";

import NavItems from "../nav/nav-items/NavItems";
import classes from "./SideDrawer.module.scss";
import Backdrop from "../backdrop/Backdrop";
import Button from "../button/Button";

const sideDrawer = props => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if (props.open) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} onClick={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.wrapper}>
          <Button btnType='close' onClick={props.onClick}>
            <span></span>
          </Button>
          <div className={classes.logo}></div>
          <nav>
            <NavItems onClick={props.onClick} />
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
