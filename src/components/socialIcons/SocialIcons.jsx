import React from "react";
import useStyles from "./styles";

const SocialIcons = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <a href='https://github.com/Zhabskyi'>
          <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/oleksandr-zhabskyi-27a17a34/'>
            <i class='fab fa-linkedin-in'></i>
          </a>
        </li>
        <li>
          <a href='https://resume.creddle.io/resume/9v34tymy7gh'>
          <i class="far fa-file"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
