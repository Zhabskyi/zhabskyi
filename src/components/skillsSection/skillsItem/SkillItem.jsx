import React from "react";
import useStyles from "./styles";
import classnames from "classnames";

const SkillItem = ({ title, description, github, website, picture }) => {
  const classes = useStyles();
  return (
    <div className={classnames("col-xl-6 col-md-6", classes.col)}>
      <div className={classes.project}>
        <div className={classes.project_thumb}>
          <img src={picture} alt='project 1' />
        </div>
        <div className={classes.project_hover}>
          <div className={classes.title}>
            <h4>{title}</h4>
            <p className={classes.text}>{description}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
