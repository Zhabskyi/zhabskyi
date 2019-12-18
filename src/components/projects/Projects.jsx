import React from "react";
import useStyles from "./styles";
import classnames from "classnames";
import data from "../../static/data/projects";

import ProjectItems from "./projectsItem/ProjectItem";

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h4 className={classes.title}>Portfolios</h4>
      <div className={classnames("row", classes.row)}>
        {data.map(({ title, description, github, website, picture }) => (
          <ProjectItems
            title={title}
            description={description}
            github={github}
            website={website}
            picture={picture}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
