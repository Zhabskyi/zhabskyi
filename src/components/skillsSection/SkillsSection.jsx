import React from "react";
import useStyles from "./styles";
import SkillItem from "./skillsItem/SkillItem";
import data from './skillsItem/itemsData';


const SkillsSection = () => {
  const classes = useStyles();
  return <div id="skills" className={classes.container}>
    <h4 className={classes.title}>Skills</h4>
    <div>
      {data.languages.map((picture) => 
      <SkillItem picture={picture} />
      )}
    </div>



  </div>;
};

export default SkillsSection;
