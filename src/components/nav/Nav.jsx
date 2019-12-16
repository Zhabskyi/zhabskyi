import React from "react";

import classes from "./Nav.module.scss";

import Button from "../button/Button";
import MenuToggle from "../menuToggle/MenuToggle";
import NavItems from "./nav-items/NavItems";
import SideDrawer from "../sideDrawer/SideDrawer";

class Nav extends React.Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <nav className={classes.navbar}>
          <MenuToggle onClick={this.sideDrawerToggleHandler} />
          <div className={classes.navbar__logo}></div>
          <div className={classes.navbar__list}>
            <NavItems />
          </div>
          <div className={classes.navbar__right}>
            <Button
              btnType='success'
              title='Contact Me'
              onClick={this.openSignUpModal}
            />
          </div>
        </nav>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          onClick={this.sideDrawerClosedHandler}
        />
      </>
    );
  }
}
export default Nav;
