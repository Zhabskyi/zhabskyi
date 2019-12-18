import React from "react";
import useStyles from "./styles";
import data from "../../static/data/projects";

import ProjectItems from "./projectsItem/ProjectItem";

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.row}>
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
