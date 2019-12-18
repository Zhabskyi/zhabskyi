import React from "react";
import useStyles from "./styles";
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProjectItems = ({ title, description, github, website, picture }) => {
  const classes = useStyles();
  return (
    <div className={"col-xl-7 col-md-5"}>
      <div className={classes.project}>
        <div className={classes.project_thumb}>
          <img src={picture} alt='project 1' />
        </div>
        <div className={classes.project_hover}>
          <div className={classes.title}>
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={github}><FontAwesomeIcon icon={faGithub} /></a>
            <a href={website}><FontAwesomeIcon icon={faChrome} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
