import React from "react";
import useStyles from "./styles";
import classnames from "classnames";
import SocialIcons from "../socialIcons/SocialIcons";
import CopyRight from "../copyRight/CopyRight";
import { Link } from "react-scroll";

const AboutSection = () => {
  const classes = useStyles();
  return (
    <div id="about" className={classes.container}>
      <h3 className={classes.title}>About me </h3>
      <div>
        <p className={classnames(classes.title, classes.text)}>
          &emsp;&emsp;Front-End Engineer with 3+ years in various front-end projects and progressive web applications. I
          am passionate about developing great user experiences and solving non-trivial tasks and challenges. I have
          strong technical acumen and the ability to tackle ambiguous problems. Develop progressive web applications
          with React and TypeScript. Have expertise in building React Micro Frontend applications. Including testing and
          best practices of continuous deployment.
        </p>
      </div>
      <div className={classes.footer}>
        <SocialIcons direction={"row"} width={"300px"} />

        <Link className={classes.footer_arrow} to={"top"} spy={true} smooth={true} offset={-100} duration={1400}>
          <div className={classes.arrow}></div>
        </Link>
      </div>
      <CopyRight>All Rights Reserved</CopyRight>
    </div>
  );
};

export default AboutSection;
