import React from "react";
import useStyles from "./styles";
import SkillItem from "./skillsItem/SkillItem";
import classnames from 'classnames';
import data from "./skillsItem/itemsData";

const SkillsSection = () => {
  const classes = useStyles();
  return (
    <div id='skills' className={classes.container}>
      <h4 className={classes.title}>Skills</h4>
      <div className={classnames( classes.block, classes.languages)}>
        <p>Languages</p>
        {data.languages.map(picture => (
          <SkillItem picture={picture} />
        ))}
        </div>
        <div className={classnames( classes.block, classes.frameworks)}>
        <p>Frameworks</p>
        {data.frameworks.map(picture => (
          <SkillItem picture={picture} />
        ))}
        </div>
        <div className={classnames( classes.block, classes.cms)}>
        <p>CMS & Database</p>
        {data.cms.map(picture => (
          <SkillItem picture={picture} />
        ))}
        </div>
        <div className={classnames( classes.block, classes.testing)}>
        <p>Testing</p>
        {data.testing.map(picture => (
          <SkillItem picture={picture} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
