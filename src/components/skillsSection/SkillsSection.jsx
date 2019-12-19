import React from "react";
import useStyles from "./styles";
import classnames from "classnames";
import SkillsItem from "./skillsItem/SkillItem";
import data from "./skillsItem/itemsData";

const SkillsSection = () => {
  const classes = useStyles();
  return (
    <div className={classnames("col-xl-6 col-md-6", classes.col)}>
      <div className={classes.project}>
        <div className={classes.project_thumb}>
          <img src={picture} alt='project 1' />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
