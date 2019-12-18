import React from "react";
import useStyles from "./styles";

import ProjectItems from './projectsItem/ProjectItem';



const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.row}>

        <ProjectItems />
      </div>
    </div>
  );
};

export default Projects;
