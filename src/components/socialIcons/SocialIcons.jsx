import React from "react";
import useStyles from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

const SocialIcons = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/Zhabskyi'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/oleksandr-zhabskyi-27a17a34/'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://resume.creddle.io/resume/9v34tymy7gh'
          >
            <FontAwesomeIcon icon={faFile} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
