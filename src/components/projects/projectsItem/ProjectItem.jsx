import React from "react";
import useStyles from "./styles";
import classnames from "classnames";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectItems = ({ title, description, github, website, picture }) => {
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
            <a
              className={classes.link}
              href={github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon className={classes.icon} icon={faGithub} />
            </a>
            <a
              className={classes.link}
              href={website}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon className={classes.icon} icon={faChrome} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
