import React from "react";
import useStyles from "./styles";
import classnames from "classnames";
import SocialIcons from "../socialIcons/SocialIcons";
import CopyRight from "../copyRight/CopyRight";
import { Link, animateScroll as scroll } from "react-scroll";

const AboutSection = () => {
  const classes = useStyles();
  return (
    <div id='about' className={classes.container}>
      <h3 className={classes.title}>About me </h3>
      <div>
        <p className={classnames(classes.title, classes.text)}>
          &emsp;&emsp;Full Stack Web Developer with experience in small web
          production projects and over 10 years' experience in oil and gas
          industry. With a Masters Degree in Petroleum Engineering, previous
          experience as a Jr Web Developer as well as a Senior Engineer for 2+
          years. Love back-end and front-end development! Eagerness to learn,
          always driving to explore new technology and improve already known.
          Motivated and energetic individual who likes to solve difficult
          problems and resolve code bugs. Passionate about producing great user
          experiences with customers first attitude.
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
