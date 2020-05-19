import React from "react";
import useStyles from "./styles";
import { Link } from "react-scroll";

import SocialIcons from "../socialIcons/SocialIcons";

const TopSection = () => {
  const classes = useStyles();
  return (
    <div id='top' className={classes.container}>
      <h2 className={classes.name}>Oleksandr Zhabskyi</h2>
      <p className={classes.title}>Full Stack Web Developer</p>
      <div className={classes.icons}>
        <SocialIcons direction={'column'} />
      </div>
      <Link to={"projects"} spy={true} smooth={true} offset={0} duration={500}>
        <div className={classes.arrow}></div>
      </Link>
    </div>
  );
};

export default TopSection;
