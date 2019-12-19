import React from "react";
import useStyles from "./styles";
import next from '../../static/svg_logos/nodejs-1.svg'

const SkillsSection = () => {
  const classes = useStyles();
  return <div id="skills" className={classes.container}>
    <h4 className={classes.title}>Skills</h4>


  </div>;
};

export default SkillsSection;
