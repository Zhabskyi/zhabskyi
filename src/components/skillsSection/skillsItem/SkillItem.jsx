import React from "react";
import useStyles from "./styles";


const SkillItem = ({ picture }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img  className={classes.img} src={picture} alt='icon' />
    </div>
  );
};

export default SkillItem;
