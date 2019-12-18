import React from "react";
import useStyles from "./styles";

import Projects from "../projects/Projects";

const PortfolioSection = () => {
  const classes = useStyles();
  return <div id="projects" className={classes.container}>
    <Projects />

  </div>;
};

export default PortfolioSection;
