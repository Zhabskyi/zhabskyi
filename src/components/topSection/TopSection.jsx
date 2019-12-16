import React from "react";
import useStyles from "./styles";

const TopSection = () => {
  const classes = useStyles();
  return <div className={classes.container}>
      <h2 className={classes.name}>Oleksandr Zhabskyi</h2>
      <p className={classes.title}>Full Stack Web Developer</p>
  </div>
};

export default TopSection;
