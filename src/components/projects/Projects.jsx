import React from "react";
import useStyles from "./styles";
import classnames from "classnames";
import data from "../../static/data/projects";

import ProjectItems from "./projectsItem/ProjectItem";

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Portfolios</h3>
      <div className={classnames("row", classes.row)}>
        {data.map(({ title, description, github, website, picture }) => (
          <ProjectItems
            key={title}
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
