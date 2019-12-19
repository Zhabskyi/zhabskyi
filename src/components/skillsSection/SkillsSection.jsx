import React from "react";
import useStyles from "./styles";
import SkillItem from "./skillsItem/SkillItem";
import classnames from 'classnames';
import data from "./skillsItem/itemsData";

const SkillsSection = () => {
  const classes = useStyles();
  return (
    <div id='skills' className={classes.container}>
      <h3 className={classes.title}>Skills</h3>
      <div className={classnames( classes.block, classes.languages)}>
        <p className={classes.text}>Languages</p>
        {data.languages.map(picture => (
          <SkillItem picture={picture} />
        ))}
        </div>
        <div className={classnames( classes.block, classes.frameworks)}>
        <p className={classes.text}>Frameworks</p>
        {data.frameworks.map(picture => (
          <SkillItem picture={picture} />
        ))}
        </div>
        <div className={classnames( classes.block, classes.cms)}>
        <p className={classes.text}>CMS & Database</p>
        {data.cms.map(picture => (
          <SkillItem picture={picture} />
        ))}
        </div>
        <div className={classnames( classes.block, classes.testing)}>
        <p className={classes.text}>Testing</p>
        {data.testing.map(picture => (
          <SkillItem picture={picture} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
